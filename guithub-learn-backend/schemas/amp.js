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
      name: 'techSpecs',
      title: 'Tech Specs',
      type: 'object',
      fields: [
        {
          name: 'amp_Type',
          title: 'Amp Type',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Tube', value: 'tube'},
              {title: 'Solid State', value: 'solidState'},
            ],
          },
          validation: (Rule) => Rule.length(1),
        },
        {
          name: 'power',
          title: 'Power',
          type: 'number',
          description: 'No. of watts total',
        },
        {
          name: 'footswitch',
          title: 'Footswitch',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Included', value: 'included'},
              {title: 'Not Included', value: 'not_included'},
            ],
          },
          validation: (Rule) => Rule.length(1),
        },
      ],
    },
  ],
}
