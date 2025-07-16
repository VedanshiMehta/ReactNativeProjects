import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type ButtonShapeProps = {
  shape: string;
  backgroundColor: string;
  onPress: () => void;
};

export default function ButtonShape({ shape, backgroundColor, onPress }: ButtonShapeProps) {
  const isShapeCapsule = shape === 'capsule';
  return (
     <TouchableOpacity
       style={[styles.button, isShapeCapsule?styles.capsule:styles.rectangle,{ backgroundColor: backgroundColor }]}
       onPress={onPress}
    >
       <View style={[styles.button,isShapeCapsule?styles.capsule:styles.rectangle,{ backgroundColor: backgroundColor }]}>
         <Text style={styles.buttonText}>{shape}</Text>
       </View>
     </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow:'hidden'
  },
  rectangle: {
    borderRadius: 0,
  },
  capsule: {
    borderRadius: 50,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})