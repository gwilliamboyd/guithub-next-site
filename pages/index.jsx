import { client } from '@/lib/client'
import homeStyles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function IndexPage({ products, guitars, amps }) {
	const [gtrs, setGtrs] = useState(guitars)
	const [amplifiers, setAmplifiers] = useState(amps)
	/* 	useEffect(() => {
		console.log(gtrs)
		console.log(amplifiers)
		console.log(products)
	}) */

	return (
		<div className={homeStyles.homeMaster}>
			<h1 className={homeStyles.homeHeading}>Welcome to GuitHub!</h1>
			<h5 className={homeStyles.tagline}>
				We're <i>committed</i> to excellence!
			</h5>
		</div>
	)
}

export const getStaticProps = async () => {
	const guitarQuery = '*[_type == "guitar"]'
	const guitars = await client.fetch(guitarQuery)

	const ampQuery = '*[_type == "amp"]'
	const amps = await client.fetch(ampQuery)

	return {
		props: { guitars, amps },
	}
}
