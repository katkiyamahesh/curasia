import React , {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Singlepost(){
	let { id } = useParams();

	const [singlepost, setSinglepost] = useState([]);
    
	useEffect(() => {
          // console.log(id);
	
		const getpost= axios.get('https://curasia.com/wp-json/wp/v2/posts/'+id)
		.then((res)=> {
			setSinglepost(res.data);
			// console.log(res.data);
		})
		.catch((res)=>console.log("posts not found"));
	
	},[]);

const demo= Object.keys(singlepost);

	return(
		<div className="main-container">
		<section className="section-singlepost">
			<div className="col-siglepost">
			{ Object.keys( singlepost ).length ? (
				<>
				
				<h1>{singlepost.title.rendered}</h1>
				<span>{singlepost.date}</span>
				<img src={singlepost.yoast_head_json.og_image[0].url} alt="post-img"  width="1120" height="450"/>
				<p dangerouslySetInnerHTML={{__html:singlepost.content.rendered}} />
				</>
				) : '' }
		
			</div>
		</section>
	     
		</div>
		)
}
export default Singlepost;