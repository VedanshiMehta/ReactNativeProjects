import React from 'react'
import { RoutesConstants, Stack } from '../constants/RoutesConstants'
import Home from '../../src/home/presentation/screens/Home'

const AppStack = () => {
  return (
     <Stack.Navigator initialRouteName={RoutesConstants.Login}>
           <Stack.Screen name={RoutesConstants.Home} component={Home} options={{
             title: "Home",
             headerTitleAlign:'center'
           }}/>
        </Stack.Navigator>
  )
}

export default AppStack