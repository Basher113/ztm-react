import { Link, Outlet } from "react-router-dom";
import CrownLogo from '../../assets/crown.svg?component'
import './Navigations.styles.scss'

function Navigation() {
    return (
        <>
            <div className="navigation">
                <Link to='..' className="logo-container">
                    <CrownLogo />
                </Link>

                <div className="nav-links-container">
                    <Link to='/shop' className="nav-link">
                        Shop
                    </Link>
                    <Link to='/sign-in' className="nav-link">
                        Sign-in
                    </Link>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Navigation;