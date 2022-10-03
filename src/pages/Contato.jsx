import React from 'react'
import { useState } from 'react';
import styled from "styled-components"
import categorias2 from "../imagens/categorias2.jpg"
import { mobile } from '../responsivo';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from "react-router-dom";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
        ),
    url(${categorias2}) center no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 70%;
    padding: 20px;
    background-color: white;
    opacity: .9;  
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const Titulo = styled.h1`
    font-size: 44px;
    font-weight: 300; 
    text-align:center;
    padding: 10px;   

    ${mobile({
        fontSize: "24px",
        width: "100%",
        textAling: "center",
    })}
`;

const SubTitulo = styled.p`
    font-size: 20px;
    font-weight: 300; 
    text-align:center;
    padding: 5px; 
    
    ${mobile({
        fontSize: "14px",
        width: "100%",
        textAling: "center",
    })}
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    padding: 15px;
    cursor: pointer;

    ${mobile({
        fontSize: "24px",
        width: "100%",
        textAling: "center",
        cursor: "pointer"
    })}
`;


const Input = styled.input`
    flex:1;
    width: 900px;
    max-width: 100%;
    min-width: 40%;
    margin: 20px 10px 10px 10px;
    padding: 10px;  
    border: solid 1px teal;
    align-items: center;
    justify-content: center;
    font-size: 16px;

    ${mobile({
        padding: "8px",
        width: "90%",
        lignItems: "center",
    })}
`;

const TextArea = styled.textarea`
    flex:1;
    width: 900px;
    min-width: 40%;
    max-width: 100%;
    min-height: 15vh;
    margin: 20px 10px 10px 10px;
    padding: 10px;  
    border: solid 1px teal;
    align-items: center;
    font-size: 18px;

    ${mobile({
        padding: "8px",
        width: "90%",
        height: "60%",
        lignItems: "center",
    })}
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 250px;
    padding: 15px 20px;
    max-width: 40%;
    font-weight: 500;
    border : solid 2px teal;
    background-color: white;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: teal;
        color: white;
    }

    ${mobile({
        width: "100%",
        margin: "20px 100px"
    })}
`;


function Contato() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [mensage, setMensage] = useState('');
    //const [confPassword, setConfPassword] = useState('');

    // function to update state of name with 
    // value enter by user in form
    const handleChange = (e) => {
        setName(e.target.value);
    }
    // function to update state of age with value 
    // enter by user in form
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    // function to update state of email with value
    // enter by user in form
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    // function to update state of password with 
    // value enter by user in form
    const handleMensageChange = (e) => {
        setMensage(e.target.value);
    }
    // function to update state of confirm password 
    // with value enter by user in form
    //const handleConfPasswordChange = (e) => {
    //    setConfPassword(e.target.value);
    //}
    // below function will be called when user 
    // click on submit button .
    const handleSubmit = (e) => {
        if (mensage) {
            // if 'password' and 'confirm password'
            // does not match.
            alert("Mensagem enviada com sucesso!");
        }
        else {
            // display alert box with user 
            // 'name' and 'email' deatils .
            alert('Um formulário foi enviado com Nome :"' + name +
                '" , Age :"' + age + '" , Email :"' + email + '" and "'+ mensage +'" ');
        }
        e.preventDefault();

    }
    return (
        <Container>
            <Wrapper>
                <Form onSubmit={(e) => { handleSubmit(e) }}>
                    <Titulo> FALE CONOSCO </Titulo>
                    <SubTitulo> Fale com nossa central de atemento, para suas dúvidas </SubTitulo>
                    
                    <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
                        <Logo><FiShoppingBag />E-Commerce</Logo>
                    </Link>
                    
                    <Input type="text" placeholder='Nome:' value={name} required onChange={(e) => { handleChange(e) }} />

                    <Input type="text" placeholder='Apelido:' value={age} required onChange={(e) => { handleAgeChange(e) }} />
                    
                    <Input type="email" placeholder='E-mail:' value={email} required onChange={(e) => { handleEmailChange(e) }} />

                    <TextArea type="text" placeholder='Mensagem:' value={mensage} required onChange={(e) => { handleMensageChange(e) }} />
                    
                    <Button type="submit">ENVIAR</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}


export default Contato