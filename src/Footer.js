import React from 'react';

function Footer(){

	return(
		<>
		<footer>

		  <div className="sec-footer">

		  <div className="col-footer">

			  <div className="footer-logo">
			      <img src="" alt="" />
			  </div>

			  <div className="footer-link">
				  <h2>Quick Links</h2>
				  <ul>
					  <li>Home</li>
					  <li>About Us</li>
					  <li>Blog</li>
					  <li>Contact Us</li>
					  <li>Service</li>
				  </ul>
			  </div>

			  <div className="footer-clinic-details">
			    <h2>Our Clinic</h2>
			    <p>2 Venture Drive,<br/>  #01-06 Vision Exchange,<br/> Singapore (608526)</p>
			    <p>Mon to Fri 8AM-6PM, <br/> Sat 8AM-3PM</p>
			    <p>(+65) 6679 1229</p>
			    <p>hello@curasia.com</p>
			  </div>

		  </div>

		  </div>

		  <div className="footer_copyright">2021 Copyright © Curasia Endoscopy Centre Personal Data Protection Policy.</div>

		</footer>
		</>
		)
}

export default Footer;