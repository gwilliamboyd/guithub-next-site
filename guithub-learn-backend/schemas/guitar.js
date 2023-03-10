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
          name: 'noOfStrings',
          title: 'Number of Strings',
          type: 'number',
        },
        {
          name: 'color',
          title: 'Color',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Black', value: 'black'},
              {title: 'Sunburst', value: 'sunburst'},
              {title: 'Red', value: 'red'},
              {title: 'Blue', value: 'blue'},
              {title: 'Green', value: 'green'},
              {title: 'Natural', value: 'natural'},
              {title: 'White', value: 'white'},
              {title: 'Gray', value: 'gray'},
            ],
          },
          validation: (Rule) => Rule.length(1),
        },
        {
          name: 'bodyMaterial',
          title: 'Body Material',
          type: 'string',
        },
        {
          name: 'neckMaterial',
          title: 'Neck Material',
          type: 'string',
        },
        {
          name: 'fretboardMaterial',
          title: 'Fretboard Material',
          type: 'string',
        },
        {
          name: 'neckJoint',
          title: 'Neck Joint',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Set Neck', value: 'setNeck'},
              {title: 'Bolt-on Neck', value: 'boltOnNeck'},
            ],
          },
          validation: (Rule) => Rule.length(1),
        },
        {
          name: 'noOfFrets',
          title: 'Number of Frets',
          type: 'number',
        },
        {
          name: 'fretboardRadius',
          title: 'Fretboard Radius',
          type: 'number',
        },
        {
          name: 'scaleLength',
          title: 'Scale Length',
          type: 'number',
          description:
            'Number in inches (please include up to 2 decimal places if required e.g. 24.75)',
        },
        {
          name: 'pickupType',
          title: 'Pickup Type',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              {title: 'Single-coil', value: 'singlecoil'},
              {title: 'Humbucker', value: 'humbucker'},
            ],
          },
          validation: (Rule) => Rule.length(1),
        },
        {
          name: 'neckPickup',
          title: 'Neck Pickup',
          type: 'string',
        },
        {
          name: 'middlePickup',
          title: 'Middle Pickup',
          type: 'string',
        },
        {
          name: 'bridgePickup',
          title: 'Bridge Pickup',
          type: 'string',
        },
        {
          name: 'controls',
          title: 'Controls',
          type: 'string',
        },
        {
          name: 'switching',
          title: 'Switching',
          type: 'string',
        },
        {
          name: 'bridge',
          title: 'Bridge',
          type: 'string',
        },
        {
          name: 'tuners',
          title: 'Tuners',
          type: 'string',
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
