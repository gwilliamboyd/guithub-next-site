export default {
  name: 'guitar',
  title: 'Guitar',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'productDescription',
      title: 'Product Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'bodyMaterial',
      title: 'Body Material',
      type: 'string',
    },
    {
      name: 'pickupType',
      title: 'Pickup Type',
      type: 'string',
      description: 'Choose either "Single-coil" or "Humbucker"',
    },
    {
      name: 'artistModel',
      title: 'Artist Model',
      type: 'boolean',
      description:
        'Choose "Yes" or "No" - Ability to filter by artist is available via site search bar',
    },
  ],
}
