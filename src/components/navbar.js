import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa'
function navbar() {
	return (
		<div>
			<div className="nav">
				<div className="mob-nav">
					<div className="nav-img">
						<img src={logo} alt="" />
					</div>
					<FaBars className="bar" style={{ color: "#ffffff", fontSize: "32px", cursor: "pointer", alignSelf: "center" }} />
				</div>
				<div className="sidebar-backdrop">
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
		</div>
	)
}

export default navbar
