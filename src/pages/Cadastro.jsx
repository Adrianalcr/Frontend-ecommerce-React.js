import styled from "styled-components"
import myImage from "../imagens/registrar.jpg"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
        ),
    url(${myImage}) center no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;    
`;

const Titulo = styled.h1`
    font-size: 24px;
    font-weight: 300; 
    text-align:center;   
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;  
    border: solid 1px teal;
`;

const Termos = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
    padding: 15px 20px;
    width: 40%;
    font-weight: 500;
    border : solid 2px teal;
    background-color: white;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        background-color: teal;
        color: white;
    }
`;

const Cadastro = () => {
  return (
    <Container>
        <Wrapper>
            <Titulo>CRIE SUA CONTA</Titulo>
            <Form>
                <Input placeholder="Nome" />
                <Input placeholder="Sobrenome" />
                <Input placeholder="Nome de Usuário" />
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <Input placeholder="Confirme a Senha" />
            </Form>
            <Termos>
                Aceite os termos de privacidade, <b>Termo de Privacidade.</b>
            </Termos>
            <Button>CRIAR CONTA</Button>
        </Wrapper>
    </Container>
  )
}

export default Cadastro