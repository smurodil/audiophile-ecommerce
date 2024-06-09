import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { HomeLayout, Landing, Category, Checkout, Error, SingleProduct } from './pages'
import { ErrorElement } from './components'
import { useState, useEffect } from 'react'
import products from '../data/data.json'


function App() {
  const [categoryData, setCategoryData] = useState({
    headphones: [],
    earphones: [],
    speakers: [],
  })

  useEffect(() => {
    const catagorizedData = {
      headphones: products.products.filter((product) => product.category === 'headphones'),
      earphones: products.products.filter((product) => product.category === 'earphones'),
      speakers: products.products.filter((product) => product.category ==='speakers'),
    };
    setCategoryData(catagorizedData);
  }, [])

  const categories = {
    headphones: {
      title: 'Headphones',
      products: categoryData.headphones,
    },
    earphones: {
      title: 'Earphones',
      products: categoryData.earphones,
    },
    speakers: {
      title: 'Speakers',
      products: categoryData.speakers,
    }
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement/>,
        },
        {
          path: ':category',
          element: <Category categories={categories}/>,
        },
        {
          path: ':category/:slug',
          element: <SingleProduct/>,
        },
        {
          path: '/checkout',
          element: <Checkout/>,
        },
      ],
    },
  ]);



  return  <RouterProvider router={routes}/>
}

export default App