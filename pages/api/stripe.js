import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
	if (req.method === 'POST') {
		console.log(req.body)
		try {
			const params = {
				submit_type: 'pay',
				mode: 'payment',
				payment_method_types: ['card'],
				billing_address_collection: 'auto',
				shipping_options: [
					{ shipping_rate: 'shr_1MlhSIBvdB0j1ehjytsn94tN' }, //Free
					{ shipping_rate: 'shr_1MlhVABvdB0j1ehjSaUDQLNC' }, // Standard
					{ shipping_rate: 'shr_1MlhUhBvdB0j1ehjrJCBDxJZ' }, // Amp
					{ shipping_rate: 'shr_1MlhU9BvdB0j1ehjPlvziHS0' }, // Amp - large
					{ shipping_rate: 'shr_1MlhTIBvdB0j1ehjqicb4NFn' }, // Guitar
				],
				line_items: req.body.map(item => {
					const img = item.image[0].asset._ref
					const newImage = img
						.replace(
							'image-',
							'https://cdn.sanity.io/images/ggll893a/production/'
						)
						.replace('-webp', '.webp')
					return {
						price_data: {
							currency: 'usd',
							product_data: {
								name: item.name,
								images: [newImage],
							},
							unit_amount: item.price * 100,
						},
						adjustable_quantity: {
							enabled: true,
							minimum: 1,
						},
						quantity: item.quantity,
					}
				}),
				success_url: `${req.headers.origin}/?success=true`,
				cancel_url: `${req.headers.origin}/?canceled=true`,
			}
			// Create Checkout Sessions from body params.
			const session = await stripe.checkout.sessions.create(params)
			res.status(200).json(session)
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message)
		}
	} else {
		res.setHeader('Allow', 'POST')
		res.status(405).end('Method Not Allowed')
	}
}
