import React,{useState,useEffect} from 'react';
import Colonoscopy from './asset/Colonoscopy-Operation.jpg';
import axios from 'axios';


function Blog() {
	const [Allblog, setBlog] = useState([]);

	useEffect(() => {

		const getpost= axios.get('https://curasia.com/wp-json/wp/v2/posts/?_embed')
		.then((resblog)=>{
			setBlog(resblog.data);

		});

		// return () => {
		// 	effect
		// };
	}, []);
   
   // const singlepost=(event)=>{
   // 	console.log("jkh");
   // }

	return(
		<div className="main-container">
		<section className="section-featurearticle">

		<div className="col-featurearticle">

			<div className="col-featurearticle-left">

				<h2>Featured Article</h2>
				<h3>Colon Cancer Screening In Singapore: Everything You Need To Know</h3>
				<p>Our specialized endoscopy centre is a one-stop service centre providing a wide range of diagnostic and therapeutic endoscopic procedures. Our larger rooms, enhanced privacy, and comfortable rest beds provide a comfortable experience for you throughout your gastroscopy procedure.</p>
				<a class="btn btn_book">Read More </a>
			</div>

			<div className="col-featurearticle-right">
			    <img src={Colonoscopy} alt="Colonoscopy"/>
			</div>
		</div>

		</section>

		<section className="section-blogpost">

		<div className="sec-blogpost">
		<h3>The General Surgery Blog</h3>
			<div className="col-blogpost">
			{
			Allblog.map((getpost, index) => {
               
				return(
					<div className="blog-post" key={index}>
					<img src={getpost._embedded['wp:featuredmedia']['0'].source_url}  width="364" height="242" />
					
					<h2 >{getpost.title.rendered}</h2>
					<p>{getpost.title.rendered}</p>
				    <a href={"singlepost/"+getpost.id} > Read More </a>
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

export default Blog;