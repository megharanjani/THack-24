import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Popular from "./components/popular"
import Quotes from "./components/quotes"
import Footer from "./components/footer"
//import Lib from "./components/lib";
import Showcase from "./components/showcase";



import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/popular.scss";
import "./styles/quotes.scss";
import "./styles/footer.scss";
import "./styles/showcase.scss";




function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Showcase/>
      
      <Popular/>
      <Quotes/>
      <Footer/>

    </Router>
    
  );
}

export default App;
