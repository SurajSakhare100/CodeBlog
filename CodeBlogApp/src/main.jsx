import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Router, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.jsx'
import BlogPage from './pages/BlogPage/BlogPage.jsx'
import Editor from './pages/editor/Editor.jsx'
import AboutPage from './pages/about/About.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: '/blog/react',
        element: <BlogPage />,
      },
      {
        path: '/blog',
        element: <Editor />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
