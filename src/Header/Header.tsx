import "./Header.scss";
import "./TypeWriter.scss";
import "./Nav.scss"


import React, { useEffect } from "react";
import { Link } from "react-router-dom";




export function Header() {
    const typewriter = require("../typewriter.mp3");
    return <div className="Header">
        {/* <video src={typewriter} id="type" loop={true} style={{display:"none"}} autoPlay={true}></video> */}
        <div className="container" >


            <div className="avatar"></div>

            <div className="leftHeader">
                <div className="leftTop"><TypeWriter /></div>
                <div className="leftBottom">

                    <div className="social" >

                        <div className="linkedIn"><div className="lLogo"></div><a>iamakashk</a></div>
                        <div className="github"><div className="gLogo"></div><a>akashkgit</a></div>
                        <div className="mail"><div className="mLogo"></div><a>akashkvit@gmail.com</a></div>
                    </div>
                </div>
            </div>
            <div className="logo">
                <div className="aws"></div>
                <div className="binghamton"></div>
                

            </div>



            {/* <div className="rightHeader">
        <div className="logo">
                <div className="aws"></div>
                <div className="binghamton"></div>
                </div>
        </div> */}

        </div>

    </div>
}



function TypeWriter() {


    useEffect(() => {

        let type = document.querySelector("#type") as HTMLVideoElement;
        // type.volume=0.1;
        // alert(type.volume);
        setTimeout(() => {

           ( document.querySelector(".Header .name > h1") as HTMLElement).innerHTML = "AKASH KUMAR";
            (document.querySelector(".HeaderMob .name > h1") as HTMLElement).innerHTML = "AKASH KUMAR"

            // let type=document.querySelector("#type") as HTMLVideoElement;
            // type.pause();


        }, 5000)
        setTimeout(() => {

            // (document.querySelector(".name > h1") as HTMLElement).innerHTML="AKASH KUMAR"
            console.log(" pausing video");
            // type.pause();



        }, 7500)

    }, []);
    return <div className="TypeWriter">



        <div className="name">
            <h1>DcuriousDev 🧑🏻‍💻</h1>
            <div className="cursor"></div>

        </div>
    </div>
}



export function Nav() {
    return <div className="Nav">
        <Link className="navItems" to="/projects"> Projects </Link>
        <Link className="navItems" to="/"> Content </Link>
        <Link className="navItems" to="/"> Music </Link>
        <Link className="navItems" to="/Home"> Home </Link>
        <Link className="navItems" to="/"> Connect </Link>


    </div>
}






export function HeaderMob() {
    const typewriter = require("../typewriter.mp3");
    return <div className="HeaderMob">
        {/* <video src={typewriter} id="type" loop={true} style={{display:"none"}} autoPlay={true}></video> */}
        <div className="container" >
<TypeWriter />



         



            
        <div className="logo">
                <div className="aws"></div>
                <div className="binghamton"></div>
                </div>
                <div className="linkedIn"><div className="lLogo"></div><a>iamakashk</a></div>
                <div className="github"><a>akashkgit</a><div className="gLogo"></div></div>
                <div className="mail"><div className="mLogo"></div><a>akashkvit@gmail.com</a></div>
                <p className="j Intro">Hi There! If you are Looking for some curious person to co-develop geeky stuff or have a geek talk, you got me ! Yay :-)
                Feel free to reach out to me or scroll down to know more about me</p>
        </div>
        
        

        </div>

    
}