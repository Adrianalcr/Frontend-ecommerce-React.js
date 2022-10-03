import styled from "styled-components"
import { AiOutlineCopyright } from "react-icons/ai"
import { FiGithub } from "react-icons/fi"
import { mobile } from "../responsivo"


const Container = styled.div`
  display: flex;
  background-color: #8bb582;
  color: black;
  align-items: center;
  margin: 0;
  padding: 10px 0px;
  width: 100%;

  ${mobile({ 
    display:"flex", 
    flexDirection:"column", 
    alignItems:"center",
    textAlign: "center",
  })}

`;

const Copy = styled.div`
  flex:1;
  font-size: 14px;
  display: flex;
  text-align: left;
  justify-content: center;
  align-items: center;
`;
const Dev = styled.div`
  flex:1;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  text-align: right;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  color: black;
  
  &:hover {
    color: white;
    font-weight: 500;
  }
`;

const Copyright = () => {
  return (
    <Container>
      <Copy>
        Copyright <AiOutlineCopyright style={{ margin: "5px" }} /> E-commerce - Todos os direitos reservados.
      </Copy>
      <Dev>
        <FiGithub style={{ margin: "5px" }}/>
        By: <a href="https://github.com/Adrianalcr" style={{ textDecoration: 'none'}}> Adriana Lima</a>
      </Dev>
    </Container>
  )
}

export default Copyright