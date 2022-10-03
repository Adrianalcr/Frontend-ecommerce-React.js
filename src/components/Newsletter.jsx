import { FiSend } from "react-icons/fi";
import styled from "styled-components";
import { mobile } from "../responsivo";

const Container = styled.div`
    height: 60vh;
    background-color: #8bb582;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Titulo = styled.h1`
    font-size: 70px;
    margin: 20px;
    ${mobile({ fontSize:"50px", textAlign:"center" })}
`;

const Descricao = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ fontSize:"18px", textAlign:"center" })}

`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: solid 1px lightgrey;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: #8bb582;
    }
`;

const Icon = styled.div`
    font-size: 20px;
`;

const Newsletter = () => {
  return (
    <Container>
        <Titulo>Newsletter</Titulo>
        <Descricao>Receba atualizações de seus produtos favoritos..</Descricao>
        <InputContainer>
            <Input placeholder="Seu e-mail..." required/>
            <Button>
                <Icon><FiSend style={{margin:"10px"}}/></Icon>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter