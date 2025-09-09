import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Root from './Components/Root'
import AuthProvider from './Components/Provider/authProvider'
import Register from './Components/Register/Register'
import ErrorPage from './Components/ErrorPage'
import Login from './Components/Login/Login'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import TouristDashboard from './Components/UserDashboard.jsx/TouristDashboard'
import PackageDetails from './Components/PackageDetails/PackageDetails'
import AllTripsPage from './Components/AllTripsPage/AllTripsPage'
import Community from './Components/Community/Community'
import AboutUsPage from './Components/AboutUsPage/AboutUsPage'
import TourGuideDashboard from './Components/UserDashboard.jsx/TourGuideDashboard'
import AdminDashboard from './Components/UserDashboard.jsx/AdminDashboard'
import Layout2 from './Components/Layout2'
import TouristManageProfile from './Components/Tourist/TouristManageProfile'
import JoinAsTourGuide from './Components/Tourist/JoinAsTourGuide'
import MyBooking from './Components/Tourist/MyBooking'
import Payment from './Components/Tourist/Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import AddStories from './Components/Tourist/AddStories'
import ManageStories from './Components/Tourist/ManageStories'
import StoryEdit from './Components/Tourist/StoryEdit'
import GuideProfile from './Components/TourGuide/GuideProfile'
import AddPackage from './Components/Admin/AddPackage'
import ManageUsers from './Components/Admin/ManageUsers'
import ManageCandidate from './Components/Admin/ManageCandidate'
import MyAssignedTours from './Components/Tour Guide/MyAssignedTours'
import StoriesTG from './Components/Tour Guide/StoriesTG'
import AllTourGuide from './Components/AllTourGuide/AllTourGuide'
import Overstate from './Components/Overstate/Overstate'


const stripePromise = loadStripe('pk_test_51S5XAYFbTPg0is0X5kQkPb0RvEVNZuKdfBRlXqehaVfpf25mbJ2Uhs0PwXtw7lrAdCw9JGTKKrFjDAsjJUYAIS8200CnXWPAnl');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/', element: <Home></Home>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'state',
        element: <Overstate></Overstate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: "/packages/:id",
        element: <PackageDetails></PackageDetails>
      },
      {
        path: '/tourguides/:id',
        element: <GuideProfile></GuideProfile>
      },
      {
        path: '/alltirpspages',
        element: <AllTripsPage></AllTripsPage>
      },
      {
        path: "/alltourguides",
        element: <AllTourGuide></AllTourGuide>
      },
      {
        path: '/community',
        element: <Community></Community>
      },
      {
        path: '/aboutus',
        element: <AboutUsPage></AboutUsPage>
      }
    ]
  },
  {
    path: '/',
    element: <Layout2></Layout2>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/tourist",
        element: <ProtectedRoute allowedRoles={['Tourist']}><TouristDashboard></TouristDashboard></ProtectedRoute>
      },
      {
        path: '/dashboard/tourist/manageProfile',
        element: <TouristManageProfile></TouristManageProfile>
      },
      {
        path: '/dashboard/tourist/joinguide',
        element: <JoinAsTourGuide></JoinAsTourGuide>
      },
      {

        path: "/payment/:id",
        element: <Payment></Payment>

      },
      {
        path: '/dashboard/tourist/myBookings',
        element: <MyBooking></MyBooking>
      },
      {
        path: '/addstories',
        element: <AddStories></AddStories>
      },
      {
        path: '/manage-stories',
        element: <ManageStories></ManageStories>
      },
      {
        path: '/edit-story/:id',
        element: <StoryEdit></StoryEdit>
      },
      {
        path: "dashboard/tourguide",
        element: <ProtectedRoute allowedRoles={['Tour Guide']}><TourGuideDashboard></TourGuideDashboard></ProtectedRoute>
      },
      {
        path: "dashboard/tourguide/assignedtour",
        element: <MyAssignedTours></MyAssignedTours>
      },
      {
        path: 'dashboard/tourguide/stories',
        element: <StoriesTG></StoriesTG>
      },
      {
        path: "dashboard/admin",
        element: <ProtectedRoute allowedRoles={['Admin']}><AdminDashboard></AdminDashboard></ProtectedRoute>
      },
      {
        path: 'dashboard/admin/addpackage',
        element: <AddPackage></AddPackage>
      },
      {
        path: 'dashboard/admin/manageusers',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'dashboard/admin/managecandidate',
        element: <ManageCandidate></ManageCandidate>
      }
    ]


  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {/* <Elements stripe={stripePromise}> */}
        <RouterProvider router={router}></RouterProvider>
      {/* </Elements> */}
    </AuthProvider>
  </StrictMode>,
)
