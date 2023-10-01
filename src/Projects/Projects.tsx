import React from "react";
import "./Projects.scss";
export function Projects(){
    
    return <div className="ProjectsContainer">
        

        
        <Items />
        <Menu />
        

    </div>
}


function Items(){
    return <div className="Items">
        <Chess />
        <Inker />
        <Parking />
        <RISC />
        {/* <Rover /> */}

    </div>
}
function RISC(){
    return <div className="Chess pBox oShaw" >
        <div className="Img RI">

        </div>
        <div className="content chessC">
        <h2>RISC</h2>
        <p>The notion of Chess.com Clone stemmed from my fascination towards Chess and how chess.com has developed a platform efficiently.
          This project mainly relies on TypeScript, React, Webpack Bundlers, and AWS Services.  
        </p>
        <p>Some of the vital services leveraged are Lambda, API gateway, DynamoDB, Load Balancer, CloudFront Caching.

        </p>
        <p> This predominantly uses Websockets for communication between two players and JWT based authetnication mechanism is being employed
            to maintain the session, protect routes and requests.
        </p>
        <div className="source">
        <span className="gitLogo"></span>
            <span className="gitLink">https://github.com/akashkgit/chess</span>

        </div>

        
        <div className="source">
        <span className="webLogo"></span>
            <span className="weLink">http://chessclone.dcuriousdev.click.s3-website-us-east-1.amazonaws.com/</span>

        </div>

        </div>
        </div>
        
        
   

}

function Chess(){
    return <div className="Chess pBox oShaw" >
        <div className="Img chessI">

        </div>
        <div className="content chessC">
        <h2>Chess.com Clone</h2>
        <p>The notion of Chess.com Clone stemmed from my fascination towards Chess and how chess.com has developed a platform efficiently.
          This project mainly relies on TypeScript, React, Webpack Bundlers, and AWS Services.  
        </p>
        <p>Some of the vital services leveraged are Lambda, API gateway, DynamoDB, Load Balancer, CloudFront Caching.

        </p>
        <p> This predominantly uses Websockets for communication between two players and JWT based authetnication mechanism is being employed
            to maintain the session, protect routes and requests.
        </p>
        <div className="source">
        <span className="gitLogo"></span>
            <span className="gitLink">https://github.com/akashkgit/chess</span>

        </div>

        
        <div className="source">
        <span className="webLogo"></span>
            <span className="weLink">http://chessclone.dcuriousdev.click.s3-website-us-east-1.amazonaws.com/</span>

        </div>

        </div>
        </div>
        
        
   

}

function Inker(){
    return <div className="Inker pBox oShaw" >
        <div className="Img InkerI">

        </div>
        <div className="content chessC">
        <h2>Inker</h2>
        <p>The notion of Chess.com Clone stemmed from my fascination towards Chess and how chess.com has developed a platform efficiently.
          This project mainly relies on TypeScript, React, Webpack Bundlers, and AWS Services.  
        </p>
        <p>Some of the vital services leveraged are Lambda, API gateway, DynamoDB, Load Balancer, CloudFront Caching.

        </p>
        <p> This predominantly uses Websockets for communication between two players and JWT based authetnication mechanism is being employed
            to maintain the session, protect routes and requests.
        </p>
        <div className="source">
        <span className="gitLogo"></span>
            <span className="gitLink">https://github.com/akashkgit/chess</span>

        </div>

        
        <div className="source">
        <span className="webLogo"></span>
            <span className="weLink">http://chessclone.dcuriousdev.click.s3-website-us-east-1.amazonaws.com/</span>

        </div>

        </div>
        </div>
        
        
   

}
function Parking(){
    return <div className="Park pBox oShaw" >
        <div className="Img ParkI">

        </div>
        <div className="content chessC">
        <h2>Binghamton University Parking Services</h2>
        <p>The notion of Chess.com Clone stemmed from my fascination towards Chess and how chess.com has developed a platform efficiently.
          This project mainly relies on TypeScript, React, Webpack Bundlers, and AWS Services.  
        </p>
        <p>Some of the vital services leveraged are Lambda, API gateway, DynamoDB, Load Balancer, CloudFront Caching.

        </p>
        <p> This predominantly uses Websockets for communication between two players and JWT based authetnication mechanism is being employed
            to maintain the session, protect routes and requests.
        </p>
        <div className="source">
        <span className="gitLogo"></span>
            <span className="gitLink">https://github.com/akashkgit/chess</span>

        </div>

        
        <div className="source">
        <span className="webLogo"></span>
            <span className="weLink">http://chessclone.dcuriousdev.click.s3-website-us-east-1.amazonaws.com/</span>

        </div>

        </div>
        </div>
        
        
   

}
function Menu(){
    return <div className="Menu">

    </div>
}