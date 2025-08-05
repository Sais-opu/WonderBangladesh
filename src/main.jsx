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
import Layout2 from './Components/Layout2'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import AddStories from './Components/Tourist/AddStories'
import TouristDashboard from './Components/UserDashboard.jsx/TouristDashboard'




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
  },
  {
    path: '/',
    element: <Layout2></Layout2>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard/tourist",
        element: <ProtectedRoute allowedRoles={['Tourist']}><TouristDashboard></TouristDashboard></ProtectedRoute>
      },
      {
        path: '/addstories',
        element: (
          <ProtectedRoute allowedRoles={['Tourist']}>
            <AddStories />
          </ProtectedRoute>
        )
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
