import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import categorias2 from '../imagens/categorias2.jpg'

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const Wrapper = styled.div`
    background: linear-gradient(
      rgba(255,255,255,0.5), 
      rgba(201,14,80,0.5)
    ), url(${categorias2}) 
    center no-repeat;
    background-size: 100% 100%;
    align-items: center;
    justify-content: center;
    padding: 15em 0px;
`;

const Erro404 = styled.h1`
    text-align: center;
    font-size: 100px;
    color: black;
`;

const DescError = styled.h2`
    text-align: center;
    font-size: 50px;
    color: #c90e50;
`;

const LinkA = styled.li`
    list-style-type: none;
    padding: 10px 20px;
    text-align: center;
    font-size: 20px;
`;

const Error404 = () => {
  return (
    <Container>
      <Wrapper>
        <Erro404>
          Error 404
        </Erro404>
        <DescError>
          Page Not Found!
        </DescError>
        <LinkA>
          Back to <Link to="/">Home Page</Link>.
        </LinkA>
      </Wrapper>
    </Container>
  )
}

export default Error404