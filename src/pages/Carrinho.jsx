import styled from "styled-components"
import Anuncio from "../components/Anuncio"
import InfoCliente from "../components/InfoCliente"
import Navbar from "../components/Navbar"
import Rodape from "../components/Rodape"
import Newsletter from "../components/Newsletter"
import Copyright from "../components/Copyright"
import { FiMinus, FiPlus } from "react-icons/fi"
import ScrollUp from "../components/ScrollUp"
import Menu from "../components/Menu"
import { mobile } from "../responsivo"

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    height: 50vw;
    padding: 30px;
    
    ${mobile({ height: "100%" })}
`;

const Titulo = styled.h1`
    margin: 10px;
    padding: 20px;
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 300;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTextos = styled.div`

    ${mobile({ 
        margin: "0px 20px", 
        padding: "0px 20px", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        justifyContent: "space-between" 
    })}
`;

const TopTexto = styled.span`
    text-decoration; underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display:flex;
    justify-content: space-between;

    ${mobile({ flexDirection: "column" })}
`;

const Informacao = styled.div`
    flex: 3;
`;

const Produto = styled.div`
    display:flex;
    justify-content: space-between;   
`;


const DetalhesProduto = styled.div`
    flex: 2;
    display:flex;
`;

const Image = styled.img`
    width: 100px;
`;

const Detalhes = styled.div`
    padding: 20px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;  
`;

const ProdNome = styled.span`
    
`;

const ProdId = styled.span`
    
`;

const ProdColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
`;

const ProdTamanho = styled.span`
    
`;

const PrecoProduto = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
`;

const ProdPrecoContainer = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 20px;
`;

const QntProduto = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProdPreco = styled.div`
    font-size: 20px;
    font-weight: 300;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 20px;
`;

const Resumo = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const ResumoTitulo = styled.h1`
    font-weight: 300;
`;

const ResumoItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content: space-between; 
    font-weight: ${props=>props.type === "total" && "500"};  
    font-size: ${props=>props.type === "total" && "24px"};
`;

const ResumoTexto = styled.span`
    
`;

const ResumoTotal = styled.div`
    
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Carrinho = () => {
  return (
    <Container>
        <Navbar/>
        <Anuncio/>
        <Menu/>
        <Wrapper>
            <Titulo>SEU CARRINHO</Titulo>
            <Top>
                <TopButton>CONTINUE COMPRANDO</TopButton>
                    <TopTextos>
                        <TopTexto>Carrinho (4)</TopTexto>
                        <TopTexto>Favoritos (2)</TopTexto>
                    </TopTextos>
                <TopButton type="filled">CHECKOUT AGORA</TopButton>
            </Top>
            <Bottom>
                <Informacao>
                    <Produto>
                        <DetalhesProduto>
                            <Image src="https://static.vecteezy.com/ti/fotos-gratis/t1/2202607-mulher-asiatica-relaxa-no-verao-ferias-na-praia-grátis-foto.jpg"/>
                            <Detalhes>
                                <ProdNome><b>Produto:</b>Biquini praia</ProdNome>
                                <ProdId><b>SKU:</b>023356</ProdId>
                                <ProdColor color="pink"/>
                                <ProdTamanho><b>Tamanho:</b>M</ProdTamanho>
                            </Detalhes>
                        </DetalhesProduto>
                        <PrecoProduto>
                            <ProdPrecoContainer>
                                <FiPlus/>
                                    <QntProduto>2</QntProduto>
                                <FiMinus/>
                            </ProdPrecoContainer>
                            <ProdPreco>R$ 250,00</ProdPreco>
                        </PrecoProduto>
                    </Produto>
                    <Hr/>
                    <Produto>
                        <DetalhesProduto>
                            <Image src="https://static.vecteezy.com/ti/fotos-gratis/t1/2270087-flip-flops-amarelo-isolado-no-fundo-branco-grátis-foto.jpg"/>
                            <Detalhes>
                                <ProdNome><b>Produto:</b>Chinelo dedo praia</ProdNome>
                                <ProdId><b>SKU:</b>000456</ProdId>
                                <ProdColor color="yellow"/>
                                <ProdTamanho><b>Tamanho:</b>36/37</ProdTamanho>
                            </Detalhes>
                        </DetalhesProduto>
                        <PrecoProduto>
                            <ProdPrecoContainer>
                                <FiPlus/>
                                    <QntProduto>1</QntProduto>
                                <FiMinus/>
                            </ProdPrecoContainer>
                            <ProdPreco>R$ 50,00</ProdPreco>
                        </PrecoProduto>
                    </Produto>                    
                </Informacao>

                <Resumo>
                    <ResumoTitulo>RESUMO DO PEDIDO</ResumoTitulo>
                    <ResumoItem>
                        <ResumoTexto>Estimativa Carrinho:</ResumoTexto>
                        <ResumoTotal>R$ 300,00</ResumoTotal>
                    </ResumoItem>
                    <ResumoItem>
                        <ResumoTexto>Subtotal:</ResumoTexto>
                        <ResumoTotal>R$ 300,00</ResumoTotal>
                    </ResumoItem>
                    <ResumoItem>
                        <ResumoTexto>Descontos:</ResumoTexto>
                        <ResumoTotal>R$ -20,00</ResumoTotal>
                    </ResumoItem>
                    <ResumoItem type="total">
                        <ResumoTexto>Total:</ResumoTexto>
                        <ResumoTotal>R$ 280,00</ResumoTotal>
                    </ResumoItem>
                    <Button>CHECKOUT</Button>
                </Resumo>
            </Bottom>
        </Wrapper>

        <InfoCliente />
        <Newsletter/>
        <Rodape/>
        <Copyright/>
        <ScrollUp/>
    </Container>
  )
}

export default Carrinho