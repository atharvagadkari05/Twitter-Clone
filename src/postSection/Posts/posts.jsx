import "../../styles/main.css";
import dp from "../../Assets/profilepic.PNG";

function Posts(PostData) {
  
  return (
    <div className="Posts">
      <img className="headerDp" src={dp} />
      <div className="postBox">
        <a id="name"><text>{PostData.Name}</text>{"    "}{PostData.Username}{"    "} {PostData.Time}</a><br/>
        <a id="tweet">{PostData.Tweet}</a><br/>
       <div className="post-icons"> <i class="far fa-comment"></i><i class="fas fa-retweet"></i><i  class="far fa-heart"></i>
       </div>
      </div>
    </div>
  );
}

export default Posts;
