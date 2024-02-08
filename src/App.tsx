import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import {Errorpage,Home} from './_root/pages'
import {Signin,Signup} from './_auth/forms'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'



import './globals.css'




const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<Errorpage/>,
        children:[
            {
                element:<RootLayout/>,
                children:[
                    {index:true , element:<Home/>},

                ]
            },



            {
                element:<AuthLayout/>,
                children:[
                { path:'sign-in', element: <Signin/>},
                {  path:'sign-up',element: <Signup/>},

            ]}

        ],


    },
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
