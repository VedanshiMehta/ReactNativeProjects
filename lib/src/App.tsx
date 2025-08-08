import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Router from '../core/Router/Router'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Router/>
     </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
       flex:1
     }
})