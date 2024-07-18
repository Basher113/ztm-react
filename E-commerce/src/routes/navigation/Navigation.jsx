import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CrownLogo from '../../assets/crown.svg?component'
import './Navigations.styles.scss'

function Navigation() {
    const { currentUser } = useContext(UserContext);
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
                    {!currentUser && <Link to='/auth' className="nav-link">
                        Sign-in
                    </Link>}

                    {currentUser && <span onClick={signOutUser} className="nav-link">
                        Sign-out
                    </span>}
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Navigation;