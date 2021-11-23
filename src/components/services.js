import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
function services() {
	return (
		<div>
			<div className="container">
				<h1 className="header1">Our Services</h1>
				<p>The following are some of the best services offered by AICB for anyone in the
					world with internet access.</p>
				<div className="">
					<div className="services">
						<span className="service-list">
							<img src={icon1} alt="" />
							<p>Decentralised exchange</p>
						</span>
						<span className="service-list">
							<img src={icon3} alt="" />
							<p>Global Money exchange</p>
						</span>
						<span className="service-list">
							<img src={icon2} alt="" />
							<p>Secure savings wallets</p>
						</span>
						<span className="service-list">
							<img src={icon1} alt="" />
							<p>Automated portfolio</p>
						</span>
						<span className="service-list">
							<img src={icon1} alt="" />
							<p>Book flight and send crypto directly</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default services
