import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SparklesIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import React from 'react'

const RestaurantCards = ({
    id,
    imgURL,
    title,
    rating,
    genre,
    address,
    description,
    dishes,
    long,
    lat,
}) => {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow rounded'>
        <Image
            source={{
                uri: imgURL
            }}
            className='h-36 w-64 rounded sm'
        >

        </Image>
        <Text
            className='font-bold text-lg px-3'
        >{title}</Text>

        <View className='flex-row space-x-2 items-center px-3'>
            <SparklesIcon size={20} color='#50c878' opacity={.5}/>
            <Text className='text-xs text-gray-500'>
                <Text className='text-emerald-500'>{rating}</Text>   ▪   {genre}
            </Text>
        </View>

        <View className='flex-row space-x-2 items-center px-3' >
            <MapPinIcon size={20} color='gray' />
            <Text className='text-xs text-gray-500'>Nearby   ▪   {address}</Text>
        </View>
        </TouchableOpacity>
  )
}

export default RestaurantCards