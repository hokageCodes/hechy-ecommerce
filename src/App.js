import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import LandingPage from './pages/LandingPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';



function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/cartpage' element={<CartPage/>}/>
      <Route path='/checkoutpage' element={<CheckoutPage/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
