import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ButtonShape from './components/ButtonShape'

export default function App() {
  const [rectBackgroundColor,setRectBackgroundColor]= useState("#FFFFFFF")
    const [capsuleBackgroundColor,setcapsuleBackgroundColor]= useState("#FFFFFFF")
  var [shape,setShape ]=useState("")
  function setShapeAndGenerateColor(){
    setShape(shape)
    generateColor()
     
  }
  function generateColor()
  {
    const hexList = '0123456789ABCDEF'
    let color ='#' 
    for (let i = 0; i< 6; i++) {
       color += hexList[Math.floor(Math.random()*16)]
    }
    switch (shape.toLowerCase()) {
      case 'rectangle':
          setRectBackgroundColor(color)
        break;
      case 'capsule':
          setcapsuleBackgroundColor(color)
        break;
    
      default:
        setRectBackgroundColor("#FFFFFF")
        setcapsuleBackgroundColor("#FFFFFF")
        break;
    }
  }
 
  return (
    <>
    <StatusBar backgroundColor={"#000000"} />
    <View style={styles.container}>
      {/* Row One */}
      <View style={styles.buttonContainer}>
        <ButtonShape shape={'rectangle'} 
        backgroundColor={rectBackgroundColor}
         onPress={ ()=> {
            shape = 'rectangle'
              setShapeAndGenerateColor()
          } } />
        <ButtonShape shape={'capsule'} 
        backgroundColor={capsuleBackgroundColor}
         onPress={ ()=> {
              shape = 'capsule'
              setShapeAndGenerateColor()
          } } />
        <ButtonShape shape={'rectangle'} 
        backgroundColor={rectBackgroundColor}
         onPress={ ()=> {
            shape = 'rectangle'
              setShapeAndGenerateColor()
          } } />  
        </View>
        {/* Row Two */}
       <View style={styles.buttonContainer}>
        <ButtonShape shape={'capsule'} 
        backgroundColor={capsuleBackgroundColor}
         onPress={ ()=> {
            shape = 'capsule'
              setShapeAndGenerateColor()
          } } />
        <ButtonShape shape={'rectangle'} 
        backgroundColor={rectBackgroundColor}
         onPress={ ()=> {
              shape = 'rectangle'
              setShapeAndGenerateColor()
          } } />
        <ButtonShape shape={'capsule'} 
        backgroundColor={capsuleBackgroundColor}
         onPress={ ()=> {
            shape = 'capsule'
              setShapeAndGenerateColor()
          } } />  
        </View>
        {/* Row Three */}
        <View style={styles.buttonContainer}>
        <ButtonShape shape={'rectangle'} 
        backgroundColor={rectBackgroundColor}
         onPress={ ()=> {
            shape = 'rectangle'
              setShapeAndGenerateColor()
          } } />
        <ButtonShape shape={'capsule'} 
        backgroundColor={capsuleBackgroundColor}
         onPress={ ()=> {
              shape = 'capsule'
              setShapeAndGenerateColor()
          } } />
        <ButtonShape shape={'rectangle'} 
        backgroundColor={rectBackgroundColor}
         onPress={ ()=> {
            shape = 'rectangle'
              setShapeAndGenerateColor()
          } } />  
        </View>
          {/* Row Four */}
       <View style={styles.buttonContainer}>
        <ButtonShape shape={'capsule'} 
        backgroundColor={capsuleBackgroundColor}
         onPress={ ()=> {
            shape = 'capsule'
              setShapeAndGenerateColor()
          } } />
        <ButtonShape shape={'rectangle'} 
        backgroundColor={rectBackgroundColor}
         onPress={ ()=> {
              shape = 'rectangle'
              setShapeAndGenerateColor()
          } } />
        <ButtonShape shape={'capsule'} 
        backgroundColor={capsuleBackgroundColor}
         onPress={ ()=> {
            shape = 'capsule'
              setShapeAndGenerateColor()
          } } />  
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
})