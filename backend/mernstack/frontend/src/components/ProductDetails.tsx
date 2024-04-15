import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams , } from "react-router-dom";
import IProduct from "../model/product";
import httpClient from "../apiClient/httpClient";

export const ProductDetails:FC<any> = () => {
    const {id} = useParams<string>()
    const navigate = useNavigate();

    const [product,setProduct] = useState<IProduct>({} as IProduct);
    
    const getProductById = useCallback(async() => {
        // Unnecessary rendering of components get minimized.
        const response = await httpClient.getById('http://localhost:9999/api/products',Number(id))
        setProduct(response)
        // setFilteredProducts(response)
    },[])

    console.log(product)

    useEffect(() => {
        getProductById()
    } , [])
 
    const backHandler = () => {
        navigate("/products");
    }

    const editHandler = () => {
        navigate(`/products/${product.productId}/edit`)
    }

    return(
        <div className="card-body">
            <div className="row">
                <div className="col-md-3">ProductName</div>
                <div className="col-md-6">{product.productName}</div>
            </div>
            <div className="row">
                <div className="col-md-3">Price</div>
                <div className="col-md-6">{product.price}</div>
            </div>
            <div className="row">
                <div className="col-md-3">productAvailable</div>
                <div className="col-md-6">{product.productAvailable}</div>
                <div className="row">

                    <div className="col-2">
                        <button className="btn btn-info btn-block" onClick={backHandler}>Back</button>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-info btn-block" onClick={editHandler}>{`Edit ${product.productName}`}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}