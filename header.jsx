import React from "react";
import { Link } from "react-router-dom";
//import pic from "./assests/BookHive.png";

const Header =()=>{
    return <nav>
     <div> <img src="./BookHive.jpeg" alt="" />
     </div>
     <main>
      <Link to ={"/"}>Home</Link>
      <Link to ={"/#about"}>About</Link>
      <Link to ={"/contact"}>Contact</Link>       
     </main>
    </nav>
};
export default Header;