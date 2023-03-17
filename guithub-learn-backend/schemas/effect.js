export default {
  name: 'effect',
  title: 'Effect',
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
          name: 'effectType',
          title: 'Effect Type',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Distortion', value: 'distortion'},
              {title: 'Overdrive', value: 'overdrive'},
              {title: 'Chorus', value: 'chorus'},
              {title: 'Phaser', value: 'phaser'},
              {title: 'Flanger', value: 'flanger'},
              {title: 'Wah', value: 'wah'},
              {title: 'Reverb', value: 'reverb'},
              {title: 'Delay', value: 'delay'},
            ],
          },
        },
        {
          name: 'isAnalog',
          title: 'Analog or Digital?',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Analog', value: 'analog'},
              {title: 'Digital', value: 'digital'},
            ],
          },
          validation: (Rule) => Rule.length(1),
        },
        {
          name: 'isTrueBypass',
          title: 'Is True Bypass',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Yes', value: 'yes'},
              {title: 'No', value: 'no'},
            ],
          },
        },
        {
          name: 'powerRequirements',
          title: 'Power Requirements',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: '9V', value: '9V'},
              {title: '18V', value: '18V'},
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
      ],
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
