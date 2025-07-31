import React, { JSX } from 'react'
import { Router } from '../core/routes/Router'
import { AppwriteProvider } from '../core/services/app_write_service/AppwriteContext'


function App():JSX.Element {
  return (
    <AppwriteProvider>
   <Router/>
   </AppwriteProvider>
   
  )
}

export default App