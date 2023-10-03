import React from "react"
import "./Home.scss";
const coding=require("../coding.png");
export function Home(){

    return <div className="Home">
        
        <Skills />

        {/* <WhoAmI /> */}
    </div>
}


function Skills(){

    return <div className="Skills">
        
    <img  src={coding} className="skillsLogo" />
    <p> Hi There!<span className="bold">My Skills</span> include various languages and concepts from computer science that I have learnt across my masters and 
    <br /> Work Experience The major Front End lanuages that I delved into are 
     Typescript, Javascript, CSS, HTML, Scss</p>
     <p>Some of the Backend Languages that I am proficient include
      Java, C,C++. I am acquianted with other software domains as well such as
        Database which includes MongoDb and MySQl, Docker, Kubernetes, and Shell Scripting
            
     </p>
    
    </div>
}
function WhoAmI(){

    return <div className="WhoAmI">
        

    </div>
}
