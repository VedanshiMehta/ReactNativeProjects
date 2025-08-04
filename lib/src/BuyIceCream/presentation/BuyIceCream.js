import { StyleSheet, Text, TouchableOpacity, View, Image,TextInput} from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream, restoreIceCream } from '../../../core/services/redux'



function BuyIceCream () {
     const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream )
    const dispatch = useDispatch()
     const [number,setNumber]= useState('')
        const [error,setError]= useState('')
    
        const buyIceCreams=()=>
        {
            dispatch(buyIceCream(number));
            setNumber('');  
        }
        const hadleOnChange = (qty)=>{
            setNumber(qty);
            const amount = parseInt(qty);
            if (isNaN(amount) || amount <= 0) {
            setError('Please enter a valid number');
            } else if (amount > numOfIceCream) {
            setError(`Only ${numOfIceCream} cakes available`);
             } else {
             setError('');
            }
    
        }
   
     return (
    <View style={[styles.container]}>
       {/* IceCreams */}
       <Image 
       style={styles.image}
       source={
        {
            uri: 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11.jpg'
        }
       }/>
        {numOfIceCream > 0 ?
      (<Text style={styles.cakeCountText}>Number of ice-creams: {numOfIceCream}</Text>): 
      (<Text style={styles.cakeCountText}>Ice-Creams are Out Of Stock!</Text>)}
     <TextInput style={[styles.inputStyle]}
                        value={number}
                        onChangeText={(value) => hadleOnChange(value)}
                        placeholder='Enter number of ice-cream to buy'
                        placeholderTextColor={'#eb3b5a'}
                        keyboardType= 'number'
                        returnKeyType='done'
                        />
    {error != ' ' && (<Text style = {styles.errorText}>{error}</Text>)}
    <View style={styles.buttonContainer}>
    <TouchableOpacity
       disabled={(numOfIceCream===0 || number > numOfIceCream)}
       style={[styles.buyCakeButton, (numOfIceCream===0 || number > numOfIceCream) && styles.diableCakeButton]}
       onPress={()=>buyIceCreams()}
       >
        <Text style ={[styles.buttonText,(numOfIceCream===0 || number > numOfIceCream)&& styles.diableButtonText]}> BUY ICECREAM</Text>
       </TouchableOpacity>
    <TouchableOpacity
        disabled={numOfIceCream>0}
        style={[styles.buyCakeButton, numOfIceCream > 0 && styles.diableCakeButton]}
        onPress={()=>dispatch(restoreIceCream())}
        >
               <Text style ={[styles.buttonText,numOfIceCream>0 && styles.diableButtonText]}>RE-STORE ICECREAM</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
 
 
}
export default BuyIceCream

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    cakeCountText:{
        color:'#FFFFFF',
        fontSize:18,
        fontWeight:600
    },
    image:{
        height: 200,
        width:'100%',
        resizeMode:'contain',
        marginVertical:10,

    },
      inputStyle: {
     backgroundColor:'#f3e3e3ff',
     color:"#eb3b5a",
     padding: 10,
     height: 55,
     alignSelf: 'stretch',
     borderRadius: 5,
     marginTop:10,
     shadowColor: '#000',
     shadowOffset: {
       width: 0,
       height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
    },
    errorText:{
        color:'red',
        fontSize: 16,
        fontWeight:500,
        alignSelf:'stretch'
    },
    buttonContainer:{
        flexDirection: 'row',
        gap:10
    },
    buttonText:{
        fontSize:16,
        color:'#FFFFFF',
        fontWeight:800
    },
     diableButtonText:{
        color:'#000000',
    },
    buyCakeButton:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#eb3b5a',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:15,
        marginVertical:5,
        borderRadius:6,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1,
    },
    diableCakeButton:{
        backgroundColor:'#f2c0c9ff',
    }

})