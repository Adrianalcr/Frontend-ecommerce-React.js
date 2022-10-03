import styled from "styled-components"
import { mobile } from "../responsivo";

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

    ${mobile({
      padding: "10px",
      fontSize: "16px",
      textAlign: "center"
    })}
`;

const MarqueeAnime = styled.div`
  height: 50px; 
  overflow: hidden;
  position: relative;
`;

const Marquee = styled.h2`
  width: 100%;
  height: 100%;
  margin: 0px;
  color: white;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  align-items: center;
  justify-content: center;
  -moz-transform:translateX(100%);
  -webkit-transform:translateX(100%);  
  transform:translateX(100%);
  -moz-animation: Marquee 15s linear infinite;
  -webkit-animation: Marquee 15s linear infinite;
  animation: Marquee 15s linear infinite;


  @-moz-keyframes Marquee {
   0%   { -moz-transform: translateX(100%); }
   100% { -moz-transform: translateX(-100%); }
  }
  
  @-webkit-keyframes Marquee {
   0%   { -webkit-transform: translateX(100%); }
   100% { -webkit-transform: translateX(-100%); }
  }

  @keyframes Marquee {
   0%   { 
   -moz-transform: translateX(100%); /* Firefox bug fix */
   -webkit-transform: translateX(100%); /* Firefox bug fix */
   transform: translateX(100%);         
   }
   100% { 
   -moz-transform: translateX(-100%); /* Firefox bug fix */
   -webkit-transform: translateX(-100%); /* Firefox bug fix */
   transform: translateX(-100%); 
   }
  }
`;


const Anuncio = () => {
  return (
    <Container>
      <MarqueeAnime>
        <Marquee>Super Oferta! Frete Grátis nas compras acima de R$ 100,00. (Loja somente para fins de demonstração).</Marquee>
      </MarqueeAnime>
    </Container>
  )
}

export default Anuncio