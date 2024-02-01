import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Chat from './components/Chat.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:"/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/skills",
      element: <Skills/>,
    },
    {
      path: "/projects",
      element: <Projects/>,
    },
    {
      path: "/chat",
      element: <Chat/>,
    },

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={appRouter}/>
  
)
