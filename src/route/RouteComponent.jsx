import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from '../pages/productList/ProductList';
import ProductCart from "../pages/ProductCart/ProductCart";
import Navber from "../components/navigation/Navber";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Footer from "../components/Footer/Footer";
import Imageslider from '../components/Imageslider/Imageslider';
import Search from '../pages/Search/Search';
import OrderPage from '../pages/OrderPage/OrderPage';
import Login from '../pages/Account/Login/Login';
import SignUp from '../pages/Account/SignUp/SignUp';
import ProtectedRoute from '../auth/ProtectedRoute';
import AddProduct from '../pages/AddPrduct/AddProduct';
export default function RouteComponent() {
    return (
        <>
            <Router>
                <Navber />
                <Switch>
                    <Route path="/" exact>
                        <ProductList />
                    </Route>
                    <Route path="/order" exact>
                        <OrderPage />
                    </Route>
                    <Route path="/search" exact>
                        <Search />
                    </Route>
                    <Route path="/add-product" exact>
                        <AddProduct />
                    </Route>
                    <Route path="/cart" exact>
                        <ProtectedRoute component={<ProductCart />} />
                    </Route>
                    <Route path="/product-details/:id" exact>
                        <ProductDetails />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/signup" exact>
                        <SignUp />
                    </Route>
                    <Route path="/footer" exact>
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
