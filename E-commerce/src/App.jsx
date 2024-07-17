import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import SignIn from './routes/sign-in/SignIn';

function Shop() {
  return <div>Yoow This is Shop page</div>;
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />}></Route>
      </Route>
    </Routes>
  )

}

export default App;
