import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DisplayData from './Component/DisplayData.js';

export default function App() {
  let router = createBrowserRouter([{
    path:"/displaydata",
    element : <DisplayData/>
  },{
    path:"/",
    element:<h1>HOme page</h1>
  }])
  return (
   <RouterProvider router ={router}/>
  )
}
