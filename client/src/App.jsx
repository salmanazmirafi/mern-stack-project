import {BrowserRouter as Router} from "react-router-dom"
import Header from "./components/layout/Header/Header";

const App = () => {
  return <div>
    <Router>
      <Header/>
    </Router>
  </div>;
};

export default App;