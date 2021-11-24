import  {useState} from 'react'
import question from '../assets/Question Mark.svg';
// import '../index.css'


const Faq = () => {
	// const [Faqs, setFaqs] = useState([
	// 	{
	// 		id: 1,
	// 		para: "Artificial intelligence based on neural networks, built using the newest algorithms for self learning, analysis and comparison of neurons in which will be self-corrected, based on the history."
			
	// 	},
	// 	{
	// 		id: 2,
	// 		para: "Artificial intelligence based on neural networks, built using the newest algorithms for self learning, analysis and comparison of neurons in which will be self-corrected, based on the history."
	// 	},
	// ])
	// function showFaq (){
	// alert("good")
	// }

	return (
		<div>
			<div className="faq">
				<h1 className="header1">Frequently asked questions</h1>
				<div className="faq-container">
					<div className="faq-card">
						<h3>What cryptocurrency can I purchase</h3>
						<span>
							<img src={question}alt="" style={{width: '25px'}} />
						</span>
					</div>
					<div className="faq-card">
						<h3>What cryptocurrency can I purchase</h3>
						<span>
							<img src={question}alt="" style={{width: '25px'}} />
						</span>
					</div>
					<div className="faq-card">
						<h3>What cryptocurrency can I purchase</h3>
						<span>
							<img src={question}alt="" style={{width: '25px'}} />
						</span>
					</div>
					<div className="faq-card">
						<h3>What cryptocurrency can I purchase</h3>
						<span>
							<img src={question}alt="" style={{width: '25px'}} />
						</span>
					</div>
					
				</div>
				<div className="faq-item">
				<p>Artificial intelligence based on neural networks, built using the newest algorithms for self learning, analysis and comparison of 
					neurons in which will be self-corrected, based on the history.</p>
				</div>
			</div>
		</div>
	)
}

export default Faq
