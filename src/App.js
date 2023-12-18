import './App.css';
import { ConfigProvider, } from 'antd';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Layout from './Components/layout/Layout';
import Portofolios from './pages/portofolis/portofolis';
import Contact from './pages/contact/contact';

function App() {
  const router = createBrowserRouter([{
    path :"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Portofolios",
        element:<Portofolios/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      }
    ]
    
  }])
  return (
    <ConfigProvider>
        <RouterProvider router={router}/>
    </ConfigProvider>
  );
}

export default App;
