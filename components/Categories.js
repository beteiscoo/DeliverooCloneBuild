import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    className='space-x-2'>
      
      {/* Category Cards */}
      <CategoryCard 
            imgUrl="https://links.papareact.com/gn7"
            title="Category Card 1 "/>
        <CategoryCard 
            imgUrl="https://links.papareact.com/gn7"
            title="Category Card 2 "/>
        <CategoryCard 
            imgUrl="https://links.papareact.com/gn7"
            title="Category Card 3 "/>
        <CategoryCard 
            imgUrl="https://links.papareact.com/gn7"
            title="Category Card 1 "/>
        <CategoryCard 
            imgUrl="https://links.papareact.com/gn7"
            title="Category Card 2 "/>
        <CategoryCard 
            imgUrl="https://links.papareact.com/gn7"
            title="Category Card 3 "/>
        
    </ScrollView>
  );
};

export default Categories