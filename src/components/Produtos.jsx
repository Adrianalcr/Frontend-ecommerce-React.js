import styled from "styled-components";
import { produtosPopulares } from "../data"
import Produto from "./Produto";

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;

`;

const Produtos = () => {
    return (
        <Container>
            {produtosPopulares.map(item => (
                <Produto item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Produtos