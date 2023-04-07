import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
        <div className='nav-wrapper'>
            <nav>
                <Link to="/">
                    Home
                </Link>
                <Link to="/contact">


                    Contact
                </Link>

                <Link to="/store">


                    Demo Derby Parts
                </Link>

            </nav>
        </div>
    )
}
export default Nav;