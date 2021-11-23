import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
function footer() {
	return (
		<div>
			<div className="footer">
				<p>Artificial intelligence based on neural networks, 
					built using newest algorithms for self learning, analysis and the correlation the objects of analysis</p>
				<ul className="footer-item">
					<ul className="">
						<li className="">Product</li>
						<li className="">Features</li>
						<li className="">Resources</li>
						<li className="">Resources</li>
					</ul>
					<ul className="">
						<li className="">About</li>
						<li className="">About</li>
						<li className="">Live Chat</li>
						<li className="">Support</li>
					</ul>
				</ul>
				<span className="stay">Stay Connected</span>
				<ul className="social">
					<a style={{backgroundColor : "#2489BE"}}><FaLinkedinIn /></a>
					<a  style={{backgroundColor : "#2DAAE1"}}><FaTwitter /></a>
					<a  style={{backgroundColor : "#3C5A9A"}}><FaFacebookF /></a>
				</ul>
				<p className=""></p>
			</div>
		</div>
	)
}

export default footer
