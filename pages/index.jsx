import { client } from '@/lib/client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function IndexPage({ guitars, amps }) {
	const [gtrs, setGtrs] = useState(guitars)
	const [amplifiers, setAmplifiers] = useState(amps)
	useEffect(() => {
		console.log(gtrs)
		console.log(amplifiers)
	})

	return (
		<>
			<Navbar guitars={guitars} />
			<Link
				legacyBehavior
				href='/guitars'>
				<a>Guitars</a>
			</Link>
			<Link
				legacyBehavior
				href='/searchResults'>
				<a>Search results</a>
			</Link>
		</>
	)
}

export const getServerSideProps = async () => {
	const guitarQuery = '*[_type == "guitar"]'
	const guitars = await client.fetch(guitarQuery)

	const ampQuery = '*[_type == "amp"]'
	const amps = await client.fetch(ampQuery)

	return {
		props: { guitars, amps },
	}
}
