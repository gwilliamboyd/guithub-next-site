import '@/styles/styles.css'
import { StateContext } from '@/context/StateContext'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
	return (
		<StateContext>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'></meta>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	)
}
