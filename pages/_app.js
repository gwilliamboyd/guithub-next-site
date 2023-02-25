import { useContext, useState } from 'react'
import Layout from '@/components/Layout'
import '@/styles/styles.css'
import { StateContext } from '@/context/StateContext'

export default function App({ Component, pageProps }) {
	return (
		<StateContext>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	)
}
