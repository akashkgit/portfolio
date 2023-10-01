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
        {/* <Inker /> */}
        {/* <Parking />
        <RISC />
        <Rover /> */}

    </div>
}
function Chess(){
    return <div className="Chess pBox oShaw" dir="ltr">
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
    return <div className="Inker pBox eShaw" dir="ltr">
       <div className="Img InkerI">

</div>
        <div className="content InkerC">
        <h2>Inker</h2>
        <p>The notion of Inker orignates from the mere hassle of copying important lines from web articles to notepad and its consequence of misplacing or losing the  notepad.
        succintly, Inker lets you underline texts across any webpage and then store them for a session or permanently until deleted within browser and also save it to google docs
        for future references.</p>
        <p>
            This primarily uses ReactJS, typescript, Webpack bundler,Chrome Extension Apis, oAuth, and Google Apis.
            </p>
        </div>
        
    </div>
}
function Parking(){
    return <div className="Parking pBox oShaw">
       <div className="Img ParkI">

</div>
        <div className="content ParkC">
        <h2>Binghamton University Parking Assistant</h2>
        <p>This is attempt to solve the hassle of searching for a parking spot in multistoreyed buildings and premises that has many parking spots. This will help users to check the available free spaces in the parking lots and also will help the user to get notified via email when there is a vacant spot.

</p>
        <p>
            This primarily uses ReactJS, typescript, Webpack bundler, AWS Cognito, AWS SNS, AWS EC2, AWS ECS, Load Balancing, AWS Rekognition et cetera
            </p>
        </div>
        
    </div>
}
function RISC (){
    return <div className="RISC pBox oShaw">
       <div className="Img RISCI">

</div>
        <div className="content RISCC">
        <h2>RISC Pipeline Simulation</h2>
        <p> Simulated an RISC(Reduced Instruction Set Computer) pipeline stages such as Fetch, Dispatch, Execute, Memory, writeBack using various techniques such as 
            ROB, Instruction Queueing, Register Renanming, Virtual ARF et cetera.</p>
        <p> Compared the CPI and IPC of these techqniques</p>
        <p> This is a part of Computer Architecture and Organization Course</p>



        <p>
        Technology used : C
            </p>
        </div>
        
    </div>
}
function Rover(){
    return <div className="Rover pBox oShaw">
       <div className="Img RoverI">
       
</div>
        <div className="content RoverC">
        <h2>Agrimation</h2>
        <p> Agrimation is the rover based farming prototype.
            The software used in National Instrument's labVIEW and 
            the hardwares used are NI myRIO,motors,driver module,wires 
            et cetera. The rover's left and right movements are controlled 
            by rotating left pair of wheels in one direction and the right 
            pair in the opposite direction. To make a right turn, the right 
            pair of wheels had to be reversed. The reversing speed determines 
            the curvature of the right turn.The rover is controlled wireless
             from the laptop. The rover uses some shared variables to communicate
              to a laptop.</p>



        <p>
        Technology used : labVIEW
            </p>
        </div>
        
    </div>
}
function Menu(){
    return <div className="Menu">

    </div>
}