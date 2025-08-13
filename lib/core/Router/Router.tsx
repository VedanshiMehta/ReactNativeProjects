import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RoutesConstants, Stack } from '../constants/RoutesConstants'
import TabContainer from '../../src/Dashboard/presentation/screen/Dashboard'
import AddPosts from '../../src/Home/AddPosts/presentation/screen/AddPosts'



const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={RoutesConstants.Dashboard}>
         <Stack.Screen name={RoutesConstants.Dashboard} component={TabContainer} options={{ headerShown: false }} />
         <Stack.Screen name={RoutesConstants.AddPosts} component={AddPosts} options={{ title:'Add Posts'}} />
        </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Router
