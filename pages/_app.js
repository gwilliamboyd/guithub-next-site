import { client } from '@/lib/client'
import '@/styles/styles.css'
import { StateContext } from '@/context/StateContext'

export default function App({ Component, pageProps, guitars, amps }) {
	return (
		<StateContext>
			<Component {...pageProps} />
		</StateContext>
	)
}
