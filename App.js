import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Popular from "./components/popular"
import Quotes from "./components/quotes"

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/popular.scss";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      
      </Routes>
      <Popular/>
      <Quotes/>

    </Router>
    
  );
}

export default App;
