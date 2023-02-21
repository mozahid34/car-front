import About from "../../About/About";
import LogIn from "../../Componets/LogIn/LogIn";
import SignUP from "../../Componets/SignUP/SignUP";
import Home from "../../Home/Home";
import Layout from "../../Layout/Layout";


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
        
      ]
    }
  ])

  export default router;