import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { FiSearch, FiShoppingCart, FiLogIn, FiLock, FiShoppingBag } from "react-icons/fi";
import {mobile} from "../responsivo"

const Container = styled.div`
    height: 60px;
   ${mobile({ height:"50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding:"10px 0px", display: "flex", flexDirection: "column" })}

`;
const Left = styled.div`
    flex: 1;
    align-items; center;
`;

const Language =  styled.span`
    font-size: 14px;
    cursor: pointer;
    align-items: center;
    text-align: left;
    transition: all 0.5s ease;

    &:hover {
        color: #8bb582;
    }

    ${mobile({ display:"none" })}
`;

const Logo = styled.h1`
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;

    ${mobile({ display:"none" })}
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    width: 350px;
    display: flex;
    align-items: center;
    margin-left: 15px;
    padding: 5px;
    border-radius: 15px;
    transition: all 0.5s ease;

    &:hover {
        border: 0.5px solid #8bb582;
    }
    ${mobile({ width:"90%", marginLeft: "5px" })}
`;

const Input = styled.input`
    border: none;
    border-radius: 15px;
    width: 350px;
    ${mobile({ width:"90%" })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ display:"none" })}
`;

const MenuIcone = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    align-items: center;
    display: flex;
    transition: all 0.5s ease;

    &:hover {
        color: #8bb582 !important;
    }
    ${mobile({ display:"none" })}
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
                    <Logo><FiShoppingBag/>E-Commerce</Logo>
                </Link>
            </Left>
            <Center>
                <SearchContainer>
                    <Input placeholder=" Pesquise na loja..."/>
                    <FiSearch style={{color:"grey", fontSize:"16px"}}/>
                </SearchContainer>
            </Center>
            <Right>
                <Language>PT-BR</Language>
                <MenuIcone>
                    <Link to="/Cadastro" style={{ textDecoration: 'none', color: "black" }}><FiLock style={{marginRight:"5px"}}/>  REGISTRAR</Link>
                </MenuIcone>
                <MenuIcone>
                    <Link  to="/Login" style={{ textDecoration: 'none', color: "black" }}><FiLogIn style={{marginRight:"5px"}}/> LOGIN</Link>
                </MenuIcone>
                <MenuIcone>
                    <Badge badgeContent={4} color="primary">
                        <FiShoppingCart style={{fontSize:"18px"}}/>
                    </Badge>
                </MenuIcone>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar