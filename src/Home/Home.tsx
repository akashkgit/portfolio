import React from "react"
import "./Home.scss";
export function Home(){

    return <div className="Home">
        <Skills />
    </div>
}


function Skills(){

    return <div className="Skills">
        
<SkillCollage />
    </div>
}

function SkillCollage(){

    return <div className="collage">
        <div className="c"></div>
        <div className="cpp"></div>
        <div className="java"></div>
    </div>
}