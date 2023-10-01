import React from 'react';
import {App} from "./App";
import {createRoot} from 'react-dom/client';
import { RouterProvider, createHashRouter } from '../node_modules/react-router-dom/dist/index';
import { Nav } from './Header/Header';
import {Projects} from "./Projects/Projects";
import {Home} from "./Home/Home"
function Index(){
    return <>
    
    <div className='index'>
       


        

    </div>
    
    </>
}
let router=createHashRouter([{

    path:"/",
    
    element:<App />,
    children:[
        {
                path:"projects",
                // index:true,
                element:<Projects />

        },
        {
            path:"Home",
            // index:true,
            element:<Home />

    }
    ]


}])


let root=document.querySelector("#root");
createRoot(root).render( <RouterProvider  router={router} ></RouterProvider>);

