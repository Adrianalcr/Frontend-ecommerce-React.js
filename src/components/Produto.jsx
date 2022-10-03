import styled from "styled-components";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";
import { Rating } from "@mui/material";
import { mobile } from "../responsivo"


const BotaoAcao = styled.div`
    opacity: 0;
    height: 70%;
    width: 80%;
    padding: 30px;
    margin-top: -195px;
    margin-left: 0px;
    display: flex;
    aligm-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
    z-index: 3;


    &:hover {
        background-color: rgba(4, 138, 104,0.5);
        transform: scale(1.0);
    }

    ${mobile({ width: "80%", height: "70%" })}
`;

const Container = styled.div`
    flex: 1;
    margin-top: 35px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 45px;
    width: 100%;
    min-width: 280px;
    height: 450px;
    padding: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &:hover ${BotaoAcao}{
        opacity: 1;
    }

    ${mobile({ width: "100%", height: "460px" })}
`;

const Imagem = styled.img`
    height: 450px;
    width: 100%;
    align-items: center;
    z-index: 1;
    overflow: hidden;
    ${mobile({ width: "80%", height: "69%" })}
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-top: 150px;
    transition: all 0.5s ease;

    &:hover {
        background-color: black;
        color: white;
        transform: scale(1.1);
    }
`;

const Detalhes = styled.div`
    height: 100%;
    width: 80%;
    padding: 30px;
    margin: 20px;
    border-radius: none;
    border: solid 1px #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: absolute;
`;

const Titulo = styled.h2`
    font-size: 20px;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Estrelas = styled.div`
    display: flex;
    aligm-items: center;
    justify-content: center;
    background-color: white;
`;

const Avaliacao = styled.p`
    font-size: 16px;
    font-weight: 400;
    align-items: center;
    justify-content: center;
    color: teal;
    z-index: 4;
`;

const Preco = styled.h2`
    font-size: 20px;
    margin: 10px;
    font-weight: 400;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Buttom = styled.button`
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    width: 250px;
    max-width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
    z-index: 5;

    &:hover {
        background-color: #8bb582;
        transform: scale(1.0);
    }
`;



const Produto = ({ item }) => {

    return (
        <Container>
            <Detalhes>
                <Imagem src={item.img}/>
                <Titulo>{item.title}</Titulo>

                <Estrelas>
                    <Rating /> 
                    <Avaliacao> ({item.rating}) Avaliações</Avaliacao>
                </Estrelas>
                <Preco>{item.preco}</Preco>
                <Buttom><FiShoppingCart/> COMPRAR</Buttom>
            </Detalhes>


            <BotaoAcao>
                <Icon>
                    <FiShoppingCart />
                </Icon>
                <Icon>
                    <FiHeart />
                </Icon>
                <Icon>
                    <FiSearch/>
                </Icon>
            </BotaoAcao>

        </Container >
    )
}

export default Produto