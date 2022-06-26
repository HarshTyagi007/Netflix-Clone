import React,{useState,useEffect} from 'react';
import './nav.css';

function Nav() {

    const[show,handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100)
            {
                handleShow(true);
            } else handleShow(false); 
        });
        return () => {
            window.removeEventListener("scroll");
        }; 
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
          <img
          className="nav_logo"
          src="https://github.com/HarshTyagi007/SocialLinksExtension/blob/master/images/HTLogo.png?raw=true"
          alt="HT Logo"
          />
          <img
          className="nav_avatar"
          src="https://images.megapixl.com/5201/52010608.png"
          alt="HT Avatar"
          />
            
        </div>
    )
}

export default Nav
