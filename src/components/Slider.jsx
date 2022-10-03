import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsivo";
import circle2 from "../imagens/circle2.png"

const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;

    ${mobile({ height: "80%" })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);   
`;

const Slide = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};

    ${mobile({ height: "40vh", marginTop:"0px" })}
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    ${mobile({ width: "100%" })}

`;

const Circle = styled.div`
    width: 80%;
    height: 99%;
    background-image: url(${circle2});
    background-size: 100% ;
    background-repeat: no-repeat;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    animation: BackgroundColor 7s infinite; 

    @keyframes BackgroundColor {
        0% {
          background-color: #b448f7;
        }
        50% {
          background-color: #8bb582;
        }
        100% {
          background-color: #f77979;
        }
    }
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${mobile({ padding: "25px" })}

`;

const Title = styled.h1`
    font-size: 70px;
    color: white;
    ${mobile({ fontSize: "25px" })}
`;

const Descricao = styled.p`
    color: #fff;
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({ 
        margin: "30px 0px", 
        fontSize:"14px", 
        letterSpacing:"none" 
    })}

`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border: solid 1px white; 
    color: white;
    transition: all 0.5s ease;

    &:hover {
        background-color: black;
        color: white;
        border: solid 1px black; 
    }
    ${mobile({ 
        fontSize: "15px",
        padding: "5px", 
        border:"solid 1px white", 
        backgroundColor:"transparent", 
        color:"white" 
    })}
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };


    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <FiArrowLeft />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Circle>
                                <Image src={item.img}/>    
                            </Circle>                        
                        </ImgContainer>

                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Descricao>{item.descricao}</Descricao>
                            <Button>VER LOJA</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <FiArrowRight />
            </Arrow>
        </Container>
    )
}

export default Slider