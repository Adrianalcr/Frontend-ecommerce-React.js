import React from 'react'
import styled from 'styled-components'
import { FiTruck, FiCreditCard, FiGift, FiPhoneCall } from 'react-icons/fi'
import { mobile } from '../responsivo'

const Container = styled.div`
    width: 100%;
    height: 20vh;

    ${mobile({
        height: "100%",
        width: "100%"
    })}
`;

const InfoRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    widht: 100%;
    height: 100%;

    ${mobile({
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%"
    })}
`;

const ColLg3 = styled.div`
    background-color: #8bb582;
    widht: 100%;
    height: 10vh;
    align-items: center;
    padding: 20px 40px;
    margin:  10px;
    border: solid 1px white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .3);

    ${mobile({
        height: "100%",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        padding: "10px 10px"
    })}
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 10px;
`;

const Titulo = styled.h1`
    color: black;
    text-align: center;
    align-items: center;
    ${mobile({
        fontSize: "25px",
    })}
`;

const Descricao = styled.p`
    color: black;
    text-align: center;
    font-weight: 400;
`;


const InfoCliente = () => {
  return (
    <Container data-aos="fade-up">
        <InfoRow>
            <ColLg3>
                <Info>
                    <FiTruck style={{ margin: "5px", fontSize: "25px" }}/> 
                    <Titulo>Frete Gratís</Titulo>
                </Info>
                <Descricao>Compras Acima de R$ 200,00.</Descricao>
            </ColLg3>
            <ColLg3>
                <Info>
                    <FiCreditCard style={{ margin: "5px", fontSize: "25px" }}/> 
                    <Titulo>Pagamentos</Titulo>
                </Info>
                <Descricao>Parcelamento até 12x S/juros.</Descricao>
            </ColLg3>
            <ColLg3>
                <Info>
                    <FiGift style={{ margin: "5px", fontSize: "25px" }}/> 
                    <Titulo>Descontos</Titulo>
                </Info>
                <Descricao>No carrinho digite DESC10%.</Descricao>
            </ColLg3>
            <ColLg3>
                <Info>
                    <FiPhoneCall style={{ margin: "5px", fontSize: "25px" }}/> 
                    <Titulo>Atendimento</Titulo>
                </Info>
                <Descricao>Atendimento em horário comercial.</Descricao>
            </ColLg3>
        </InfoRow>
    </Container>
  )
}

export default InfoCliente