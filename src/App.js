
import './App.css';
import { BrowserRouter as Router, Route,Redirect} from "react-router-dom";
import Users from "./user/pages/Users";

function App() {
  return (
    <Router> 
      <Route exact path="/"><Users /></Route>
      <Redirect to="/" />

      

    </Router>
    
  );
}

export default App;
