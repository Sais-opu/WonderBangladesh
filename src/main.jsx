import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root'
import Error from './Components/Error'
import Home from './Components/Home/Home'
import Community from './Components/Community/Community'
import About from './Components/About/About'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import AllTripsPage from './Components/AllTripsPage/AllTripsPage'
import AuthProvider from './Components/Provider/authProvider'
import AllTourGuide from './Components/AllTourGuide/AllTourGuide'



const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root />, 
    errorElement: <Error />,
    children: [ 
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/community',
        element: <Community />
      },
      {
        path: '/aboutus',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/alltripspages', 
        element: <AllTripsPage />
      },
      {
        path: "/alltourguides",
        element: <AllTourGuide></AllTourGuide>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
