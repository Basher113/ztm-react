import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/Authentication';

function Shop() {
  return <div>Yoow This is Shop page</div>;
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />}></Route>
      </Route>
    </Routes>
  )

}

export default App;
