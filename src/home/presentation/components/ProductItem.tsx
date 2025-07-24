import { Image, StyleSheet, Text, View } from 'react-native'
import React, { JSX, PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

type ProductItemProps = PropsWithChildren<{
    product: Product
}>
function ProductItem ({product}:ProductItemProps):JSX.Element  {
  return (
    <View style={styles.container}>
        <Image source={{
            uri: product.imageUrl
        }}
        style ={styles.image
        }/>
    <View style={{justifyContent:'center'}}>
        <Text style={styles.name}>{product.name}</Text>
        <View style={[styles.rowContainer,styles.ratingViewContainer]}>
            <View style = {styles.ratingContainer}>
            <Text style = {styles.ratingText}>{product.rating}</Text>
            <Icon style={styles.ratingIcon}name="star" size={14} color="#ffff"/>
            </View>
            <Text style = {styles.ratingCount}>({product.ratingCount.toLocaleString()})</Text>
        </View>

        <View style={[styles.rowContainer,styles.productViewContainer]}>
            <Text style={styles.originalPrice}>
                    ₹{product.originalPrice.toLocaleString()}
                </Text>
                <Text style={styles.discountPrice}>
                    ₹{product.discountPrice.toLocaleString()}
                </Text>
                <Text style={styles.offerPercentage}>
                    %{product.offerPercentage} off
                </Text>
        </View>
    </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
    flexDirection:'row',
    padding: 20
    },
    image: {
        width: 90, 
        height: 150,
        resizeMode: 'contain',
        marginRight: 12
    },
     name: {
      marginBottom: 4,
  
      fontSize: 15,
      fontWeight: '500',
    },
    rowContainer: {
        flexDirection:'row',
    },
    ratingViewContainer:
    {
        marginVertical : 8
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
        marginBottom : 8
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
    },


})