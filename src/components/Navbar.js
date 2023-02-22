import {React } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return  (
        <nav>
            <div className='main_nav'>
                <Link to = {'/'} className = 'logo'> Just Shop </Link>
                <div className ='items'>
                    <ul className='nav_items'> 
                        <li> <Link to = {'/'} >Home</Link></li>
                        <li> <Link to = {'/cart'}>Cart</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;