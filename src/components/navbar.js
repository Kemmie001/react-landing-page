import React, {useState, useEffect} from 'react'
import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa'

import '../index.css'
export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [screenWidth, setScreenWidth] = useState
	(window.innerWidth)
 	const toggleNav = () => {
		setToggleMenu(!toggleMenu)
	}
	useEffect(() => {
		const changeWidth = () =>{
			setScreenWidth(window.innerWidth)
		}
		window.addEventListener('resize', changeWidth)
	})
	return (
		<div>
			<div className="nav">
				<div className="mob-nav">
					<div className="nav-img">
						<img src={logo} alt="" />
					</div>
					<FaBars onClick={toggleNav} className="bar" style={{ color: "#ffffff", fontSize: "32px", cursor: "pointer", alignSelf: "center" }} />
				</div>
				
				{(toggleMenu || screenWidth > 768) && (
					<div onClick={toggleNav} className="sidebar-backdrop">
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
				)}
				
			</div>
		</div>
	)
}


