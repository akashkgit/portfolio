import { Outlet } from "../node_modules/react-router-dom/dist/index"
import {Header} from "./Header/Header"
import React from "react"
export function App(){
    return <div className="app">
        <Header />
        <Outlet />
    </div>
}