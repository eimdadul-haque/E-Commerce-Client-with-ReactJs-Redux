import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { Container, Navbar, Nav, Form, Button, FormControl, NavDropdown } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import { BlogAction } from "../../Redux/Actions/BlogAction";
import AccountBox from "@material-ui/icons/AccountBox";
import { Refesh } from '../../Redux/Actions/RefeshAction';
import style from "./Navber.module.css";
export default function Navber() {

    const { num } = useSelector(state => state.RefreshStore)
    const [Search, setSearch] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
    }, [num])

    const logout = () => {
        localStorage.clear()
        dispatch(Refesh(1, "logout"));
    }

    const search = (searchQury) => {
        if (searchQury) {
            dispatch(BlogAction(searchQury));
            history.push("/search")
            document.getElementById("search").value = "";
        }
    }

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Link to="/" style={{ color: "#FFC75F", fontWeight: "bolder", fontSize: "25px", textDecoration: "none" }}>BLOGSITE</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form className="d-flex mr-5">
                        <FormControl
                            id="search"
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button size="sm" onClick={() => search(Search)} variant="outline-info">Search</Button>
                    </Form>

                    <Nav className="mr-3 " >
                        <Nav.Link>
                            <Link className={style.navLink} style={{ textDecoration: "none" }} to="/">BLOGES</Link>
                        </Nav.Link>
                        {
                            localStorage.getItem('token') === null ? <></> :
                                <Nav.Link>
                                    <Link style={{ textDecoration: "none" }} className={style.navLink} to="/deshboard">DESHBOARD</Link>
                                </Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        {
                            localStorage.getItem('token') === null ?
                                <>
                                    <Nav.Link >
                                        <Link style={{ textDecoration: "none" }} to="/login"><span className=" font-weight-bold">SIGNIN</span></Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link style={{ textDecoration: "none" }} to="/signup"><span className=" font-weight-bold">SIGNUP</span></Link>
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link>
                                        <Link to="/profile">
                                            <AccountBox />
                                        </Link>
                                    </Nav.Link>
                                    <NavDropdown title={localStorage.getItem("FN")} id="basic-nav-dropdown">
                                        <NavDropdown.Item> <Link className="text-uppercase" style={{ textDecoration: "none", color: "black" }} to="/profile" >PROFILE</Link></NavDropdown.Item>
                                        <NavDropdown.Item> <Link className="text-uppercase" style={{ textDecoration: "none", color: "black" }} onClick={() => logout()} to="" >LOGOUT</Link></NavDropdown.Item>
                                    </NavDropdown>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
