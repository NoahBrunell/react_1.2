import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index.tsx'
import Shop from './pages/Shop.tsx'
import Checkout from './pages/Checkout.tsx'
import Login from './pages/Login.tsx'
import './index.css'
import Layout from './component/Layout.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path = "/" element={<Index />} />
          <Route path = "/shop" element={<Shop />} />
          <Route path = "/checkout" element={<Checkout />} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
)
