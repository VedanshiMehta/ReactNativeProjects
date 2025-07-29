
import React from 'react'
import Login from '../../src/login/presentation/screens/Login'
import Register from '../../src/register/presentation/screens/Register'
import { AuthStackNavigator, RoutesConstants, } from '../constants/RoutesConstants'

function AuthStack() {
  return (
    <AuthStackNavigator.Navigator initialRouteName={RoutesConstants.Login}>
      <AuthStackNavigator.Screen name={RoutesConstants.Login} component={Login} options={{
        title: "Login",
        headerTitleAlign: 'center'
      }} />
      <AuthStackNavigator.Screen name={RoutesConstants.Register} component={Register} options={{
        title: "Sign Up",
        headerTitleAlign: 'center'
      }} />
    </AuthStackNavigator.Navigator>
  )
}

export default AuthStack