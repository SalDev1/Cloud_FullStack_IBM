import {FC,ReactElement ,createContext,useEffect,useState,useCallback} from "react";
import IProduct from "../model/product"
import httpClient from "../apiClient/httpClient";

interface Product_Context{
    products: IProduct[],
    url:string,
    filteredProducts : IProduct[],
    setFilteredProducts : Function,
}

interface Props {
    children: ReactElement
    url:string,
}

// Initalize the createcontext with initial details.

// createContext --> is a hook which creates a Provider to publish our data.
export const ProductContext = createContext<Product_Context>({
    products:[],
    url:'',
    filteredProducts:[],
    setFilteredProducts : ()=> {}
})

// Provider --> responsible for publishing the data.
/*
  ProductProvider is of type Functional Component , will taking Props 
  + we destruct the data for easier use and returning a React Element.
*/
export const ProductProvider:FC<Props> = ({children,url}):ReactElement => {
    const [products , setProducts] = useState<IProduct[]>([]);
    const [filteredProducts , setFilteredProducts] = useState<IProduct[]>([]);

    const getProducts = useCallback(async() => {
        // Unnecessary rendering of components get minimized.
        const response = await httpClient.get('http://localhost:4200/products')
        setProducts(response)
        setFilteredProducts(response)
    },[url])


    useEffect(() => {
        getProducts();
    },[url,products])

    // Object Literal Expressions 
    const context = {
        products,
        url,
        filteredProducts,
        setFilteredProducts,
    }

   return(
    // Rendering all the children whoever is going to subscribe to it.
    // value = {context} , publishing the data in the ProductContext.Provider 
    // and ProductList will subscribe to the provider and will fetch the data.
    // To subsricbe , we use the hook name useContext.
     <ProductContext.Provider value={context}>
        {children} 
     </ProductContext.Provider>
   )
} 