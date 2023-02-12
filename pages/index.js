import { client } from "@/lib/client";
import { urlFor } from "@/lib/client";
import { useMemo, useState } from 'react'

export default function IndexPage({ guitar }) {

  const [query, setQuery] = useState('')
  // console.log(Object.keys(guitar[0]))

  const guitarValues = useMemo(() => {
    // guitarKeys = Object.keys(guitar)
    return Object.values(guitar)
    
  }, [guitar])

/*   const filteredGuitars = guitar.filter(gtr => {
    return Object.values(gtr).filter(value => {
      return value.toString().includes(query.toLowerCase())
    })
  }) */

  const filteredGuitars = useMemo(() => {
    return guitar.filter(gtr => Object
      .values(gtr)
      .map(String)
      .some(v => v.toLowerCase().includes(query.toLowerCase())))
  }, [guitar, query])

  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>Guitars:</h2>
        <br />
        <div className="guitars-container">
          {guitar.length > 0 && (
            <ul>
              {filteredGuitars.map((gtr) => (
                <li key={gtr._id}>
                  <em>{gtr?.name}</em>
                  <br />
                  <img 
                    src={urlFor(gtr.image).url()}
                    width={200}
                    height={'auto'}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        <input type="text"
        value={query} 
        onChange={e => setQuery(e.target.value)}
        />
        {
          guitar.length > 0 && (
            <ul>
              {guitar.filter}
            </ul>
          )
        }
        {!guitar.length > 0 && <p>No guitar to show</p>}
        {/* {guitar.length > 0 && (
          <div>
            <pre>{JSON.stringify(guitar, null, 2)}</pre>
          </div>
        )} */}
        {!guitar.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const guitar = await client.fetch(`*[_type == "guitar"]`)

  return {
    props: {
      guitar
    }
  };
}
