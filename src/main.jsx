import React from 'react'
import ReactDOM from 'react-dom/client'
import Shop from './components/Shop/Shop'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Layout/Root'
import Home from './components/Home/Home'
import Page404 from './components/Page404/Page404'
import Review from './components/Review/Review'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login'
import allProductsLoader from './loaders/allProductsLoader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
        loader: allProductsLoader
      },
      {
        path: '/review',
        element: <Review></Review>,
        loader: allProductsLoader
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
