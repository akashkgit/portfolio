import React from 'react';
import {FirstPage} from "./Header/Header";
import {createRoot} from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from '../node_modules/react-router-dom/dist/index';
import { Nav } from './Header/Header';
function Index(){
    return <>
    
    <div className='index'>
       


        

    </div>
    
    </>
}
let router=createBrowserRouter([{

    path:"/",
    element:<FirstPage />,
    children:[
        {

        }
    ]


}])


let root=document.querySelector("#root");
createRoot(root).render( <div><RouterProvider router={router} ></RouterProvider></div>);

