import { createClient } from 'next-sanity'
// import { SanityClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
	projectId: 'ggll893a',
	dataset: 'production',
	apiVersion: '2023-02-05',
	useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)
