import { Children, useState } from 'react'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/App-layout'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Auth from './pages/auth'
import Links from './pages/links'
import Redirect from './pages/Redirect'



const router= createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/auth",
        element:<Auth/>      
      },
      {
        path:"/link/:id",
        element:<Links/>
      },
      {
        path:":id",
        element:<Redirect/>
      }
    ]
  }
])
function App() {

  return (
   <RouterProvider router={router}/>
  
  )
}

export default App
