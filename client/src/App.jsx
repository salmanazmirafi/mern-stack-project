import {BrowserRouter as Router,Route} from "react-router-dom"
import Header from "./components/layout/Header/Header";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import './App.css'
const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return <div>
    <Router>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Footer/>
    </Router>
  </div>;
};

export default App;