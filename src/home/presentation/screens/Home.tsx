import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'

import { RootStackParamList, Routes } from '../../../../routes/Routes'
import { PRODUCTS_LIST } from '../../data/product_list'
import ProductItem from '../components/ProductItem'


type HomeProps = NativeStackScreenProps<RootStackParamList,typeof Routes.Home>
const ItemSeparator = () => <View style={styles.dividerStyle} />;

const Home = ({navigation}:HomeProps) => (
    <FlatList
      keyExtractor={item => item.id}
      data={PRODUCTS_LIST}
      renderItem={({ item }) => (
        <Pressable onPress={()=> navigation.navigate(Routes.Details,{
          product: item
        })}>
        <ProductItem product={item} />
        </Pressable>
      )}
      ItemSeparatorComponent={ItemSeparator}
       />
)

export default Home

const styles = StyleSheet.create({
    container :{
        flex: 1,
    },
    text:{
        color:'#000000'
    },
    dividerStyle:
    {
      height: 1,
      backgroundColor: '#d3d3d3',
      marginHorizontal: 12
    }
})