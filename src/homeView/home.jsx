import '../styles/main.css'
import Header from '../header/header';
import Sidebar from '../sidebar/Sidebar';
import PostSection from '../postSection/postSection';

function home(){
    return(
        <div className="home">

<Header/> 
<PostSection/>
<Sidebar/>






        </div>
    )
}

export default home;