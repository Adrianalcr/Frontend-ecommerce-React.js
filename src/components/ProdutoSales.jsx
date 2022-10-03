import React from 'react'
import { produtoSales } from "../data"
import Produto from "./Produto";
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;

`;


const ProdutoSales = () => {
    return (
        <Container>
            {produtoSales.map(item => (
                <Produto item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default ProdutoSales