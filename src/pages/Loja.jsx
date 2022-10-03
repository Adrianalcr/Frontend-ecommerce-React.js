import styled from "styled-components"
import Navbar from "../components/Navbar"
import Anuncio from "../components/Anuncio"
import Produtos from "../components/Produtos"
import Newsletter from "../components/Newsletter"
import Rodape from "../components/Rodape"
import Copyright from "../components/Copyright"
import Menu from "../components/Menu"
import ScrollUp from "../components/ScrollUp"
import InfoCliente from "../components/InfoCliente"


const Container = styled.div`
    background: white;
`;

const Titulo = styled.h1`
    text-align: center;
    background-color: #8bb582;
    color: white;
    margin: 0px;
    padding: 20px;
`;

const FiltroContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filtro = styled.div`
    margin: 20px;
`;

const FiltroTexto = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`
   
`;


const Loja = () => {
  return (
    <Container>
        <Navbar/>
        <Anuncio/>
        <Menu/>
        <Titulo>LOJA</Titulo>
            <FiltroContainer>
            <Filtro>
                <FiltroTexto>Filtrar Produtos:</FiltroTexto>
                <Select>
                    <Option disable selected>Moda Praia</Option>
                    <Option>Biquínis</Option>
                    <Option>Maiôs/Bodys</Option>
                    <Option>Conjuntos</Option>
                    <Option>Saídas de Praia</Option>
                    <Option>Combine</Option>
                </Select>
                <Select>
                    <Option disable selected>Acessórios</Option>
                    <Option>Sandálias</Option>
                    <Option>Chapéus</Option>
                    <Option>Sacolas</Option>
                    <Option>Bijú</Option>
                    <Option>Óculos de Sol</Option>
                </Select>
            </Filtro>
            <Filtro>
                <FiltroTexto>Ordenar:</FiltroTexto>
                <Select>
                    <Option selected> Por Preço:</Option>
                    <Option>Preço (asc)</Option>
                    <Option>Preço (desc)</Option>
                </Select>
            </Filtro>
            
        </FiltroContainer>
        <Produtos />
        <InfoCliente />
        <Newsletter/>
        <Rodape/>
        <Copyright/>
        <ScrollUp />
    </Container>
  )
}

export default Loja