import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';

import { AppwriteContext } from '../services/app_write_service/AppwriteContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';



export const Router = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {appwrite, isLoggedIn,setIsLoggedIn} = useContext(AppwriteContext)

    useEffect(() => {
      appwrite
      .getCurrentUser()
      .then(response => {
        setIsLoading(false)
        if (response) {
            setIsLoggedIn(true)
            console.log({isLoggedIn})
        }
      })
      .catch(_ => {
        setIsLoading(false)
        setIsLoggedIn(false)
      })
    },[appwrite,setIsLoggedIn])
    
    if (isLoading) {
        return <Loading />
    }

  return (
    <NavigationContainer>
        {isLoggedIn ? <AppStack /> : <AuthStack/> }
    </NavigationContainer>
  )
}

