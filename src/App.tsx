import {FC} from 'react'
import Home from './pages/Home/Home';
import './index.css';
import {Routes, Route} from 'react-router-dom'
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Auth from './pages/Auth/Auth';
import Header from './components/Header/Header';
import Shop from './pages/Shop/Shop';

const App: FC = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/shop/product/:id' element={<Product/>} />
      </Routes>
    </div>
  )
}

export default App