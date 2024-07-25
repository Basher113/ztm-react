import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { currentUserSelector } from "../../reducers/user/user.selector.js";

import CrownLogo from '../../assets/crown.svg?component'
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropdown";

import { LogoContainer, NavigationContainer, NavLinksContainer, NavLink } from './Navigation.styles.jsx'
import { selectCartDropdownIsVisible } from "../../reducers/cart/cart.selector.js";


function Navigation() {
    const currentUser = useSelector(currentUserSelector)
    const cartDropDownIsVisible = useSelector(selectCartDropdownIsVisible)
    // const { cartDropDownIsVisible } = useContext(CartContext)

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