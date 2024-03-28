import { FC, useCallback, useContext, useEffect, useReducer, useState } from "react"
// import { ProductContext } from "../context/productContext";
import IProduct from "../model/product";
import ProductsList from "./ProductList";
import { useSelector , useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchProducts, setSearchKey } from "../redux/producListSlice";

const ProductSearch = () => {
    // const {products, url , filteredProducts, setFilteredProducts} = useContext(ProductContext)
    // const [searchKey, setSearchKey] = useState('');
    
    const dispatch= useDispatch<AppDispatch>();
    // const products = useSelector((state:RootState) => ({products: state.products.products})).products
    const searchByName = (e:React.ChangeEvent<HTMLInputElement>) => {
        // Preventing the default form submission.
        // console.log(products.filter((p) => p.productName.toLocaleLowerCase().includes(searchKey)))
        const value = e.target.value

        if(value && value.trim().length === 0) {
            return 
        }
        dispatch(setSearchKey(value))
        dispatch(fetchProducts(value))
    }
    
    // console.log(filteredProducts);
    return (
        <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={searchByName}/>
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