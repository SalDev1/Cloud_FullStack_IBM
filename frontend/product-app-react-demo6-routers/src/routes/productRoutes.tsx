import { FC , ReactElement} from "react";
import App from "../App";
import { Route, Routes } from "react-router-dom";
import ProductsList from "../components/ProductList";
import { Home } from "../components/Home";
import { ProductDetails } from "../components/ProductDetails";

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