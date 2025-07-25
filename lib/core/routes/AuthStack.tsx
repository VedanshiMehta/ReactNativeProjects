
import React from 'react'
import { RoutesConstants, Stack } from '../constants/RoutesConstants'
import Login from '../../src/login/presentation/screens/Login'
import Register from '../../src/register/presentation/screens/Register'

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={RoutesConstants.Login}>
      <Stack.Screen name={RoutesConstants.Login} component={Login} options={{
        title: "Login",
        headerTitleAlign: 'center'
      }} />
      <Stack.Screen name={RoutesConstants.Register} component={Register} options={{
        title: "Sign Up",
        headerTitleAlign: 'center'
      }} />
    </Stack.Navigator>
  )
}

export default AuthStack