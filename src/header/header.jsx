import "../styles/main.css";
import dp from "../Assets/profilepic.PNG"

function header() {
  return (
    <div className="header container">
      <a className="logo">
        <i class="fab fa-twitter"></i>
      </a>

      <ul>
        <li>
          <div className="side">
            <i class="fas fa-home"></i>{" "}
            <>
              <h3>Home</h3>
            </>
          </div>
        </li>
        <li>
          <div className="side">
            <i class="fas fa-hashtag"></i>
            <>
              <h3>Explore</h3>
            </>
          </div>
        </li>
        <li>
          <div className="side">
            <i class="far fa-bell"></i>{" "}
            <>
              <h3>Notifications</h3>
            </>
          </div>
        </li>
        <li>
          <div className="side">
            <i class="far fa-envelope"></i>
            <>
              <h3>Messages</h3>
            </>
          </div>
        </li>
        <li>
          <div className="side">
            <i class="far fa-bookmark"></i>
            <>
              <h3>Bookmarks</h3>
            </>
          </div>
        </li>
        <li>
          <div className="side">
            <i class="far fa-list-alt"></i>
            <h3>Lists</h3>
          </div>
        </li>
        <li>
          <div className="side">
            <i class="far fa-user"></i>{" "}
            <>
              <h3>Profile</h3>
            </>
          </div>
        </li>
        <li>
          <div className="side">
            <i class="far fa-comment-dots"></i>{" "}
            <>
              <h3>More</h3>
            </>
          </div>
        </li>
      </ul>

      <button className="postSection-tweet-btn">Tweet</button>



<div className="header-pro-container">

<img className="headerDp" src ={dp}/><a><text>Atharva Gadkari</text><br/>
@atharvagadkari05</a>
<a></a>


</div>

    </div>
  );
}
export default header;
