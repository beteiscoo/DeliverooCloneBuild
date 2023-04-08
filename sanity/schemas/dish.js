import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of dish',
      validation: (Rule) =>
      Rule.required()
        .min(0)
        .error("the price cannot be less than $0, bitch"),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of dish',
    }

  ]
})
