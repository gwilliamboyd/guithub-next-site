import { useContext, useState } from 'react'
import Layout from '@/components/Layout'
import '@/styles/styles.css'
import { StateContext } from '@/context/StateContext'
// export const StateContext = createContext()

export default function App({ Component, pageProps }) {
	// const [gtrs, setGtrs] = useState(guitars)
	// console.log(gtrs)
	return (
		<StateContext>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	)
}
/* export async function getStaticProps() {
	const guitars = await client.fetch(`*[_type == "guitar"]`)
	// const guitars = await res.json()

	return {
		props: {
			guitars,
		},
	}
} */
