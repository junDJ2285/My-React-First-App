import './App.css';
import { ConfigProvider, } from 'antd';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Layout from './Components/layout/Layout';
import Contact from './pages/contact/contact';
import Skills from './pages/portofolis/skills';

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Skills",
        element: <Skills />
      },
      {
        path: "/Contact",
        element: <Contact />
      }
    ]

  }])
  return (
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
