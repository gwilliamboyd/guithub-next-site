import { client } from '@/lib/client'
import { useMemo, useState } from 'react'
import Link from 'next/link'

export default function IndexPage() {
	return (
		<>
			{/* <Navbar /> */}
			<Link
				legacyBehavior
				href='/guitars'>
				<a>Guitars</a>
			</Link>
		</>
	)
}
