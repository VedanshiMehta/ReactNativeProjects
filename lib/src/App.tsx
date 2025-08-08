import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../core/services/redux/store'
import Router from '../core/routes/Router'
import { createDrawerNavigator } from '@react-navigation/drawer';

const  Drawer = createDrawerNavigator()

const App = () => {
  return (

     // <PokemonList/>
     <Provider store={store}>
     <SafeAreaView style={styles.container}>
      <Router/>
     </SafeAreaView>
     </Provider>
  )
}

export default App

const styles = StyleSheet.create({
     container:{
       flex:1
     }
})