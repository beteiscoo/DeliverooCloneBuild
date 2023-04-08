import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

const FeaturedRows = ({title, Description, ID}) => {
  return (
    <View className = ''>
      <View className = 'justify-between flex-row items-center px-4 mt-4'>
        <Text className='font-bold text-lg'>{title} </Text>
        <ArrowRightIcon size={30} color="#00CCBB"/>
      </View>
      <Text className='text-xs text-gray-500 px-4'>{Description} </Text>

    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      showsHorizontalScrollIndicator={false}
      className='pt-4'>
        <RestaurantCards 
          id={123}
          imgURL="https://www.nigerianfoodtv.com/wp-content/uploads/2020/08/EFO-RIRO.jpg"
          title="Yo! Shi"
          rating={4.5}
          genre="Japanese"
          address="123 ArseFacey"
          description="Test Description"
          dishes={[]}
          long={7.27}
          lat={69}
        />
        <RestaurantCards 
          id={123}
          imgURL="https://www.nigerianfoodtv.com/wp-content/uploads/2020/08/EFO-RIRO.jpg"
          title="Yo! Shi"
          rating={4.5}
          genre="Japanese"
          address="123 ArseFacey"
          description="Test Description"
          dishes={[]}
          long={7.27}
          lat={69}
        />
        <RestaurantCards 
          id={123}
          imgURL="https://www.nigerianfoodtv.com/wp-content/uploads/2020/08/EFO-RIRO.jpg"
          title="Yo! Shi"
          rating={4.5}
          genre="Japanese"
          address="123 ArseFacey"
          description="Test Description"
          dishes={[]}
          long={7.27}
          lat={69}
        />
    </ScrollView>

    </View>
  )
}

export default FeaturedRows