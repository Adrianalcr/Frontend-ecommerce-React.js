import styled from "styled-components";


const Container = styled.div`
    position: relative;
    flex:1;
    margin: 3px;
    height: 35vh;
`;

const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
    border: solid 0px 1px #333;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .3);
`;

const Informacao = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    &:hover {
        background-color: rgba(4, 138, 104,0.5);
        transform: scale(1.0);
    }
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
   
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #8bb582;
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.5s ease;

    &:hover {
        background-color: black;
        color: white;
    }
`;


const CategoriasItem = ({ item }) => {
    return (
        <Container>
            <Imagem src={item.img} />
            <Informacao>
                <Title>{item.title}</Title>
                <Button>COMPRAR AGORA</Button>
            </Informacao>
        </Container>
    )
}

export default CategoriasItem