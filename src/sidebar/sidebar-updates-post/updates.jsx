import '../../styles/main.css'



function Updates(UpdatesData){
    
 
    
    return(
        <div className="updates">
      <p> {UpdatesData.Genre} | {UpdatesData.currentStatus}</p>
      <h3>{UpdatesData.news}</h3>
      <p>{UpdatesData.currentTweets}</p>

        </div>
    )
}

export default Updates;