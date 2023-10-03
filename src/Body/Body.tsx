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
   <Link to="books/zeroToOne"> <Card cont="Books"  classId="Books" desc={"Traverse the summaries of the Books  that I have read by click on this Item  "}/></Link>
   <Link to="music"> <Card cont="Music"  classId="Music" desc={"Here I present you with some of my free style piano covers. Hear it  once and let me know in the comment section :-)"}/></Link>
   <Link to="memore"> <Card cont="Articles" classId="articles"  desc={"I unveil some of the good thoughts and concepts that I think are worth noting"}/></Link>
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