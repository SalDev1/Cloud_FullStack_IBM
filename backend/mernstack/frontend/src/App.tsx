import React from 'react';
import './App.css';
import ProductsList from './components/ProductList';
// import { ProductProvider } from './context/productContext';
import { Link } from 'react-router-dom';
import {FC} from 'react';
import ProductSearch from './components/ProductSearch';

const App :FC<any> = ({children}) => {
  return (
    // There should exist at least one root element , otherwise you aren't able to 
    // render the given component.  
    // That's why we add empty JSX tages.
    

    // JSX is down below.
    <>
      {/* <div className='container productsContainer'>
        <ProductProvider url ="http://localhost:4200">
            <ProductsList />
        </ProductProvider>
      </div> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/products">ProductsList</Link>
              </li>
            </ul>

            <ProductSearch />
          </div>
        </div>
      </nav>

      <div className='container'>
        {/* This is the place or placeholer where the router components will be rendered. */}
         {children}
      </div>

      <footer className='mt-5 p-3 text-center bg-light'>
        Products @copy;
      </footer>
    </>
  );
}

export default App;
