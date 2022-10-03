import styled from 'styled-components'
import myImage from "../imagens/login.jpg"

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
    width: 25%;
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
    flex-direction: column;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;  
    border: solid 1px teal;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 100px 20px;
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

const Link = styled.a`
    display: flex;
    flex-direction: coolumn;
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color: grey;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Titulo>LOGIN</Titulo>
            <Form>
                <Input placeholder="Nome de Usuário" />
                <Input placeholder="Senha" />
            </Form>
            <Button>ENTRAR</Button>
            <Link>Não lembra da senha?</Link>
            <Link>Não tem cadastro?</Link>
        </Wrapper>
    </Container>
  )
}

export default Login