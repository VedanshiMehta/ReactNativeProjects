import { StyleSheet } from 'react-native'
import React from 'react'
import Router from '../core/Router/Router'
import { Provider } from 'react-redux'
import store from '../core/services/redux/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <Router />
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
       flex:1
     }
})