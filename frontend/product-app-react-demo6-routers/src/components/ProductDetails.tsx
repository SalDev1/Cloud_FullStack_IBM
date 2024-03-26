import { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IProduct from "../model/product";
import httpClient from "../apiClient/httpClient";

export const ProductDetails:FC<any> = () => {
    const {id} = useParams<string>()

    const [product,setProduct] = useState<IProduct>({} as IProduct);

    const getProductById = useCallback(async() => {
        // Unnecessary rendering of components get minimized.
        const response = await httpClient.getById('http://localhost:4200/products',  Number(id))
        setProduct(response)
        // setFilteredProducts(response)
    },[])

    useEffect(() => {
        getProductById()
    } , [])

    return (
        <div className="card-body">
            <div className="row">
                <div className="col-md-3">ProductName</div>
                <div className="col-md-3">{product.productName}</div>
                <div className="col-md-3">{product.price}</div>
                {/* <div className="col-md-3">{product.imageUrl}</div> */}
                <div className="col-md-3">{product.productCode}</div>
                <div className="col-md-3">{product.starRating}</div>
            </div>
        </div>
    )
}