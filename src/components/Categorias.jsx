import styled from "styled-components";
import { categorias } from "../data";
import CategoriasItem from "./CategoriasItem";
import { mobile } from "../responsivo";

const Container = styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categorias = () => {
  return (
    <Container>
        {categorias.map(item=>(
            <CategoriasItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categorias