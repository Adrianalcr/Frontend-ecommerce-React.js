import styled from "styled-components"
import Menu from "../components/Menu"
import Navbar from "../components/Navbar"
import Anuncio from "../components/Anuncio"
import Newsletter from "../components/Newsletter"
import Rodape from "../components/Rodape"
import Copyright from "../components/Copyright"
import { SiWhatsapp } from "react-icons/si"
import { 
    FiPlus, 
    FiMinus, 
    FiFacebook, 
    FiInstagram, 
    FiLinkedin, 
    FiTwitter, 
    FiLink, 
    FiSearch} 
from "react-icons/fi"
import { Rating } from "@mui/material"
import ScrollUp from "../components/ScrollUp"
import InfoCliente from "../components/InfoCliente"
import foto2  from "../imagens/foto2.jpg"


const Container = styled.div`

`;
const TituloPagina = styled.h1`
    background-color: #8bb582;
    color: white;
    text-align: center;
    padding: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Search =  styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    position: absolute;
    top: 240px;
    left: 580px;
    transition: all 0.5s ease;
    z-index: 1;

    &:hover {
        color: #8bb582;
    }
`;

const Imagem = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const ZoomImg = styled.div`
    overflow: hidden;
    width: 500px;
    max-width: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;

    &:hover{
        -moz-transform: scale(1.1);
	    -webkit-transform: scale(1.1);
	    transform: scale(1.1);
    }
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`;

const Titulo = styled.h1`
    font-weight: 300;
`;
const Avaliacao = styled.div`
    display: flex;
    align-items: center;
    color: #8bb582;
`;

const Descricao = styled.p`
    margin: 20px 0px;
    color: grey;
    font-size: 18px;
    font-weight: 300;
`;

const Preco = styled.span`
    font-size: 40px;
    font-weight: 500;
    color: #8bb582;
`;

const FiltroContainer = styled.div`
    width: 60%;
    margin: 40px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filtro = styled.div`
    display: flex;
    align-items: center;
`;

const FiltroTitulo = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FiltroCor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 3px;
    padding: 3px;
    cursor: pointer;
`;

const FiltroTamanho = styled.select`
    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #8bb582;
`;

const FiltroTamOpcao = styled.option`

`;

const AddContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const QntConteiner = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
`;

const Qnt = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #8bb582;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    font-weight: 400;
    border: 2px solid #8bb582;
    background-color: white;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: #8bb582;
        font-weight: 500;
        color: white;
    }
`;

const Hr = styled.div`
    color: grey;
    border-width:0;
    border: 1px solid #8bb582;
    width: 100%;
    text-align:left;
    margin-left: 0px;
    margin-top: 30px;
`;

const Compartilhar = styled.div`
    display: flex;
    margin: 0px 5px;
    padding: 5px;
    align-items: center;
    width: 100%;
`;

const IconeContainer = styled.div`
    display: flex;
`;

const Icone = styled.div`
    font-size: 18px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #ffffff;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: #8bb582;
        color: white;
    }
`;

const SkuContainer = styled.div`
    display:flex;
    align-items: center;
    color: grey;
`;

const Sku = styled.h4`
    margin: 0px 5px;
    padding: 15px;
    color: #8bb582;
`;

const InfoProduto = () => {
    return (
        <Container>
            <Navbar />
            <Anuncio />
            <Menu/>
            <TituloPagina>Informações do Produto</TituloPagina>
            <Wrapper>
                <ImgContainer>
                    <Search><FiSearch/></Search>
                    <ZoomImg>
                      <Imagem src={foto2} />
                    </ZoomImg>
                </ImgContainer>
                <InfoContainer>
                    <Titulo>Ração Pedegree 1kg</Titulo>
                    <Avaliacao><Rating/>(5) Avaliações</Avaliacao>
                    <Descricao>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deserunt quidem soluta dolore quod, facilis odio quo repudiandae eaque deleniti veritatis? Odio tempore, dolorum veritatis aliquid suscipit ipsum hic dignissimos.</Descricao>
                    <Preco>R$ 30,00</Preco>
                    <FiltroContainer>
                        <Filtro>
                            <FiltroTitulo>Cor:</FiltroTitulo>
                            <FiltroCor color="pink" />
                            <FiltroCor color="black" />
                            <FiltroCor color="Darkblue" />
                            <FiltroCor color="#8bb582" />
                        </Filtro>

                        <Filtro>
                            <FiltroTitulo>Tamanho:</FiltroTitulo>
                            <FiltroTamanho>
                                <FiltroTamOpcao>P</FiltroTamOpcao>
                                <FiltroTamOpcao>M</FiltroTamOpcao>
                                <FiltroTamOpcao>G</FiltroTamOpcao>
                                <FiltroTamOpcao>GG</FiltroTamOpcao>
                                <FiltroTamOpcao>XG</FiltroTamOpcao>
                            </FiltroTamanho>
                        </Filtro>
                    </FiltroContainer>

                    <AddContainer>
                        <QntConteiner>
                            <FiMinus cursor={"pointer"}/>
                            <Qnt>1</Qnt>
                            <FiPlus cursor={"pointer"}/>
                        </QntConteiner>
                        <Button>ADD NO CARRINHO</Button>                        
                    </AddContainer>
                    <SkuContainer>
                        <Sku>SKU:</Sku>
                        000245556
                    </SkuContainer>
                    
                    <Hr />

                    <Compartilhar>
                        <Descricao>Compartilhe:</Descricao>
                        <IconeContainer>
                            <Icone>
                                <FiFacebook color="2268f5"/>
                            </Icone>
                            <Icone>
                                <FiInstagram color="a80c36"/>
                            </Icone>
                            <Icone>
                                <FiLinkedin color="0747a8"/>
                            </Icone>
                            <Icone>
                                <FiTwitter color="1871f5"/>
                            </Icone>                            
                            <Icone>
                                <SiWhatsapp color="347539"/>
                            </Icone>
                            <Icone>
                                <FiLink color="0e2ced"/>
                            </Icone>                      
                        </IconeContainer>
                    </Compartilhar>
                </InfoContainer>
            </Wrapper>
            <InfoCliente/>
            <Newsletter />
            <Rodape />
            <Copyright />
            <ScrollUp/>
        </Container>
    )
}

export default InfoProduto
