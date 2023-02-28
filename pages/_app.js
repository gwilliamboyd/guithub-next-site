import '@/styles/styles.css'
import { StateContext } from '@/context/StateContext'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
	return (
		<StateContext>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	)
}
