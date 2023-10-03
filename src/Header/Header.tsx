import "./Header.scss";
import "./TypeWriter.scss";
import "./Nav.scss"


import React, { useEffect } from "react";
import { Link } from "react-router-dom";



export function Header(){

    return <div className="Header">
        
        <div className="container">
            <TypeWriter />
            <div className="avatar"></div>

            <div className="leftHeader">

            <div className="leftBottom">
            
            <div className="social" >

                    <div className="linkedIn"><div className="lLogo"></div><a>iamakashk</a></div>
                    <div className="github"><div className="gLogo"></div><a>akashkgit</a></div>
                    <div className="mail"><div className="mLogo"></div><a>akashkvit@gmail.com</a></div>
                </div>
                </div>

            
            {/* <div className="logo">
                <div className="aws"></div>
                <div className="binghamton"></div>
                

            </div> */}
            
            
            
        </div>
        
        
        
        <div className="rightHeader">
        <div className="logo">
                <div className="aws"></div>
                <div className="binghamton"></div>
                </div>
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
        <Link className="navItems" to="/"> Content </Link>
        <Link className="navItems" to="/"> Music </Link>
        <Link className="navItems" to="/Home"> Home </Link>
        <Link className="navItems" to="/"> Connect </Link>
    

    </div>
}