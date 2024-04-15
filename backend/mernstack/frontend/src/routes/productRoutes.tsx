import { FC , ReactElement, useState} from "react";
import App from "../App";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductsList from "../components/ProductList";
import { Home } from "../components/home";
import { ProductDetails } from "../components/ProductDetails";
import { ProductEdit } from "../components/ProductEdit";
import { NewProductData } from "../components/types";
import httpClient from "../apiClient/httpClient";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../components/Login";
// import ProductEdit from "../components/productEdit";

// import IProduct from "../model/product";
export const AppRoutes:FC<any> = (): ReactElement => {
    const navigate = useNavigate();

    async function handleUpdate(newProductData: NewProductData) {
        await httpClient.put('http://localhost:9999/api/products', newProductData)
        navigate('/products')
    }

    return (
            <App>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={<ProductsList />} />
                    <Route path="/products/:id" element={<ProductDetails />} />

                    {/* Guarding the routes and giving access to the authorized routes */}

                    <Route path="/products/:id/edit" element={
                        <PrivateRoute>
                            <ProductEdit />
                        </PrivateRoute>
                    } />
                </Routes>
            </App>
    )
}