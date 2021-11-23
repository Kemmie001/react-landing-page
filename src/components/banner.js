import Navbar from './navbar'
function banner() {
	return (
		<div>
			<Navbar className="large-nav" />
			<div className="banner">
				<h1>
					WORLD'S FIRST DECENTRALISED DIGITAL CRYPTO EXCHANGE BANK
				</h1>
				<p>
					AICB is a decentralised bank based on the blockchain, we made use of the blockchain and artificial intelligence to offer the banking Services offered by investment banks.
				</p>
				<button className="primary-btn">
					Get Whitepaper
				</button>
				<button className="sec-btn">
					Get ACIB App
				</button>
			</div>
		</div>
	)
}

export default banner
