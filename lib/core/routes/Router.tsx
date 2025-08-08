import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Drawer, RoutesConstants, Stack } from '../constants/RoutesConstants'
import UserDetails from '../../src/user/presentation/UserDetails'
import AddUser from '../../src/user/AddUsers/presentation/AddUser'


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={RoutesConstants.UserDetails} component={UserDetails} 
      options={{ 
        title:'Home' ,
        headerTitleAlign: 'center',
      }} />
    </Drawer.Navigator>
  );
};
const Router = () => {
  return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName={RoutesConstants.HomeDrawer}>
         <Stack.Screen name={RoutesConstants.HomeDrawer} component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name={RoutesConstants.AddUser} component={AddUser} options={({
          title: 'Add Post',
          headerBackTitle:'Posts'
        })                 
        } />
        </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Router

