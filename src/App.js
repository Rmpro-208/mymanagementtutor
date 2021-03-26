// import logo from './logo.svg';
import {BrowserRouter as Router, Route, useLocation} from "react-router-dom";
import './App.css';
import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Route exact path="/"><HomePage/></Route>
        
      </div>
    </Router>
  );
}

export default App;
