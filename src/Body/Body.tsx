import{Link} from "react-router-dom";
import "./Body.scss";
import React from "react"
function moveScreen(event:any){
    let tar:HTMLElement=event.target;
    console.log(tar);
     tar.scrollIntoView({behavior:"smooth",block:"start",inline:"start"});
}
export function Body(){
    
    return <div className="Body"  onClick={(event)=>moveScreen(event)}>
    <Link to="projects/chess"><Card cont="Projects" classId="projects" desc={"Explore this arena to get know more about my hobby and research projects"}/></Link>
   <Link to="projects"> <Card cont="Books"  classId="Books" desc={"Explore this arena to get know more about my hobby and research projects"}/></Link>
   <Link to="projects"> <Card cont="Music"  classId="Music" desc={"Explore this arena to get know more about my hobby and research projects"}/></Link>
   <Link to="projects"> <Card cont="Articles" classId="articles"  desc={"Explore this arena to get know more about my hobby and research projects"}/></Link>
    </div>
}



function Card(props:any){

    return  <div className={"Card "+`${props.classId}`}>
        <div className="back"></div>
        <div className={"cardImg"}></div>
    <div className="cardContainer">
        
        
            <div className="title">{props.cont}</div>
            <div className="titleDesc">{props.desc}</div>
        
    </div>
    </div>
}