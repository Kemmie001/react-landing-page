import PropTypes from 'prop-types';
import Button from './button.js';
const Header = (props) => {

	const onClick = () => {
		alert("click")
	}
	return (
		<header className="header">
			<h1 className="">{props.title}</h1>
			<Button text="Add" color="green" onClick={onClick} />
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Manager'
}

Header.propTypes = {
	title: PropTypes.string
}

// Css styling in a Ss
// const headerStyle = {
// 	color: 'red',
// } 

export default Header
