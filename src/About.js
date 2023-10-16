import aboutdoc from './asset/image-403.png';

function About() {
	return(
		<>
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
		</>

		)
}

export default About;