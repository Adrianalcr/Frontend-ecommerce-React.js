import React from 'react'
import styled from 'styled-components'
import Anuncio from '../components/Anuncio'
import Banner from '../components/Banner'
import Categorias from '../components/Categorias'
import Copyright from '../components/Copyright'
import InfoCliente from '../components/InfoCliente'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Produtos from '../components/Produtos'
import ProdutoSales from '../components/ProdutoSales'
import Rodape from '../components/Rodape'
import Slider from '../components/Slider'
import ScrollUp from '../components/ScrollUp'

const Titulo = styled.h1`
  font-size: 40px;
  padding: 20px;
  align-items: center;
  text-align:center;
`;

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Anuncio/>
        <Menu/>
        <Slider/>
        <Categorias/>
        <Titulo>Produtos Populares</Titulo><Produtos/>
        <Banner/>
        <Titulo>Produtos em Promoção</Titulo><ProdutoSales/>
        <InfoCliente/>
        <Newsletter/>
        <Rodape/>
        <Copyright/>
        <ScrollUp />
    </div>
  )
}

export default Home
