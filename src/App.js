
import 	Banner from "./components/banner";
import 	About from "./components/about";
import 	Faq from "./components/faq";
import Service from './components/services'
import  Subscribe from './components/subscribe';
import Footer from './components/footer'
import RoadMap from "./components/roadMap";
function App() {
    return (
        <div className=''>
			<div className="body">
			<Banner />
			<About />
			<Service />
			<RoadMap />
			<Faq />
			<Subscribe />
			</div>
			<Footer />
        </div>
    )
}

// Class Based Compnonent
// class App extends React.Component {
//     render() {
//         return <h1 className="">Hello</h1>
//     }
// }

export default App;