export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pricesByMaterial',
      title: 'Prices By Material',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'material',
              title: 'Material',
              type: 'string',
              options: {
                list: [
                  { title: 'Aluminum', value: 'Aluminum' },
                  { title: 'Stainless Steel', value: 'Stainless Steel' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule) => Rule.required().positive(),
            },
          ],
        },
      ],
      description: 'Different prices based on the selected material',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.max(500),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'materialOptions',
      title: 'Material Options',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available materials for the product, e.g., Aluminum, Stainless Steel',
    },
    {
      name: 'cordColors',
      title: 'Cord Colors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'color',
              title: 'Color',
              type: 'string',
              description: 'Hex code for the color, e.g., #ffffff for white',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Display name for the color, e.g., "White", "Green"',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      description: 'Available colors for the product cord',
    },
    {
      name: 'switchTypes',
      title: 'Switch Types',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Types of switches available, e.g., Floor Switch, Thumb Switch',
      options: {
        list: [
          { title: 'Floor Switch', value: 'Floor Switch' },
          { title: 'Thumb Switch', value: 'Thumb Switch' },
        ],
      },
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        {
          name: 'total',
          title: 'Total',
          type: 'string',
          description: 'Overall dimensions of the product',
        },
        {
          name: 'shade',
          title: 'Shade',
          type: 'string',
          description: 'Dimensions of the product shade',
        },
        {
          name: 'cordLength',
          title: 'Cord Length',
          type: 'string',
          description: 'Length of the cord',
        },
      ],
      description: 'Physical dimensions of the product',
    },
    {
      name: 'careInstructions',
      title: 'Care Instructions',
      type: 'text',
      description: 'Instructions for taking care of the product',
    },
    {
      name: 'materialComparison',
      title: 'Material Comparison',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'aluminum',
              title: 'Aluminum',
              type: 'string',
              description: 'Comparison point for Aluminum',
              validation: (Rule) => Rule.optional(),
            },
            {
              name: 'stainlessSteel',
              title: 'Stainless Steel',
              type: 'string',
              description: 'Comparison point for Stainless Steel',
              validation: (Rule) => Rule.optional(),
            },
          ],
        },
      ],
      description: 'Comparison points for Aluminum and Stainless Steel.',
    },
  ],
};
