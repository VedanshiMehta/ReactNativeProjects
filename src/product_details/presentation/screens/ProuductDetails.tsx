import React from 'react'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList, Routes } from '../../../../routes/Routes'
import Icon from 'react-native-vector-icons/MaterialIcons'


const {height}= Dimensions.get('screen')
const {width}= Dimensions.get('window')
type ProductDetailsProps = NativeStackScreenProps<RootStackParamList,typeof Routes.Details>

 
const TagSeparator = () => <View style={{margin: 4}} />;

const ProductDetails = ({route}:ProductDetailsProps) => {
  const {product} = route.params
  return (
    <ScrollView>
    <View style ={styles.container}>
     <Image style ={styles.image}
          source={{uri:product.imageUrl}}/>

      <View>
            <View style={[styles.rowContainer,styles.ratingViewContainer]}>
                <View style = {styles.ratingContainer}>
                <Text style = {styles.ratingText}>{product.rating}</Text>
                <Icon style={styles.ratingIcon}name="star" size={14} color="#ffff"/>
                </View>
                <Text style = {styles.ratingCount}>{product.ratingCount.toLocaleString()} ratings</Text>
            </View>
    
            <View style={[styles.rowContainer,styles.productViewContainer]}>
                    <Text style={styles.offerPercentage}>
                        %{product.offerPercentage} off
                    </Text>
                    <Text style={styles.originalPrice}>
                        ₹{product.originalPrice.toLocaleString()}
                    </Text>
                    <Text style={styles.discountPrice}>
                        ₹{product.discountPrice.toLocaleString()}
                    </Text>
                   
            </View>
            <FlatList
            data={product.tags}
            scrollEnabled={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item})=>(
                 <Text style={styles.tagText}>{item}</Text>
            )}
            ItemSeparatorComponent={TagSeparator}
            />
        </View>

    
    </View>
    </ScrollView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
     container :{
        flex: 1,
        color: '#ffffff',
        padding:20
    },
    image:{
     width: "100%",
     height: height/1.8,
     resizeMode:'contain',
     
    },
     rowContainer: {
        flexDirection:'row',
    },
    ratingViewContainer:
    {
        marginVertical : 10
    },
    ratingContainer:
    {
     backgroundColor: "#009933",
     paddingHorizontal:10,
     paddingVertical: 2,
     borderRadius:6,
     marginRight: 5,
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection:'row'
    },
    ratingText:{
      color: '#ffffff',
      fontSize: 12,
      fontWeight: '600',
    },
    ratingIcon:{
        marginLeft:3,
    },
    ratingCount: {
      color: '#878787',
    },
    productViewContainer:
    {
      backgroundColor: "#ccffcc",
      paddingVertical:20,
      alignItems:'center',
      marginBottom:10
    },
    originalPrice: {
      fontSize: 18,
      marginRight: 6,
      fontWeight: '600',
      color: 'rgba(0, 0, 0, 0.5)',
      textDecorationLine: 'line-through',
    },
    discountPrice: {
      fontSize: 18,
      marginRight: 4,
      fontWeight: '600',
      color: '#000000',
    },
    offerPercentage: {
      fontSize: 17,
      fontWeight: '600',
      color: '#4bb550',
      marginHorizontal: 10
    },
    tagText: {
      alignSelf:'flex-start',
      fontSize: 16,
      fontWeight: '400',
      color: '#000000',
      borderBlockColor:"#000000",
      borderRadius:6,
      borderWidth:1,
      paddingHorizontal:8,
      paddingVertical:4
    },
   
})