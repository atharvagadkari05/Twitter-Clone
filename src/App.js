import Home from './homeView/home'
import './styles/main.css';
import { HashRouter , Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <HashRouter basename="/">
      <Route path="/" exact component ={Home}/>
    </HashRouter>
    </div>
  );
}

export default App;
