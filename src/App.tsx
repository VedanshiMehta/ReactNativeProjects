import React, { JSX } from 'react'
import Home from './home/presentation/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import ProductDetails from './product_details/presentation/screens/ProuductDetails'
import { myStack, Routes } from '../routes/Routes'
import { StyleSheet } from 'react-native'



function App() : JSX.Element{
  return (
    <NavigationContainer>
      <myStack.Navigator initialRouteName={Routes.Home}>
        <myStack.Screen name={Routes.Home} component={Home} options={{
          title: "Trending Products"
        }} />
        <myStack.Screen name={Routes.Details} component={ProductDetails} options={({route})=>({
          title: route.params.product.name,
          headerLargeTitle:true,
          headerLargeTitleStyle:styles.headerLargeTitleStyle
        })
                  
        } />
      </myStack.Navigator>
    </NavigationContainer>
    
  )
}

export default App
const styles = StyleSheet.create({
  headerLargeTitleStyle:{
    fontFamily: 'Georgia',
      fontSize: 22,
      fontWeight: '500',
      color: 'blue',
  }
})

