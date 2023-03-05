export default {
  name: 'amp',
  title: 'Amp',
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
      name: 'totalPower',
      title: 'Total Power',
      type: 'number',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      description: 'Choose either "Tube" or "Solid-state"',
    },
    {
      name: 'footswitch',
      title: 'Footswitch',
      type: 'boolean',
      description: 'Choose "Yes" or "No" - Whether footswitch is included',
    },
  ],
}
