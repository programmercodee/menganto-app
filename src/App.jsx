import './App.css'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import Home from './components/Home'
import Male from './components/Male'
import Female from './components/Female'
import Kids from './components/Kids'
import Newarrivals from './components/Newarrivals'
import Bestseller from './components/Bestseller'
import Glossary from './components/Glossary'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact_support from './components/Contact_support '
import FemaleOrg from './components/OriginalPages/FemaleOrg'
import FemaleDresses from './components/Other_pages/FemaleDresses'
import ManSummerstyles from './components/Other_pages/ManSummerstyles'
import CheckOut from './components/Other_pages/CheckOut'
import CartPayment from './components/Other_pages/CartPayment'
import MansShoes from './components/Other_pages/MansShoes'



function App() {


  return (
    <>

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/male" element={<Male />}></Route>
          <Route path="/female" element={<Female />}></Route>
          <Route path="/kids" element={<Kids />}></Route>
          <Route path="/newarrivals" element={<Newarrivals />}></Route>
          <Route path="/bestseller" element={<Bestseller />}></Route>
          <Route path="/glossary" element={<Glossary />}></Route>
          <Route path="/Contact_support" element={ <Contact_support/>}></Route>
          <Route path='/FemaleDresses' element={<FemaleDresses/>}></Route>
         <Route path='/ManSummerstyles' element={<ManSummerstyles/>}></Route>
         <Route path='CheckOut' element={<CheckOut/>}></Route>
         <Route path='CartPayment' element={<CartPayment/>}></Route>
         <Route path='MansShoes' element={<MansShoes/>}></Route>
        </Routes>
      </BrowserRouter>





      <Footer />

    </>
  )
}

export default App
