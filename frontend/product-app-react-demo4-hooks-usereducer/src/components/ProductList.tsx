import { useState , useReducer, useEffect} from "react"
import data from "../data/products"
import IProduct from "../model/product"
import Rating from "./Rating"


// Defining a certain type of Action.
// ? --> means optional.
type Action = {
    type: string,
    payload?: any 
}

// Defining a certain type of ActionType.
type ActionTypes = {
    ADD: 'ADD',
    DELETE: 'DELETE'
}

// Initalizing the actionTypes. 
const actionTypes : ActionTypes = {
    ADD:'ADD',
    DELETE:'DELETE'
}

const ProductsList = () => {
    // useReducer Example.
    const reducer = (state:IProduct[],action: Action) => {
        switch(action.type) {
            case actionTypes.ADD:
                // We use the spread operator to add in the new product and return the newly
                // updated array.
                return [...state,action.payload]
            case actionTypes.DELETE:
                // Filter also returns the array.
                return state.filter(p => p.productId !== action.payload)
            default:
                return state
        }
    }
    // We are returning a React-TSX function component == JSX
    // setProducts --> dispatch function.

    // Generic Type Data passing to make sure no other type of data set passed in.
    // const [products , setProducts] = useState<IProduct[]>(data);
    const [products,dispatch] = useReducer(reducer,data)
    const [filterProducts , setFilteredProducts] = useState<IProduct[]>(products);
    const [show, setShow] = useState(true);
    const title = "Products App"
    const [searchKey , setSearchKey] = useState('')

    const showorHideImage = () => {
        setShow(!show);
    }

    // const searchByName = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setFilteredProducts(
    //         products.filter(p=> 
    //             p.productName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())))
    // }

    useEffect(() => {
        setFilteredProducts(
            products.filter(p=> 
                p.productName.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())))
    } , [searchKey,products])

    return (
         <>
          <div className='card'>
            <div className='card-header'>
            {title}

            <br />
            <button onClick={() => dispatch({type: actionTypes.ADD , payload:{
                "productName": "vivo19",
                "price": 12500.5,
                "starRating": "2.5",
                "productId": 11,
                "productCode": "vivo",
                "productAvailable": "30-Apr-2024",
                "imageUrl": "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg"
            }})}>Add new Product </button>
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
            <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {filterProducts.map((product:IProduct) => (
                      <tr>
                            <td>
                                <img src={product.imageUrl} title={product.productName} className="avatar" style={{width:75,margin:2, display:show?"block":"none"}}/>
                            </td>
                            <td><a>{product.productName}</a></td>
                            <td>{product.productCode}</td>
                            <td>{product.productAvailable}</td>
                            <td>{product.price}</td>
                            {/* <td>{product.starRating}</td> */}

                            {/* State is been passed as props from parent to child , top to bottom */}
                            <td><Rating rating={product.starRating}/></td>
                            <td>
                                <button className="btn-danger" 
                                    onClick={() => dispatch({type:actionTypes.DELETE , payload:product.productId})}>
                                        Delete {product.productName}
                                </button>
                            </td>
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


