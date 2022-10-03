import styled from 'styled-components'
import { mobile } from "../responsivo"
import payment from "../imagens/payment.png"

import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiPlus,
    FiShoppingBag,
    FiMapPin,
    FiCoffee,
    FiPhoneCall,
    FiMail,
    FiCheck
} from "react-icons/fi";

const Container = styled.div`
    display: flex;
    backgroud-color: #8bb582;
    ${mobile({ display:"flex", flexDirection:"column" })}

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    font-size: 40px;
    display: flex;
    align-items: center;
`;

const Descricao = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: #000;
    }

`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    padding: 10px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        transition: all 0.5s ease;
        color: teal;
    }
    ${mobile({ width:"100%" })}

`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContatoItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Pagamentos = styled.img`
    width: 50%;
`;


const Rodape = () => {
    return (
        <Container>
            <Left>
                <Logo><FiShoppingBag />E-commerce</Logo>
                <Descricao>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tenetur est distinctio laudantium expedita commodi odit explicabo nulla quod, nostrum esse. Quisquam exercitationem corporis dolorem tenetur! Sapiente iste perferendis cupiditate.
                </Descricao>
                <SocialContainer>
                    <SocialIcon color="203196">
                        <FiFacebook />
                    </SocialIcon>
                    <SocialIcon color="33161a">
                        <FiInstagram />
                    </SocialIcon>
                    <SocialIcon color="0c50a8">
                        <FiLinkedin />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title><FiPlus style={{marginRight:"10px"}}/> Informações</Title>
                <List>
                    <ListItem><FiCheck /> Carrinho</ListItem>
                    <ListItem><FiCheck /> Termos de Uso</ListItem>
                    <ListItem><FiCheck /> Minha Conta</ListItem>
                    <ListItem><FiCheck /> Política de Compra</ListItem>
                    <ListItem><FiCheck /> Favoritos</ListItem>
                    <ListItem><FiCheck /> Política de Privacidade</ListItem>
                    <ListItem><FiCheck /> Como Comprar?</ListItem>
                    <ListItem><FiCheck /> Política de Devolução</ListItem>
                    <ListItem><FiCheck /> Informações Adicionais</ListItem>                 
                    <ListItem><FiCheck /> Política de Troca</ListItem>                
                </List>
            </Center>

            <Right>
                <Title><FiCoffee style={{marginRight:"10px"}}/> Contato</Title>
                <ContatoItem>
                    <FiMapPin style={{marginRight:"10px"}}/> Avenida não Existe, N1, São Luis-MA.
                </ContatoItem>
                <ContatoItem>
                    <FiPhoneCall style={{marginRight:"10px"}}/> Contato: +55 99 99999-9999
                </ContatoItem>
                <ContatoItem>
                    <FiMail style={{marginRight:"10px"}}/> E-mail: contato@ecommerce.com
                </ContatoItem >
                <Pagamentos src={payment}/>
            </Right>

            
        </Container>

    )
}

export default Rodape