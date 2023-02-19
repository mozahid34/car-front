import About from "../../About/About";
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
        }
        
      ]
    }
  ])

  export default router;