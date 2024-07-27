import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { currentUserSelector } from "../../reducers/user/user.selector.js";
import { signOutUserStart } from "../../reducers/user/user.action.js";

import CrownLogo from '../../assets/crown.svg?component'
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropdown";

import { LogoContainer, NavigationContainer, NavLinksContainer, NavLink } from './Navigation.styles.jsx'
import { selectCartDropdownIsVisible } from "../../reducers/cart/cart.selector.js";



function Navigation() {
    const dispatch = useDispatch()
    const currentUser = useSelector(currentUserSelector)
    const cartDropDownIsVisible = useSelector(selectCartDropdownIsVisible)
    const signOutHandler = () => {
        dispatch(signOutUserStart())
    }

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

                    {currentUser && <NavLink as='span' onClick={signOutHandler}>
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