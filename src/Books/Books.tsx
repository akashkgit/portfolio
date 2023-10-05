import "./Books.scss"
import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Outlet } from "../../node_modules/react-router-dom/dist/index";

let url=location.hash.split("/");
var init="zeroToOne";
if(url[url.length-1] in {'zerToOne':"","esssentialism":""})
init=url[url.length-1]
console.log(" init is ",init,url,url,[url.length-1],url[url.length-1] in {'zerToOne':"","esssentialism":""});

export function Books(){

    function setNavState(event:any){

        let target=event.target;
        setSelectedNav(target.id);
        
    }
    console.log(" setting init state ",init);
    let [selectedNav,setSelectedNav]=useState(init);


    return <div className="booksCont">
<div className="booksNav" onClick={(event)=>setNavState(event)}>

<Link className={"booksNav "+(selectedNav==="zeroToOne"?"selectedNavBooks":"")} id="zeroToOne" to="zeroToOne" ><div id="zeroToOne">zeroToOne</div> </Link>
<div >|</div>
<Link className={"booksNav "+(selectedNav==="essentialism"?"selectedNavBooks":"")} id="essentialism" to="essentialism" ><div id="essentialism">Essentialism</div> </Link>

</div>
<div className="booksContent">
    <Outlet />
</div>
    </div>
}


export function ZeroToOne(){
    return <div className="ZeroToOne">
        
        <div className="ztoC">
            <p className="j">A startup/company with a unique product is meant to have gone from 0 to 1. But, any company replicating the existing product/styles is said to go from 1 to n. These 1 to n stages are termed as Globalisation. The 0 to 1 stage is called as Technology/advancement. For example, Amazon was found in 1994. Flipkart was found in 2007. Here, Flipkart has just made a globalisation of online store which was already started in the states. Similarly, Zomato was founded in 2008 and led to a food delivery mania which is still going on and have led lot of company to like uber(uber eats),food panda et cetera.</p>
            <p className="j">When a company goes from 0 to 1, there comes a monoploy. When a company goes from 1 to n, there comes competition. While competition is considered healthy, in here it can start jeopardizing the company's good.Monopoly drives a nation;s economy. But, competition is a struggle of survival. It has got no unique features that can sell their product and thus relies on extreme marketing and sales.Monopoly drives nation. A monopoly company potrays itself as in competition to avoid gaining audit and assessment. Whereas, a Non-Monopoly company claims itself as a monopoly to make a selling point.</p>
            <p className="j">Economic bubble is the bubble pattern in economy of a nation. The economy goes way high and breaks abruptly. Similarly, when internet got famous, most of the company who went on internet got huge funds from ivestors in 1990. But, aftersome time, all those companies who got online faded away.</p>
            <p className="j">one can be optimistic/pessimistic. But both of these are further classfied to definite/indefinite. A definite pessimistic person, knows why he is pessimistic and the bad things thats gonn a happen in future. A indefinite pessimistic person has no clue as to why he is being pessimistic. An Indefinite Optimistic person believes that future will be good without doing anything. A definite optimistic person does things that will make him better in future and believes in it</p>
        </div>

    </div>
}

export function Essentialism(){
    return <div className="essentialism">
        
        <div className="eC">
            <p className="j">Yes!Dont say 'yes' by default.Dont say "yes" so that the requestor
             does not resent you. So, Learn to say no, If you dont prioritise, Someone's priority will become yours
                 When making a Decision, Dont decide on the recent option that you heard about.</p>
                 
                 <p className="j"> Take some time. explore all the options. Evaluate the tradeoff that each option has. By choosing one option, You must be ready to confront the trade offs caused by leaving the remaining. Tradeoff is inevitable in any decision. Your decision should resonate with your Essential intent/ Vision. If yes, then your single decision should simplify thousand upcoming Conundrum. Dont get intimidated by the mertis of left opitions. Have a buffer as the future is uncertain. Not everyone needs to accept your decision until you know what you are doing. Be ready to face criticisms and mockery. Get uncomfortable !
                 Dont do other's work. You can aid them.But, never take it completely on your head. By doing so, you are decreasing their chances of improvement. So, never count the teeth in other's mouth. When one asks for help, check if you are the apt person to do the deed. Else, refer a qualified person to handle that.
                Start small and progress. celebrate small achievements that will lead you to your vision.By Starting big, its highly probable for one to get overwhelmed.</p>

                <p className="j">
                Dont fall for sun bias cost. For example, when your made a grave mistake and started realising it, be ready to accept your mistake and back off. Instead dont proceed with the mistake since you did!
                Dont dont many things parallely. That doesnot make significant impact in those activities. Instead of doing 1mm in 10 task, put all the 1mm in one task and make 10mm work that makes significance. So, do less but btetter. So, there is a difference between multi tasking and multi focussing. You can only focus a single activity at a time. But, can do two or more that does not require your focus.</p>

 
        </div>
        
    </div>
}