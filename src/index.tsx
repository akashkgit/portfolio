import {Books, Essentialism, ZeroToOne} from "./Books/Books";
import React from 'react';
import {App} from "./App";
import {createRoot} from 'react-dom/client';
import { RouterProvider, createHashRouter } from '../node_modules/react-router-dom/dist/index';
import { Nav } from './Header/Header';
import {Projects,Chess, Inker, Parking, Risc, Xv6, Agrimation} from "./projects2/projects2";
import {Home} from "./Home/Home"
import {General } from "./general/general";
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

                path:"/",
                element:<Projects />,
                children:[
                    {
                        index:true,

                        element:<Chess />,
                    },
                    {path:"chess",
                    element:<Chess />,


                    },
                    {
                        path:"inker",
                        element:<Inker />,
                    },
                    {
                        path:"parking",
                        element:<Parking />,
                    },
                    {
                        path:"risc",
                        element:<Risc />,
                    },
                    {
                        path:"xv6",
                        element:<Xv6 />
                    },
                    {
                        path:"agrimation",
                        element:<Agrimation />,
                    },
                ]
        },

        {
                path:"projects",
                
                element:<Projects />,
                children:[
                    {
                        path:"chess",

                        element:<Chess />,
                    },
                    {
                        path:"inker",
                        element:<Inker />,
                    },
                    {
                        path:"parking",
                        element:<Parking />,
                    },
                    {
                        path:"risc",
                        element:<Risc />,
                    },
                    {
                        path:"xv6",
                        element:<Xv6 />
                    },
                    {
                        path:"agrimation",
                        element:<Agrimation />,
                    },
                ]

        },
        {
            path:"books",
            // index:true,
            element:<Books />,
            children:[
                {
                    path:"zeroToOne",
                    element:<ZeroToOne />,   
                },
                {
                    path:"essentialism",
                    element:<Essentialism />,   
                }
            ]

    },
    {
        path:"/knowme",
        element: <General />
        


    }
    ,{
        path:"/",
        element: <General />

    }
    ]


}])


let root=document.querySelector("#root");
createRoot(root).render( <RouterProvider  router={router} ></RouterProvider>);

