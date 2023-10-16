import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import purplecall from './asset/Curasia-Desktop-Contact-Form-Purple-Call.png';
import whatsappcall from './asset/Curasia-Desktop-Contact-Form-Whatsapp.png';

function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
	return(
		<>
		<section className="section-contact">
			<div className="col-contact">

			<div className="contact-blank"></div>
                <div className="">
				<div className="contact-form">
				<h3>Make An Enquiry</h3>
				<p>Leave us your details and we’ll get back to you shortly.</p>
					<form>
					    <input type="text" placeholder="Full name*"/>
					    <input type="text" placeholder="Phone number*"/>
					    <input type="text" placeholder="Email Address*"/>
					    <textarea placeholder="Tell us more about your concern.." rows="6" cols="60"></textarea>

					    <input type="Submit" value="Submit Enquiry" />
					</form>
				</div>
				<div className="contact-details">
					<img src={purplecall} alt="purple-call"/>
					<p>Prefer to talk? Call our clinic directly to make an enquiry at +65 6679 1229</p>
					<img src={whatsappcall}  alt="whatsapp-call"/>
					<p>or Whatsapp us at +65 6679 1229 We are available 24 hours</p>
				</div>
				</div>

			<div className="contact-blank"></div>

			</div>
		</section>

		<section className="section-clinic">

			<div className="col-clinic">
				<div className="col-clinic-left">
				   <h2 className="">Let&#39;s Get in Touch &#33;</h2>
				   <h3 class="elementor-heading-title elementor-size-default">Clinic Details</h3>
				   <p><i className="fa-solid fa-location-dot"></i> 2 Venture Drive, #01-06 Vision Exchange, Singapore (608526)</p>
				   <p><i class="fa-regular fa-clock"></i> Mon to Fri 8AM-6PM, Sat 8AM-3PM</p>
				   <p><i class="fa-regular fa-phone"></i> +65 6679 1229</p>
				   <p><i class="fa-regular fa-envelope"></i> hello@curasia.com</p>
				</div>

				<div className="col-clinic-right">
				<iframe title="Google Map" width="100%" height="450"  frameBorder={0} style={{ border: "0" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.972438991685!2d103.73574023381781!3d1.330201984477014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da100913d5d587%3A0x1210d70efa64e161!2sSingapore%20608526!5e0!3m2!1sen!2sin!4v1654585996605!5m2!1sen!2sin"
                allowFullScreen  />
				
				</div>
			</div>
		</section>
	
		</>

		)
}

export default Contact;