import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Carts from "../pages/cart/Carts";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Product from '../components/product/Product';
import ProductList from '../components/product/ProductList';
import Address from "../pages/order/Address";

export default function RouteComponent() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/cart" exact>
                        <Carts />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/registration" exact>
                        <Registration />
                    </Route>
                    <Route path="/product/:id" exact>
                        <Product />
                    </Route>
                    <Route path="/product-list/:category" exact>
                        <ProductList />
                    </Route>
                    <Route path="/address" exact>
                        <Address/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
