import { FC, useCallback, useContext, useEffect, useReducer, useState } from "react"
import { ProductContext } from "../context/productContext";
import IProduct from "../model/product";
import ProductsList from "./ProductList";


const ProductSearch = () => {
    const {products, url , filteredProducts, setFilteredProducts} = useContext(ProductContext)
    const [searchKey, setSearchKey] = useState('');

    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault() // Preventing the default form submission.
        setFilteredProducts(products.filter(p => p.productName.toLocaleLowerCase().includes(searchKey)));
    }

    console.log(products);

    return (
        <form className="d-flex" role="search" onSubmit={submitHandler}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange = {(e) => setSearchKey(e.target.value)}/>
              <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}
/*
  Two Solutions to this problem. 
   1) having global state above the both the components. 
   2) Using Redux.
*/

export default ProductSearch