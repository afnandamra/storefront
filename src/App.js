import Header from './components/header';
import Footer from './components/footer';
import Store from './components/storefront';
import Products from './components/products';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <Store />
      <Products className="main"/>
      <Footer />
    </>
  );
}

export default App;
