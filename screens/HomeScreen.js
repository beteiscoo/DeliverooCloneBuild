import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Categories from '../components/Categories';
import FeaturedRows from '../components/FeaturedRows';
// You can't use Safe Area View from the 'react-native' folder for android,
// You need import { SafeAreaView } from 'react-native-safe-area-context';

import { SafeAreaView } from 'react-native-safe-area-context';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon
} from "react-native-heroicons/outline"
import * as Icons from "react-native-heroicons/outline"


export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  return (
    <SafeAreaView className = "bg-white">
      {/**Header */}
      <View className = "flex-row pb-4 items-center mx-4 space-x-2">
        <Image
          source = {{
            uri: 'https://links.papareact.com/wru'
          }}
          className = "h-7 w-7 bg-gray-300 px-4 rounded-full"
        />
        <View className = "flex-1">
          <Text className = "font-bold text-gray-400 text-xs">Deliver Now Nigga!</Text>
          <Text className = "font-bold text-xl">Current Coords bitch
            {/* use npx expo install react-native-svg
             npm i react-native-heroicons react-native-svg or
             npm install @heroicons/react,
             depending on which one you decide to use, otherwise it won't work,
             and you'll get fucked like a bitch ass nigga*/}
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>
      {/* Search bar */}
      <View className='flex-row mx-4 space-x-2 items-center pb-2'>
        <View className='flex-row flex-1 bg-gray-200 space-x-2 p-3 items-center rounded-lg'>
        <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput 
          // You have to put the css above the html/js, otherwise it won't work 
          placeholder='Barbers and Clippers'
          keyboardType='default'
          >
          
          </TextInput>
        </View>
        <AdjustmentsVerticalIcon size={30} color='#00CCBB'/>
      </View>
      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* food categories */}
        <Categories />
        {/* featured rows */}
        <FeaturedRows 
          title="Offers Near You!"
          Description="Why not Support Your Local Restaurant Tonight!" 
          ID="1"/>

        <FeaturedRows 
          title="Featured!"
          Description="Why not Support Your Local Restaurant Tonight!" 
          ID="2"/>

        <FeaturedRows 
          title="Tasty Discounts!"
          Description="Why not Support Your Local Restaurant Tonight!" 
          ID="3"/>

      </ScrollView>
    </SafeAreaView>
  );
};