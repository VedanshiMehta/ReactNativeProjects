import { StyleSheet, Text, TouchableOpacity, View,Image,TextInput } from 'react-native'
import React, { useState, PropsWithChildren } from 'react'
// import { connect } from 'react-redux'
import { connect, useDispatch, useSelector } from 'react-redux'
import { buyCake, buyIceCream, restoreCake, restoreIceCream } from '../../../core/services/redux'

type BuyCakeProps = PropsWithChildren<{
    item: number;
    buyItem: (qty: number) => void;
    restoreItem:()=> void;
    isCake: boolean;
}>

function BuyCake (props:BuyCakeProps) {
    // using hooks
    // const props.item = useSelector(state  => state.cake.props.item)
    const [number,setNumber]= useState('')
    const [error,setError]= useState('')

    // const dispatch = useDispatch()

    const buyItems=()=>
    {
        const amount = parseInt(number)
        props.buyItem(amount)
        // dispatch(buyCake(number));
       setNumber('');  
    }
    const hadleOnChange = (qty : string)=>{
        setNumber(qty);
        const amount = parseInt(qty);
        if (isNaN(amount) || amount <= 0) {
        setError('Please enter a valid number');
        } else if (amount > props.item) {
        setError(`Only ${props.item} ${props.isCake?'cakes':'ice-cream'} available`);
         } else {
         setError('');
        }

    }
     return (
    <View style={styles.container}>
      {/* Cakes */}
       <Image 
             style={styles.image}
             source={
              {
                  uri: props.isCake ?'https://www.justbake.in/userfiles/wedding-cake-23.jpg':
                  'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11.jpg'
              }
             }/>
      {props.item > 0 ?
      (<Text style={styles.cakeCountText}>{`Number of ${props.isCake?'cakes':'ice-cream'}: ${props.item}`}</Text>): 
      (<Text style={styles.cakeCountText}>Cakes are Out Of Stock!</Text>)}
      <TextInput style={[styles.inputStyle]}
                    value={number}
                    onChangeText={(value) => hadleOnChange(value)}
                    placeholder={`Enter number of ${props.isCake ? 'cake' : 'ice-cream'} to buy`}
                    placeholderTextColor={'#eb3b5a'}
                    keyboardType= 'numeric'
                    returnKeyType='done'
                    />
      {error != ' ' && (<Text style = {styles.errorText}>{error}</Text>)}
       <View style ={styles.buttonContainer}>
       <TouchableOpacity
       disabled={props.item ===0 || parseInt(number) > props.item}
       style={[styles.buyCakeButton, (props.item===0 || parseInt(number) > props.item) && styles.diableCakeButton]}
       onPress={()=> buyItems()}>
        <Text style ={[styles.buttonText,(props.item ===0 || parseInt(number) > props.item) && styles.diableButtonText]}>{`${props.isCake? 'BUY CAKE':'BUY ICE-CREAM'}`}</Text>
       </TouchableOpacity>
       <TouchableOpacity
       disabled={props.item>0}
       style={[styles.buyCakeButton, props.item > 0 && styles.diableCakeButton]}
       onPress={()=> props.restoreItem()}
       >
        <Text style ={[styles.buttonText,props.item>0 && styles.diableButtonText]}>{`${props.isCake? 'RE-STORE CAKE':'RE-STORE ICE-CREAM'}`}</Text>
       </TouchableOpacity>
       </View>
    </View>
  )
 
}
// using connection package
const mapStateToProps = (state:any, ownProps : any) => {
    const itemState = ownProps.cake
                    ?state.cake.numOfCakes
                    :state.iceCream.numOfIceCream
    return{
        item: itemState,
        isCake: ownProps.cake
    }
}
const mapDispatchToProps= (dispacth:any, ownProps: any) =>{
    const dispatchFunction = ownProps.cake
    ? (number:number) =>dispacth(buyCake(number))
    :(number:number) =>dispacth(buyIceCream(number))
 const dispatchRestoreFunction = ownProps.cake
    ? () =>dispacth(restoreCake())
    :() =>dispacth(restoreIceCream())

    return{
        buyItem: dispatchFunction,
        restoreItem: dispatchRestoreFunction
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (BuyCake)
// export default BuyCake

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginBottom:20,
    },
    image:{
        height: 200,
        width:'100%',
        resizeMode:'contain',
        marginVertical:10,
    },
    cakeCountText:{
        color:'#000000',
        fontSize:18,
        fontWeight:600
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