import React, {useState ,useEffect} from 'react';
import Logo from './asset/Curasia Logo.png';
import callimg from './asset/Call.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { NavLink } from "react-router-dom";	
import axios from 'axios';



function Header(){

	const [isNavVisible, setIsNavVisible] = useState(false);

    const [Navmenu, SetNavmenu] = useState([]);

    const [sticky, setSticky] = useState(false);

    const toggle=()=>{
    	// console.log("nev");
    	setIsNavVisible(!isNavVisible);
    }
    
    useEffect(() => {
    	function getmenu(){
    		const resmenu= axios.get('http://localhost/curasia/wp-json/wp/v2/getmenu')
    		.then((res)=>{
    		 // console.log(res.data);
             SetNavmenu(res.data);
    		});
    	}
    	getmenu();
    }, []);

    useEffect(() => {
    document.addEventListener('scroll', trackScroll)

    return () => {
      document.removeEventListener('scroll', trackScroll)
    }
    }, []);

    const trackScroll=()=>{
		if (typeof window == 'undefined') {
		   return
		} else {
			// console.log(window.scrollY >= 110 );
		   setSticky(window.scrollY >= 110);
		}
    }
   const headerClass = sticky ? "header sticky" : "header";
    // const formattedTitle = title[0].toLowerCase() + title.slice(1);
	return(
		<>
		<header  className='header' >
		   <nav className="nav-menu"> 
			<a href="/" className="brand-name">
			<img src={Logo}  alt="site-logo"/>
			</a>

			<button className="hamburger" onClick={toggle}>
	          <i className={isNavVisible? "fa-solid fa-xmark" :"fa-solid fa-bars"} ></i>
			</button>

		    <div className={isNavVisible? "navigation-menu expanded" :"navigation-menu"} >
			<ul id="menu" className="nav-menu-list">

				<li>
				<NavLink to="" >Home</NavLink >
				</li>
				<li>
				<NavLink to="about" >About us</NavLink >
				</li>
				<li>
				<NavLink to="service" >Service</NavLink >
				</li>
				<li>
				<NavLink to="blog" >Blog</NavLink >
				</li>
				<li>
				<NavLink to="contact" >Contact</NavLink >
				</li>
			</ul>
			</div>
		  </nav>

		  <div className="contact-us">

                	<div className="contact-img">
                	<img src={callimg} alt="call" />
                	</div>

                	<div className="contact">                		
                	<span>Call Us</span>
                	<p><u>+65 6679 1229</u></p>
                	</div>
	                <div class="contact-book">
	                	<button type="button" className="border-0" style={{background:'#49AFE3'}}>CONTACT US <br/> Book Appointment</button>
	                </div>
          </div>

		</header>
		</>
	)
}

export default Header;