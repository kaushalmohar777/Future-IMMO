import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import Footer from './footer/footer';

import ProductPage from './product-page/ProductPage';

import ShopProvider from './context/shopContext';

import ScrollToTop from './ScrollToTop';



function App() {

  return (
    <>
    <ShopProvider>
    <Header></Header>
      <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="product/:handle" element={<ProductPage />}></Route>
        </Routes>
      
    <Footer></Footer>
    </ShopProvider>
    </>
    )
}

export default App;
