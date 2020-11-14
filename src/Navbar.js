import React, {useState, useEffect} from 'react'
import "./Navbar.css"

function Navbar() {
const [show, handleShow] = useState(false);

   useEffect(() =>{
       window.addEventListener("scroll", () => {
           if (window.scrollY > 100) {
               handleShow(true);
           } else handleShow(false);
       });
       return () => {
           window.removeEventListener("scroll");
       };

   }, []);





    return (
        <div className={`navbar ${show && "navbar__black"}`}>
          <img className="navbar__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
          alt="Netflix_logo"/>

         <img  className="navbar__avatar"
            src="https://ih1.redbubble.net/image.618405117.2432/flat,1000x1000,075,f.u2.jpg"
            alt="Netflix_logo"      
            />
        </div>
    )
}

export default Navbar
