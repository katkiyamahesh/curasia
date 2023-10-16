import {useEffect , useState} from 'react';	
import bannerhero from './asset/Curasia - Homepage - Hero Banner.png';
import curasia from './asset/Curasia-Homepage-About-Curasia.png';
import maskimg from './asset/Mask-Group.png';
import maskimg1 from './asset/Mask-Group-1.png';
import aboutdoc from './asset/image-403.png';
import purplecall from './asset/Curasia-Desktop-Contact-Form-Purple-Call.png';
import whatsappcall from './asset/Curasia-Desktop-Contact-Form-Whatsapp.png';
import Contact from './Contact';


function Home(){
    const [Acfstate , AcfsetState] = useState([]);

    const [activeIndex, setActiveIndex] = useState(-1);
   
	const handleClick = (index) => {
	    setActiveIndex(index === activeIndex ? -1 : index);
	};
  
    const data = [
			{
			id:'1',
			header: "What is Colonoscopy?",
			subheading: <h5>Fasting</h5>,
			content:"You should fast for at least 6 hours prior to your colonoscopy. You may drink clear fluid up to 2 hours before the procedure but milk is not allowed during the fasting.",
			subheading1:<h5>Bowel Preparation</h5>,
			content1:"For a successful colonoscopy, you should follow the instruction of the bowel preparation given to you.In general, most medication should be continued before the colonoscopy with the exception of diabetes medication and blood thinners. Diabetic medication should be omitted during fasting. You should check with your doctor if your blood thinner needs to be discontinued prior to the procedure."
			},
			{
			id:'2',
			header: "What Happens After A Colonoscopy?",
			content: "As you will be given medication to make you sleepy, you must not drive, work or make any important decision after the procedure. Medical Certificate will be issued if needed and you should rest at home for the rest of the day.",
			},
			{
			id:'3',
			header: "Can I Use Medisave & Insurance?",
			content: "We collaborate with the vast majority of health insurers. Please feel free to contact our friendly clinic staff to assist you with the financing options.",
			},
			];
   
	useEffect(() => {
		const acffieldget=fetch('http://localhost/curasia/wp-json/wp/v2/posts?per_page=3&_embed');
		const acfjson=acffieldget.then((respon,date)=>{
			// console.log(respon);
			return respon.json();
		}).then((myjson)=>{
			// console.log(myjson);
			AcfsetState(myjson);

		});
	}, []);
    
   

	return(
		<div className="main-container">
		<section className="section-dedicated">

		<div className="col-dedicated">
			<div className="col-dedicated-left">
				<h2>Get Yourself Checked</h2>
				<h3 className="">Dedicated Endoscopy Centre In Singapore</h3>
				<p>Our specialized endoscopy centre is a one-stop service centre providing a wide range of diagnostic and therapeutic endoscopic procedures. Our larger rooms, enhanced privacy, and comfortable rest beds and washrooms, we provide a comfortable experience for you throughout your gastroscopy procedure.</p>
				<a class="btn btn_book">Book An Appointment </a>
			</div>

			<div className="col-dedicated-right">

			    <img src={bannerhero} alt="hero-banner" />
			</div>
		</div>

		</section>

		<section className="section-aboutcurasia">

		<div className="col-aboutcurasia">

		    <div className="col-aboutcurasia-left">
			    <img src={curasia} alt="hero-banner" />
			</div>

			<div className="col-aboutcurasia-right">
				<h2>For the people, by the people.</h2>
				<h3 className="">About Curasia</h3>
				<p>Curasia Endoscopy is a healthcare practice that provides endoscopy to the general public, including both gastroscopies and colonoscopies, through leading day surgery facilities to reduce unnecessary hospitalisations. We work closely with our clinical staff to tirelessly provide a seamless experience for our patients.</p>
				<p className="cont_para">Aimed at reducing Colorectal Cancer rates, we are building a series of decentralized Endoscopy Centres in the Heartlands.</p>
			</div>

		</div>

		</section>

		<section className="section-servicesoff">
		<div className="sec-service">
		<h2>Services Offered at our Specialised Endoscopy Centre</h2>
			<div className="col-servicesoff">

				<div className="col-servicesoff-left bg-color">
				    <div className="servicesoff-img">
					  <img src={maskimg} alt="mask-img"  />
					</div>

					<div className="servicesoff-content">
						<h2>Examination of the Stomach</h2>
						<h3>Colonscopy</h3>
						<p>Gastroscopy, or an upper GI endoscopy, can help detect multiple serious health conditions that may be overlooked as abdominal pain.</p>
						<button className="btn btn_service"><a href="#">Read More</a></button>
					</div>
				</div>

				<div className="col-servicesoff-right bg-color">
				   <div className="servicesoff-img">
				      <img src={maskimg1} alt="mask-img"  />
				    </div>

				    <div className="servicesoff-content">
						<h2>Examination of the Large Intestine</h2>
						<h3>Gastroscopy</h3>
						<p>A colonoscopy is a procedure to look inside your colon and examine its lining. Gastroenterologists are the specialists that perform the colonoscopy.</p>
						<button className="btn btn_service"><a href="#">Read More</a></button>
					</div>
				</div>

			</div>
		</div>	
		</section>

		<section className="section-about-doc">
			<div className="col-about-doc">

			    <div className="col-about-doc-left">
			      <img src={aboutdoc} alt="about-doc"/>
			    </div>

			    <div className="col-about-doc-right">
					<h2>Meet our CGO</h2>
					<h3>Dr. Frances Lim</h3>
					<h3 className="since-title">SAB accredited (Since 2010)</h3>
					<p>Dr. Frances Lim is a general and colorectal surgeon who has a keen interest in promoting screening for colorectal cancer. She believes that through education and support, more will come forward for screening, and eventually, we will see this cancer dropping off the #1 list.</p>
					<ul>
						<li>Colorectal Clinic Associates</li>
						<li>Colorectal surgery, screening for colorectal cancer</li>
						<li>Washington Hospital Center, USA 2009</li>
						<li>SUNY Upstate Medical University, USA 200</li>
						<li>M.D. University of Calgary, 2003</li>
					</ul>
					<p>Dr. Frances Lim is a double board-certified general surgery and colon and rectal surgeon. She is skilled in a wide range of colorectal and general surgeries; but her main interests lie in inflammatory bowel disease and colorectal cancer. She is a skilled laparoscopic surgeon who always attempt to utilize minimally invasive procedures on her patients whenever possible to shorten recovery time and improve patient outcomes.  Dr. Lim received her medical degree from the University of Calgary in Alberta, Canada. She completed a General Surgery residency at the State University of New York and then completed a fellowship in Colon and Rectal surgery at Washington Hospital Center.An internationally known physician, she has also spoken at numerous gastroenterological procedures and patient management topics at conferences ranging from the Endoscopic Laparoscopic Surgeons of Asia to the American Society of Colon and Rectal Surgeons.  Dr. Lim respects patient preferences and takes the time to explain all medical options available so they can make the best decision for themselves. Utilizing evidence-based medicine, her approach to patient care is much appreciated by her patients and their families.	</p>

					<button className="btn btn_service"><a class="btn_dr_contact">Contact Dr. Lim</a></button>
			    </div>

			</div>
		</section>

		<section className="section-intro">
			<div className="col-intro">
				<h2 className="">Introducing Curasia Endoscopy Centre</h2>
				<p>Our host, Jerald Foo, will be taking you to our first centre at Jurong East.</p>
			</div>
			<iframe className="intro-video" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="I pooped blood, now what?" width="640" height="360" src="https://www.youtube.com/embed/F8PeVEV80UU?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=1&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fcurasia.com&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-6="true"></iframe>
		</section>

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

		<section className="section-frequently">

			<div className="col-freuently">
			<div className="freuently-heading">
			  <h2>Learn More</h2>
			  <h3>Frequently Asked Questions</h3></div>
				{data.map((section, id) => (

				<div key={id}>
					<div className="accordion" style={{padding: "10px",cursor: "pointer",}}
					onClick={() => handleClick(id)}>
					 <div className="accordion-title">{section.header}</div>
                      <i class="fa-regular fa-chevron-down"></i>
					</div>


					{activeIndex === id && (
					<div className="accordion-content" style={{ background: "white",padding: "10px",}}>
					 {section.subheading}
					 {section.content}
					 {section.subheading1}
					 {section.content1}
					</div>
					)}
				</div>

				))}
				
			

			</div>

		</section>

		<section className="section-blogpost">
		<div className="sec-blogpost">
		<h3>The Medical Blog </h3>
			<div className="col-blogpost">
			{
			Acfstate.map((getpost, id) => {
				return(
					<div className="blog-post">
					<img src={getpost._embedded['wp:featuredmedia']['0'].source_url} />
					
					<h2>{getpost.title.rendered}</h2>
					<p>{getpost.title.rendered}</p>
				    <a href="#">Read More</a>
					</div>
					)

			})
			}
		</div>
		</div>
		</section>
	  
		</div>
		)
}
export default Home;
