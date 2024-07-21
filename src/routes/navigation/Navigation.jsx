import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext"

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CrownLogo from '../../assets/crown.svg?component'
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropdown";

import { LogoContainer, NavigationContainer, NavLinksContainer, NavLink } from './Navigation.styles.jsx'


function Navigation() {
    const { currentUser } = useContext(UserContext);
    const { cartDropDownIsVisible } = useContext(CartContext)

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='..'>
                    <CrownLogo />
                </LogoContainer>

                <NavLinksContainer>
                    <NavLink to='shop'>
                        Shop
                    </NavLink>
                    {!currentUser && <NavLink to='auth'>
                        Sign-in
                    </NavLink>}

                    {currentUser && <NavLink as='span' onClick={signOutUser}>
                        Sign-out
                    </NavLink>}
                    <CartIcon />
                </NavLinksContainer>
                {cartDropDownIsVisible && <CartDropDown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
}

export default Navigation;