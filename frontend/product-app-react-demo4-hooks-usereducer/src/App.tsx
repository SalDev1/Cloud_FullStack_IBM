import React from 'react';
import './App.css';
import ProductsList from './components/ProductList';

function App() {
  return (
    // There should exist at least one root element , otherwise you aren't able to 
    // render the given component.  
    // That's why we add empty JSX tages.

    // JSX is down below.
    <>
      <nav className='navbar navbar-dark bg-primary mb-3'>
        <div className='container'>
          <a href="#" className='navbar-brand'>Products</a>
        </div>
      </nav>

      <div className='container productsContainer'>
        <ProductsList />
      </div>

      <footer className='mt-5 p-3 text-center bg-light'>
        Products @copy;
      </footer>
    </>
  );
}

export default App;
