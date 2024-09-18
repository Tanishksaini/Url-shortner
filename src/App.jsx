import UrlProvider from"./context"
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import AppLayout from './layout/App-layout'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Links from './pages/Links'
import Redirect from './pages/Redirect'
import RequireAuth from "./components/requireAuth"
import Auth from "./pages/Auth"



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
        element:<RequireAuth><Dashboard/></RequireAuth>
      },
      {
        path:"/auth",
        element:<Auth/>      
      },
      {
        path:"/link/:id",
        element:<RequireAuth><Links/></RequireAuth>
      },
      {
        path:":id",
        element:<RequireAuth><Redirect/></RequireAuth>
      }
    ]
  }
])
function App() {

  return (
    <UrlProvider>
    <RouterProvider router={router} />
  </UrlProvider>
  )
}

export default App
