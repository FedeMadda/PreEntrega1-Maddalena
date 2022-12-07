import CartWidget from '../CartWidget/CartWidget'
import Navbar from './Navbar.css'

const navbar = () => {
    return (
        <nav className='navbar'>
            <img src={'./images/FIM-logos.jpeg'} className='logo' alt='FIMlogo'></img>
            <ul>
                <li><button className='btn'>Samsung</button></li>
                <li><button className='btn'>iPhone</button></li>
                <li><button className='btn'>Nothing</button></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default navbar