import logo from '../assets/logo.png'
function navbar() {
	return (
		<div>
			<div className="nav">
				<div className="nav-img">
					<img src={logo} alt="" />
				</div>
				<ul className="">
					<li className=""><a>Home</a></li>
					<li className=""><a>Invest</a></li>
					<li className=""><a>About</a></li>
					<li className=""><a>Whitepaper</a></li>
					<li className=""><a>Roadmap</a></li>
					<li className=""><a>FAQ</a></li>
					<li className=""><a>Contact</a></li>
				</ul>
			</div>
		</div>
	)
}

export default navbar
