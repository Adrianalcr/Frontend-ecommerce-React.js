import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { mobile } from '../responsivo';
import { FiShoppingCart, FiLogIn, FiLock, FiShoppingBag } from 'react-icons/fi';
import { useState } from "react"
import Badge from '@mui/material/Badge';

const Container = styled.div`
    box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
    height: 60px;
    width: 100%;
    
   ${mobile({
    height: "80px",
    width: "100%"
})}
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 2px rgba(9, 9, 9, 0.23);
    height: 99%;
    width: 100%;


    ${mobile({
    height: "100%",
    width: "100%"
})}
`;

const Logo = styled.h1`
    font-weight: bold;
    display: none;
    align-items: center;
    cursor: pointer;

    ${mobile({
    fontSize: "24px",
    width: "100%",
    display: "flex",
    cursor: "pointer"
    })}
`;


const Nav = styled.div`
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    padding: 10px 0;
    background-color: #fff;
    color: black;
    display: block;

    ${mobile({
        position: "absolute",
        display: "block",
        width: "100%",
        padding: "0px"
    })}

`;

const Button = styled.button`
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #8bb582;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;
  
    &:hover {
        background-color: black;
        cursor: pointer;
    }

    ${mobile({ display: "block" })}
`;

const NavigationMenu = styled.div`
    margin-left: auto;
    display: block;


    ${mobile({ display: "none" })}
`;

const NavUl = styled.ul`
    margin-left: auto;
    justify-content: center;
    display: flex;
    padding: 0;
    

    ${mobile({
        display: "none",
        position: "absolute",
        top: "146px",
        left: "0",
        flexDirection: "column",
        width: "100%",
        height: "calc(100vh - 77px)",
        backgroundColor: "white",
        borderTop: "1px solid black",
    })}
`;

const NavLi = styled.li`
    list-style-type: none;
    margin: 0 1rem; 
    padding: 10px 20px;
    border-radius: 0px 15px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #8bb582;
        transform: scale(1.1);
    }

    ${mobile({
        textAlign: "center",
        margin: "0",
    })}   
`;

const NavLink = styled.a`
    text-decoration: none;
    display: block;
    width: 100%;
    color: black;
    text-align: center;
    align-items:center;
    justify-content: center;
    font-weight: 400;
    font-size: 20px;
    cursor: pointer;
    
    &:hover {
        color: white;
    }

    ${mobile({
        color: "black",
        width: "100%",
        padding: "1.5rem 0px",
    })}
`;


const Right = styled.div`
    display: none;
`;

const MenuIcone = styled.div`
    display: none;
`;

const Menu = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <Container>
            <Wrapper className="Wrapper">
                <Nav>
                    <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
                        <Logo><FiShoppingBag />E-Commerce</Logo>
                    </Link>
                    <MenuIcone>
                        <Badge badgeContent={4} color="primary">
                            <FiShoppingCart style={{ fontSize: "18px" }} />
                        </Badge>
                    </MenuIcone>
                    <Button onClick={() => { setIsNavExpanded(!isNavExpanded) }} >
                        {/* icon from heroicons.com */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                    <NavigationMenu>
                        <NavUl>
                            <NavLi><NavLink href="/" active>HOME</NavLink></NavLi>
                            <NavLi><NavLink href="/Loja">LOJA</NavLink></NavLi>
                            <NavLi><NavLink href="/Contato">CONTATO</NavLink></NavLi>
                        </NavUl>

                        <Right>
                            <MenuIcone>
                                <FiLock style={{ marginRight: "5px" }}/>
                                <Link to="/Cadastro" style={{ textDecoration: 'none', color: "black" }}>REGISTRAR</Link> 
                            </MenuIcone>
                            <MenuIcone>
                                <FiLogIn style={{ marginRight: "5px" }}/>
                                <Link to="/Login" style={{ textDecoration: 'none', color: "black" }}>LOGIN</Link> 
                            </MenuIcone>
                        </Right>
                    </NavigationMenu>
                </Nav>
            </Wrapper>
        </Container>
    )
}

export default Menu