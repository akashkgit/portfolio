import "./Header.scss";
import "./TypeWriter.scss";
import "./Nav.scss"


import React, { useEffect } from "react";
import { Link } from "react-router-dom";



export function Header(){

    return <div className="Header">
        <TypeWriter />
        <div className="container">

            <div className="avatar"></div>
            <div></div>
            <Nav />
            
            <div className="social" style={{visibility:"hidden"}}>

                    <div className="linkedIn"></div>
                    <div className="mail"></div>
                    <div className="gitHub"></div>
                </div>

            
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
        <Link className="navItems" to="/projects"> Projects </Link>
        <Link className="navItems" to="/Content"> Content </Link>
        <Link className="navItems" to="/Music"> Music </Link>
        <Link className="navItems" to="/Home"> Home </Link>
        <Link className="navItems" to="/connect"> Connect </Link>
    

    </div>
}