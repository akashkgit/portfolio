
import {Link} from "react-router-dom";
import "./projects2.scss";
import React, { useState } from "react"
import { Outlet } from "../../node_modules/react-router-dom/dist/index";

let url=location.hash.split("/");
var init="chess";
if(url[url.length-1] in {'chess':"",'inker':"",'parking':"",'risc':"",'sv6':"",'agrimation':""})
init=url[url.length-1]
console.log(" init is ",init,url,url,[url.length-1],url[url.length-1] in {'chess':"",'inker':"",'parking':"",'risc':"",'sv6':"",'agrimation':""});

export function Projects(){
    function setNavState(event:any){

        let target=event.target;
        setSelectedNav(target.id);
        
    }
    console.log(" setting init state ",init);
    let [selectedNav,setSelectedNav]=useState(init);
    
    return <div className="projectCont"  >
        
            <div className="projectNav" onClick={(event)=>setNavState(event)} >
              
            <Link to="chess" id="chess"  className={"navItem "+(selectedNav==="chess"?"selectedNav":"")}><div  id="chess">Chess.com Clone  </div> </Link>
                <Link className={"navItem "+(selectedNav==="inker"?"selectedNav":"")} id="inker" to="inker" ><div id="inker">Inker</div> </Link>
                <Link className={"navItem "+(selectedNav==="parking"?"selectedNav":"")} id="parking" to="parking" ><div id="parking">Parking Assistance </div> </Link>
                <Link className={"navItem "+(selectedNav==="risc"?"selectedNav":"")}  to="risc" id="risc"><div id="risc">RISC Pipeline</div> </Link>
                <Link className={"navItem "+(selectedNav==="xv6"?"selectedNav":"")}  to="xv6" id="xv6"><div id="xv6">Xv6</div> </Link>
                <Link className={"navItem "+(selectedNav==="agrimation"?"selectedNav":"")} to="agrimation"  id="agrimation"><div id="agrimation" >Agrimation</div> </Link>
            </div>

            <div className="projectContent">
                <div  className="projectItem">
                    {/* <Chess /> */}
                    {/* <Inker /> */}
                    {/* <Parking /> */}
                    {/* <Risc /> */}
                    {/* <Xv6 /> */}
                    {/* <Agrimation /> */}
                    <Outlet/>
                    
                </div>
            </div>

    </div>
}

export function Chess(){
    const chessvideo=require("../chessvideo.mov");
    return <div className="chess">


{/* <div className="chessI">
    
</div> */}


<div className="chessC">
    
    <p className="j"> The Idea of Chess clone stems from my interest in the game of chess. Chess.com has played an incredible role in hauling the talents of chess 
        players. Astounded by the quality of development involve
        d in this game website and app, I decided to create a clone of it to understand the technicality and concepts behind this website. The Architecture predominantly revolves around the usage of Websockets</p>
        <p>
            The website clone primarily relies on <br/>
            <span className="entityBoxer">Typescript</span>
            <span className="entityBoxer">ReactJs</span>
            <span className="entityBoxer">Webpack Bundler</span>
            <span className="entityBoxer">AWS Lambda</span>
            <span className="entityBoxer">AWS APi Gateway</span>
            <span className="entityBoxer">DynamoDB</span>
            <span className="entityBoxer">LoadBalancer</span>
            <span className="entityBoxer">Route53</span>
            <span className="entityBoxer">AutoScaling</span>
            <span className="entityBoxer">JWT Authentication</span>
        </p>
        <div className="source">
            <div className="gt"><div className="glogo"></div><div className="url">https://github.com/akashkgit/chess</div></div>
            <div className="live"><div className="llogo"></div><div className="url">chessclone.dcuriousdev.click</div></div>
        </div>
        

</div>
<div className="chessVDiv">
<video className="chessV" src={chessvideo} controls={true}>
    
</video>
</div>
    </div>
}

export function Inker(){
    const marker=require("../marker.png");
    const inkervideo=require("../inkervideo.mov");
    return <div className="inker">
        
            
            <div className="inkC">
                <p className="j"> 
                    Inker is an innovative yet development project  to simplify the hassle of copying texts read from web articles to the physical notepad so as to not lose the
                    important points. Inker aids web readers by allowing them to highlight the texts in any webpage and provides the choice to either have a session or to maintain the state between sessions.
                    Inker Also allows users to save the highlighted texts in the google document along with url and heading for later reference.

                    Inker primarily leverages,

                </p>
            <span className="entityBoxer">Typescript</span>
            <span className="entityBoxer">ReactJs</span>
            <span className="entityBoxer">Webpack Bundler</span>
            <span className="entityBoxer">Chrome Extension API</span>
            <span className="entityBoxer">Google Docs API</span>
            <span className="entityBoxer">oAuth Based Authorization</span>
            
            <div className="source">
            <div className="gt"><div className="glogo"></div><div className="url">https://github.com/akashkgit/Inker</div></div>
            <div className="live"><div className="llogo"></div><div className="url">https://chrome.google.com/webstore/detail/inker/oeidkidmoceiegeodohodohdkielkddi</div></div>
            
        </div>
            </div>
            <div className="chessVDiv">
<video className="inkV" src={inkervideo} controls={true}  >
    
</video>
</div>
        </div>

    
}

export function Parking(){
    return <div className="Parking">
        <div className="parkI"></div>
        <div className="parkC">
            <p className="j">
                This is group work to mitigate the inconvenience caused by juggling back and forth between 
                parking lots in the Binghamton University to find a free parking spot. This is primarily built using cloud services to quickly bootstrap and 
                get the system to operate. Stand alone private servers are to be incorporated in the future.

                The tech stack utilized to get this to work is as follow,<br/>
                
            <span className="entityBoxer">Typescript</span>
            <span className="entityBoxer">Machine Learning </span>
            <span className="entityBoxer">ReactJs</span>
            <span className="entityBoxer">Webpack Bundler</span>
            <span className="entityBoxer">AWS Lambda</span>
            <span className="entityBoxer">AWS APi Gateway</span>
            <span className="entityBoxer">DynamoDB & Streams</span>
            <span className="entityBoxer">AWS Rekognition</span>
            <span className="entityBoxer">AWS Cognito</span>
            <span className="entityBoxer">AutoScaling</span>
            <span className="entityBoxer">AWS SNS</span>
            <span className="entityBoxer">AWS EC2</span>
           

            </p>
            <p> The application is yet to be dockerized which is the future plan to make things easier for shipping and development</p>
            <div className="source">
            <div className="gt"><div className="glogo"></div><div className="url">https://github.com/akashkgit/ParkingLotAssistant</div></div>
            <div className="live"><div className="llogo"></div><div className="url">Down due to some Issue*</div></div>
            
        </div>
        </div>
    </div>
}

export function Risc(){
    return <div className="Risc">
        <div className="rI"> </div>
        <div className="rC">
            <p className="j"> Designed an RISC (Reduced Instruction Set Architecture) Pipeline with stages such fetch, decode, disptach, execute, memory, write back et cetera. We as a group of two classmates 
                Simulated the pipeline using various techniques such as ROB, Instruction queuing, Register Renaming, Virtual ARF et cetera.
                Analyzed the CPI(Cycles Per iInstruction) and IPC(Instructions Per Cycle )  performances of these methods. The Closest CPI that we could drill down to is 0.5.
                The languages leveraged to simulate the pipeline is C.
                
                
            </p>
            
            
             </div> 
    </div>
}
export function Xv6(){
    return <div className="Xv6">
        <div className="xv6C">
            <p className="j">Constructed some of the interesting features that are essential for an operating System. I Designed a system call to wrap a custom fork function and Implemented a custom scheduler
                that uses Round Robin and MLFQ based scheduling stratergy. This helped me in my daily usage of MAC OS which is simply UNIX. The language used to realize these tasks is the majestic C! </p>
        </div>
    </div>
}

export function Agrimation(){
    return <div className="Agrimation">
        <div className="agrimationI"></div>
        <div className="agrimationC">
        <p className="j"> This is one of my project that was  started out of curiosity behind rover. We Built this rover using National Instrument's labVIEW  and their propreitery Micro controller called myRIO.
    The commmunication happens wirelessly between the rover and the remote controller which is the laptop here. They communication via a shared network network variable.</p>
        </div>
    </div>
}