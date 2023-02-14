import React from "react";
import "./navbar.css";
import { Link,Outlet} from "react-router-dom";

export default function Navbar(){

  return(
        <div className="navbar">
          <div className="logo">Shopio</div>
           <ul className="nav-links">
              <Link to="/">About Me</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Outlet/>
           </ul>
        </div>
  );

}
