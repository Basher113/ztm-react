import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';

import { checkUserSession } from './reducers/user/user.action';

import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import Checkout from './routes/checkout/Checkout';
import Shop from './routes/shop/Shop';


const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )

}

export default App;
