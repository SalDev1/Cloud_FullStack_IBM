import { useState , useEffect, useCallback, useContext} from "react"
import IProduct from "../model/product"
import Rating from "./Rating"
import httpClient from "../apiClient/httpClient";
import { ProductContext } from "../context/productContext";
import { Link } from "react-router-dom";

const ProductsList = () => {

    // object destructing , useContext hook.
    const  {products,url} = useContext(ProductContext)
    // We are returning a React-TSX function component == JSX
    // setProducts --> dispatch function.

    // Generic Type Data passing to make sure no other type of data set passed in.
    // const [products , setProducts] = useState<IProduct[]>([]);
    const [filterProducts , setFilterProducts] = useState<IProduct[]>(products);
    const [searchKey, setSearchKey] = useState('');

    const [show, setShow] = useState(true);
    const title = "Products App"

    const showorHideImage = () => {
        setShow(!show);
    }

    // const searchByName = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setFilterProducts(
    //         filterProducts.filter(p=> 
    //             p.productName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())))
    // }
    // useEffect hook. 
    // useEffect(() => {
    //     const fetchProducts = async() => {
    //         const response = await httpClient.get('http://localhost:4200/products')
    //         setProducts(response)
    //         setFilteredProducts(response)
    //     }
    //     fetchProducts()
    // },[])

    useEffect(() => {
     setFilterProducts(
        products.filter(p=> 
            p.productName.toLocaleLowerCase().includes(searchKey))
     )
    },[url,products,searchKey])

    return (
         <>
          <div className='card'>
            <div className='card-header'>
            {title}
            </div>
            <div className='card-body'>
            <div className='row'>
            <div className='col-md-2'>Filter by:</div>
            <div className='col-md-4'>
            <input type='text' onChange={(e) => setSearchKey(e.target.value)}/>
            </div>

            </div>
            <div className='row'>
            <div className='col-md-6'>
            <h4>Filtered by: </h4>
            </div>
            </div>
            <div className='table-responsive'>
            <table className='table'>
            <thead>
            <tr>
            <th>
                <button className='btn btn-primary' onClick={showorHideImage}>
                    {show ? "Hide " : "Show "} Image
                </button>
            </th>
            <th>Product</th>
            <th>Code</th>
            <th>Available</th>
            <th>Price</th>
            <th>5 Star Rating</th>
            </tr>
            </thead>
            <tbody>

                {filterProducts.map((product:IProduct) => (
                      <tr key={product.productId}>
                            <td>
                                <img src={product.imageUrl} title={product.productName} className="avatar" style={{width:75,margin:2, display:show?"block":"none"}}/>
                            </td>
                            <td><Link to = {`/products/${product.productId}`}>{product.productName}</Link></td>
                            <td>{product.productCode}</td>
                            <td>{product.productAvailable}</td>
                            <td>{product.price}</td>
                            {/* <td>{product.starRating}</td> */}

                            {/* State is been passed as props from parent to child , top to bottom */}
                            <td><Rating rating={product.starRating}/></td>
                      </tr>
                ))}
            </tbody>
            </table>
            </div>

            </div>
            </div>
         </>
    )
}

export default ProductsList;

