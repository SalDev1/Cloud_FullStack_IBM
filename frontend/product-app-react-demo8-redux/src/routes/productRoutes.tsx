import { FC , ReactElement, useState} from "react";
import App from "../App";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductsList from "../components/ProductList";
import { Home } from "../components/Home";
import { ProductDetails } from "../components/ProductDetails";
import { ProductEdit } from "../components/ProductEdit";
import { NewProductData } from "../components/types";
import httpClient from "../apiClient/httpClient";
// import ProductEdit from "../components/productEdit";

// import IProduct from "../model/product";
export const AppRoutes:FC<any> = (): ReactElement => {
    const navigate = useNavigate();

    async function handleUpdate(newProductData: NewProductData) {
        await httpClient.put('http://localhost:4200/products', newProductData)
        navigate('/products')
    }

    return (
            <App>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductsList />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/products/:id/edit" element={<ProductEdit onSave={handleUpdate}/>} />
                </Routes>
            </App>
    )
}