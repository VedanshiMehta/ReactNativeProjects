
import React, { FC, PropsWithChildren, createContext, useMemo, useState } from 'react';
import Appwrite from './auth_services';
type AppContextType = {
    appwrite: Appwrite;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppwriteContext = createContext<AppContextType>({
    appwrite: new Appwrite(),
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

export const AppwriteProvider: FC<PropsWithChildren> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
     const appwriteInstance = useMemo(() => new Appwrite(), []);
     console.log(isLoggedIn)
 const contextValue = useMemo(() => {
        return {
            appwrite: appwriteInstance, // Use the memoized instance
            isLoggedIn,
            setIsLoggedIn,
        };
        
    }, [appwriteInstance, isLoggedIn, setIsLoggedIn]); // Dependencies for re-calculation

  return (
    <AppwriteContext.Provider value={contextValue}>
      {children}
    </AppwriteContext.Provider>
  )
}

export default AppwriteContext