import { FC , ReactElement, useState} from "react";
import App from "../App";
import { Route, Routes } from "react-router-dom";
import ProductsList from "../components/ProductList";
import { Home } from "../components/Home";
import { ProductDetails } from "../components/ProductDetails";
// import IProduct from "../model/product";

export const AppRoutes:FC<any> = (): ReactElement => {
    return (
            <App>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductsList />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/products/:id/edit" element={<ProductsList />} />
                </Routes>
            </App>
    )
}