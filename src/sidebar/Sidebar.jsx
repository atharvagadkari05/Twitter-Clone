import React from 'react';
import '../styles/main.css'
import Updates from './sidebar-updates-post/updates';
import { useState } from "react";
import UpdatesData from '../Data/UpdatesData';

function Sidebar(){
    


    const [updatesData] = useState(UpdatesData.UpdatesData);
    
    
    return(
<div className="sidebar container">


<input  id="input" type="text" placeholder="search twitter" onClick={() => {
       const click = document.getElementById("input")
       click.style.background = 'white';
       click.style.border= 'solid 1px #1DA1F2';
       click.style.transition = 'ease-in-out 0.2s'
}} ></input>


<h2>What's happening</h2>


<div className="updatesContainer">

{

    updatesData.map((data) => (
        <Updates 
        Genre ={data.genre}
        currentStatus={data.current_status}
        news={data.news}
        currentTweets = {data.current_tweets}

        />
    ))
}

</div>



</div>
    )
}


export default Sidebar;