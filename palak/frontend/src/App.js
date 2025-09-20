import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;