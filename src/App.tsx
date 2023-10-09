import { Outlet } from "../node_modules/react-router-dom/dist/index"
import {Header} from "./Header/Header"
import {Footer} from "./Footer/Footer"
import {Body} from "./Body/Body"
import React from "react"
import {Projects} from "./projects2/projects2";
export function App(){
    return <div className="app" >
        <Header />
        {/* <HeaderMob /> */}
        <Body />
        <div className="Body2">
        </div>
        <Outlet />
        {/* <Footer /> */}
        

        
        
    </div>
}


