import "../styles/main.css";
import dp from "../Assets/profilepic.PNG";
import Posts from "./Posts/posts";
import { useState } from "react";
import PostData from "../Data/PostData"





function PostSection() {

const [postData] = useState(PostData.PostData);

console.log(postData)
  return (
    <div className="postSection">
      <h2>Home</h2>
{/* Profile container */}
      <div className="post-pro-container">
        <img className="headerDp" src={dp} />
        <div className="ppc-content">
          <input type="textarea" placeholder="What's happening" />
          <ul>
            <li>
              <i class="fas fa-image"></i>
            </li>

            <li>
              <i class="far fa-chart-bar"></i>
            </li>

            <li>
              <i class="far fa-smile"></i>
            </li>

            <li>
              <i class="far fa-calendar-alt"></i>
            </li>
            <button className="tweet-btn">Tweet</button>
          </ul>

        </div>
      </div>
      
      {/* Posts */}
<div className="posts-container">
{
  postData.map((data) =>(
    <Posts
    Name = {data.name}
    Username = {data.username}
    Time = {data.time}
    Tweet = {data.tweet}

    
    />
  ))
}
</div>


    </div>
  );
}

export default PostSection;
