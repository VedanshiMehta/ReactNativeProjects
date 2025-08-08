import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RoutesConstants, Stack } from '../constants/RoutesConstants'
import TabContainer from '../../src/Dashboard/presentation/screen/Dashboard'



const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={RoutesConstants.Dashboard}>
         <Stack.Screen name={RoutesConstants.Dashboard} component={TabContainer} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Router
