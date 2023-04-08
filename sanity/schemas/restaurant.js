import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [

    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule) => Rule.required(),
    } ,
    {
      name: 'description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    } ,
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Restaurant',
      validation: (Rule) => Rule.required(),
    } ,
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restaurant',
    } ,
    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restaurant',
    } ,
    {
      name: 'address',
      type: 'string',
      title: 'Address of the Restaurant',
      validation: (Rule) => Rule.required()
    } ,
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 Stars)',
      validation: (Rule) =>
        Rule.required()
        .min(1)
        .max(5)
        .error("Please enter a value between 1 and 5 bitch"),
    },
    {
      name: 'category',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}] }],

    }
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
