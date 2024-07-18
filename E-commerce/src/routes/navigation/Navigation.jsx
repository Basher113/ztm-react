import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import { CartDropDownContext } from "../../contexts/CartDropdownContext"

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CrownLogo from '../../assets/crown.svg?component'
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropdown";

import './Navigations.styles.scss'

function Navigation() {
    const { currentUser } = useContext(UserContext);
    const { cartDropDownIsVisible } = useContext(CartDropDownContext)

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
                    <CartIcon />
                </div>
                {cartDropDownIsVisible && <CartDropDown />}
            </div>
            <Outlet />
        </>
    );
}

export default Navigation;