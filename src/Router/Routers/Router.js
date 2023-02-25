import About from "../../About/About";
import Checkout from "../../Componets/Checkout/Checkout";
import LogIn from "../../Componets/LogIn/LogIn";
import NotFound from "../../Componets/NotFound/NotFound";
import SignUP from "../../Componets/SignUP/SignUP";
import Home from "../../Home/Home";
import Layout from "../../Layout/Layout";
import Header from "../../Shared/Header/Header";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
       
        {
          path: '/logIn',
          element: <LogIn></LogIn>
        },
        {
          path: '/signUp',
          element: <SignUP></SignUP>
        },
        
        {
        
          path: '/checkout/:id',
          loader: ()=> {
            return fetch("service.json")
          },
          element: <Checkout></Checkout>,
          
        }
        
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
      
      
    }
  ])

  export default router;