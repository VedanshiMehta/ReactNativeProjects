import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  const [backgroundColor,setBackgroundColor ]= useState("#FFFFFFF")
  var [shape,setShape ]=useState('')
  function generateBackGroundColor(){
    const hexList = '0123456789ABCDEF'
    let color ='#'
    for (let i = 0; i< 6; i++) {
       color += hexList[Math.floor(Math.random()*16)]
    }
    setBackgroundColor(color)
  }
 
  return (
    <>
    <StatusBar backgroundColor={"#000000"} />
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style ={[styles.squareActionBtn]}
        onPress={()=>{}}>
          <View style = {[styles.squareActionBtn]}>
            <Text style = {styles.squareActionBtnText}>{shape = 'square'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style ={[styles.squareActionBtn]}>
          <View style = {[styles.squareActionBtn]}>
            <Text style = {styles.squareActionBtnText}>{shape = 'square'}</Text>
          </View>
         </TouchableOpacity>
        <TouchableOpacity style ={[styles.squareActionBtn]}>
         <View style = {[styles.squareActionBtn]}>
            <Text style = {styles.squareActionBtnText}>{shape = 'square'}</Text>
          </View>
        </TouchableOpacity>
        </View>
       <View style={styles.buttonContainer}>
         <TouchableOpacity style ={[styles.squareActionBtn]}>
            <View style = {[styles.squareActionBtn]}>
             <Text style = {styles.squareActionBtnText}>{shape = 'square'}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style ={[styles.squareActionBtn]}>
          <View style = {[styles.squareActionBtn]}>
            <Text style = {styles.squareActionBtnText}>{shape = 'square'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style ={[styles.squareActionBtn]}>
          <View style = {[styles.squareActionBtn]}>
            <Text style = {styles.squareActionBtnText}>{shape = 'square'}</Text>
          </View>
        </TouchableOpacity>
        </View>
       <View style={styles.buttonContainer}>
         <TouchableOpacity style ={[styles.squareActionBtn]}>
          <View style = {[styles.squareActionBtn]}>
          <Text style = {styles.squareActionBtnText}>{shape = 'square'}</Text>
        </View>
        </TouchableOpacity>
         <TouchableOpacity style ={[styles.squareActionBtn]}>
        <View style = {[styles.squareActionBtn]}>
          <Text style = {styles.squareActionBtnText}>{shape = 'square'}</Text>
        </View>
        </TouchableOpacity>
         <TouchableOpacity style ={[styles.squareActionBtn]}>
        <View style = {[styles.squareActionBtn]}>
          <Text style = {styles.squareActionBtnText}>{shape = 'square'}</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:20,
    },  
    buttonContainer: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    } ,
    squareActionBtn: {
      flex: 1,
      margin:2,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
    squareActionBtnText:{
      color:'#000000',
      fontSize:18,
      fontWeight:500,
      textTransform:'uppercase'
    },

})