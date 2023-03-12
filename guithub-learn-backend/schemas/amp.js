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
      name: 'brand',
      title: 'Brand',
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
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'No. of stars out of 5',
    },
    {
      name: 'productDescriptionHeading',
      title: 'Product Description Heading',
      type: 'string',
      description: 'Heading that goes above the block of Product Description text.',
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
          name: 'number_Of_Channels',
          title: 'Number of Channels',
          type: 'number',
        },
        {
          name: 'speaker_Size',
          title: 'Speaker Size',
          type: 'string',
        },
        {
          name: 'preamp_Tubes',
          title: 'Preamp Tubes',
          type: 'string',
        },
        {
          name: 'power_Tubes',
          title: 'Power Tubes',
          type: 'string',
        },
        {
          name: 'eq',
          title: 'EQ',
          type: 'string',
        },
        {
          name: 'reverb',
          title: 'Reverb',
          type: 'string',
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
        {
          name: 'height',
          title: 'Height',
          type: 'number',
          description: 'Number is in inches. Please include up to 2 decimal places if required.',
        },
        {
          name: 'width',
          title: 'Width',
          type: 'number',
          description: 'Number is in inches. Please include up to 2 decimal places if required.',
        },
        {
          name: 'depth',
          title: 'Depth',
          type: 'number',
          description: 'Number is in inches. Please include up to 2 decimal places if required.',
        },
        {
          name: 'weight',
          title: 'Weight',
          type: 'number',
          description: 'Number is in pounds. Please include up to 2 decimal places if required.',
        },
      ],
    },
  ],
}
