import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Product from '../components/product/Product';
import ProductList from '../components/product/ProductList';

export default function RouteComponent() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/cart" exact>
                        <Cart />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/registration" exact>
                        <Registration />
                    </Route>
                    <Route path="/product" exact>
                        <Product />
                    </Route>
                    <Route path="/product-list" exact>
                        <ProductList />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
