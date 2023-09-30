import "./Header.scss";
import "./TypeWriter.scss";
import "./Nav.scss"


import React, { useEffect } from "react";
import { Link } from "react-router-dom";



export function FirstPage(){
    return <div className="Header">
        <div className="container">
            <div className="avatar"></div>
            
            
            <TypeWriter />
            <div className="logo">
                <div className="aws"></div>
                <div className="binghamton"></div>

            </div>
            
            
        </div>
        
        
        
       
    </div>
}



function TypeWriter(){


    useEffect(()=>{
       
setTimeout(()=>{
    
    (document.querySelector(".name > h1") as HTMLElement).innerHTML="AKASH KUMAR"

},5000)

},[]);
return <div className="TypeWriter">



    <div className="name">
        <h1>DcuriousDev 🧑🏻‍💻</h1>
        <span className="cursor"></span>
     
    </div>
</div>
}



export function Nav(){
    return <div className="Nav">
        <div className="navItems"><Link to="/projects"> Projects </Link></div>
        <div className="navItems"><Link to="/projects"> Articles </Link></div>
        <div className="navItems"><Link to="/projects"> Music </Link></div>
        <div className="navItems"><Link to="/projects"> Skills </Link></div>
        <div className="navItems"><Link to="/projects"> Experience </Link></div>
        <div className="navItems"><Link to="/projects"> Timeline </Link></div>
        <div className="navItems"><Link to="/projects"> Projects </Link></div>

    </div>
}