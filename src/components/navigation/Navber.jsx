import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { Container, Navbar, Nav, Form, Button, FormControl, NavDropdown } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import "./Navber.css";
import Search from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';
import { Cart, Refreash, removeallCart, Type } from '../../Redux/Actions/homeAction';
import { ActionType } from '../../Redux/ActionType';

export default function Navber() {

    const dispatch = useDispatch();
    const history = useHistory();

    const { carts } = useSelector(state => state.CartStore);
    const { ref } = useSelector(state => state.RefreshStore);
    const { types } = useSelector(state => state.TypeStore);

    useEffect(() => {
        dispatch(Type());
    }, [carts, ref])



    const cart = () => {
        history.push("/cart");
    }
    const search = () => {
        history.push("/search");
    }

    const push = (link) => {
        if (link == "home") {
            history.push("/");
        }
        else if (link == "login") {
            history.push("/login");

        }
        else if (link == "signup") {
            history.push("/signup")
        }
        else if (link == "logout") {
            localStorage.setItem("token", "");
            localStorage.setItem("fname", "");
            localStorage.setItem("lname", "");
            dispatch(removeallCart())
            dispatch(Refreash());
        }

    }

    const getProbyType = (id) => {
        history.push("/get-by-category/" + id)
        dispatch(Refreash());
    }

    return (
        <>
            <Navbar className="d-flex align-items-center shadow" bg="light" expand="lg" sticky="top">
                <Container className=" bg-light">
                    <Link to="/" style={{ textDecoration: "none" }} className="brand">E-SHOP</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className=" ml-4">
                        <div class="form">
                            <input placeholder="Search" />
                            <button onClick={() => search()} ><Search className="Search" /></button>
                        </div>
                    </Nav>
                    <Nav className="ml-4 bg-light">
                        <div onClick={() => cart()}>
                            <Badge badgeContent={carts.length} color="primary">
                                <ShoppingCart />
                            </Badge>

                        </div>
                    </Nav>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto bg-light">

                        </Nav>
                        <Nav className="mr-3 nav-btn">
                            <div>
                                <button onClick={() => push("home")} className="btn_">
                                    HOME
                                </button>
                            </div>
                        </Nav>
                        <Nav className="mr-3 nav-btn">
                            <NavDropdown title={"CATEGORIES"}>
                                {
                                    types.map((data, index) =>
                                        <NavDropdown.Item key={index} onClick={() => getProbyType(data.id)} >
                                            {data.type}
                                        </NavDropdown.Item>
                                    )
                                }
                            </NavDropdown >
                        </Nav>
                        {
                            localStorage.getItem("token") ?
                                <NavDropdown title={localStorage.getItem("fname") + " " + localStorage.getItem("lname")}>
                                    <NavDropdown.Item>
                                        <Link className="text-uppercase" style={{ textDecoration: "none", color: "black" }} to="/profile" >PROFILE</Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item>
                                        <Link className="text-uppercase" style={{ textDecoration: "none", color: "black" }} onClick={() => push("logout")} to="">LOGOUT</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                :
                                <>
                                    <Nav className="mr-2 nav-btn">
                                        <div>
                                            <button onClick={() => push("login")} className="btn-SIGNIN">
                                                SIGNIN
                                            </button>
                                        </div>
                                    </Nav>
                                    <Nav className="mr-2 nav-btn">
                                        <div>
                                            <button onClick={() => push("signup")} className="btn-SIGNUP">
                                                SIGNUP
                                            </button>
                                        </div>
                                    </Nav>
                                </>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>


    )
}

