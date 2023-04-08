import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Featured Category Description',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Featured Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}] }],
        
    }
  ]
})
