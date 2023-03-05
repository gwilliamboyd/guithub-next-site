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
      name: 'image',
      title: 'Image',
      type: 'image',
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
      name: 'effectType',
      title: 'Effect Type',
      type: 'string',
    },
    {
      name: 'isAnalog',
      title: 'Is Analog?',
      type: 'boolean',
      description: 'If checked no, type assumed to be Digital',
    },
    {
      name: 'powerRequirements',
      title: 'Power Requirements',
      type: 'number',
      description: 'Number refers to volts of AC adapter, or no. of 9V batteries required',
    },
    {
      name: 'trueBypass',
      title: 'True Bypass?',
      type: 'boolean',
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
