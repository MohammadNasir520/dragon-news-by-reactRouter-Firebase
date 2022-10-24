import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Catagory/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News";
import TermsAndCondition from "../../Pages/terms/TermsAndCondition";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
{
    path:'/',
   element: <Main></Main>,
   children:[
    {
     path: "/",
     element: <Home></Home>,
     loader: ()=> fetch('http://localhost:5000/news')
    },
    {
     path: "/category/:id",
     loader: ({params})=> fetch (`http://localhost:5000/category/${params.id}`),
     element: <Category></Category>
    },
    {
     path: "/news/:id",
     element:<PrivateRoute><News></News></PrivateRoute>,
     loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path: '/terms',
        element: <TermsAndCondition></TermsAndCondition>
    }
   ]
}
    
])