import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { JSX, useState } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'


type DiceProps = {
  imagUrl : ImageSourcePropType
}
 const Dice = ({imagUrl}:DiceProps):JSX.Element => {
  return (<View style ={styles.diceContainer}>
    <Image 
    style={styles.diceImage}
    source={imagUrl}
    />
    </View>)
 }

 function App():JSX.Element {
 const [diceImage,setDiceImage]= useState<ImageSourcePropType>(DiceOne)
 const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
  };

 function rollDiceOnTap()
 {
  let randomNuber = Math.floor(Math.random()* 6) +1;
  switch (randomNuber) {
    case 1:
      setDiceImage(DiceOne)
      break;
    case 2:
      setDiceImage(DiceTwo)
      break; 
    case 3:
      setDiceImage(DiceThree)
      break; 
    case 4:
      setDiceImage(DiceFour)
      break; 
    case 5:
      setDiceImage(DiceFive)
      break; 
    case 6:
      setDiceImage(DiceSix)
      break;
    default:
      setDiceImage(DiceOne)
      break;
  }
  ReactNativeHapticFeedback.trigger("impactLight", options);
 }

  return (
    <View style = {styles.container}>
      <Dice imagUrl={diceImage}/>
      <Pressable
      onPress={rollDiceOnTap}>
        <Text style ={styles.rollDiceBtnText}>Roll Me</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})
export default App;