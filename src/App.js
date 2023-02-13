import React from 'react'
import Home from './component/Home'
import Nav from './component/Nav'
import {Routes, Route } from 'react-router-dom'
import Products from './component/products'
import Product from './component/product'
import ShoppingCart from './component/cart'
import Contact from './component/contact'
import Login from './component/Login'
import Signup from './component/Signup'


function App() {
  return (
    <>
    
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/products' element={<Products/>}/>
          <Route exact path='/products/:name' element={<Product/>}/>
          <Route excat path='/cart' element={<ShoppingCart/>}/>
          <Route excat path='/login' element={<Login/>}/>
          <Route excat path='/register' element={<Signup/>}/>
        </Routes>
        <Contact/>
        
    </>
  )
}

export default App

