const GuitarContainer = guitars => {
	console.log(guitars)
	return (
		<ul>
			{guitars.map(gtr => (
				<li key={gtr._id}>
					<em>{gtr?.name}</em>
					<br />
					<img
						src={urlFor(gtr.image).url()}
						width={200}
						height={'auto'}
					/>
				</li>
			))}
		</ul>
	)
}

/* export async function getStaticProps() {
	const guitar = await client.fetch(`*[_type == "guitar"]`)

	return {
		props: {
			guitar,
		},
	}
} */
export default GuitarContainer
