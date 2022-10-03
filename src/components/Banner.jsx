import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsivo';
import banner2 from "../imagens/banner2.jpg"

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;

    ${mobile({  width: "100%", height: "100%" })}
`;

const BannerImg = styled.div`
    background-image: url(${banner2});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    justify-content: left;
    width: 100%;
    z-index: 1;
    ${mobile({ width: "100%", height: "100%" })}

`;

const Banner = () => {
  return (
    <Container>
        <BannerImg/>
    </Container>
  )
}

export default Banner