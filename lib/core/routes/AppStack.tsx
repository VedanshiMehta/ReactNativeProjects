import React from 'react'
import Home from '../../src/home/presentation/screens/Home'
import { AppStackNavigator, RoutesConstants } from '../constants/RoutesConstants'

const AppStack = () => {
  return (
     <AppStackNavigator.Navigator initialRouteName={RoutesConstants.Home}>
           <AppStackNavigator.Screen name={RoutesConstants.Home} component={Home} options={{
             title: "Home",
             headerTitleAlign:'center'
           }}/>
        </AppStackNavigator.Navigator>
  )
}

export default AppStack