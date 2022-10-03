import React from 'react';
import { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import styled from 'styled-components';


const Container = styled.div`
    position: fixed;
    z-index: 999;
    bottom: 30px;
    right: 15px;
`;

const Scrollup = styled.div`
    background-color: black;
    display: block;
    height: 50px;
    width: 50px;
    margin: 10px;
    text-align: center;
    line-height: 55px;
    -webkit-border-radius: 0;
    border-radius: 50%;
    position: relative;
    font-size: 25px;
    color: #FFF;
    opacity: 1;
    cursor: pointer;
    -webkit-transition: all 0.3s cubic-bezier(0.5,.8,.9,0.8);
    -moz-transition: all 0.3s cubic-bezier(0.5,.8,.9,0.8);
    -ms-transition: all 0.3s cubic-bezier(0.5,.8,.9,0.8);
    -o-transition: all 0.3s cubic-bezier(0.5,.8,.9,0.8);
    transition: all 0.3s cubic-bezier(0.5,.8,.9,0.8);
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;

    &:hover{
        background-color: #8bb582;
    }
`;

const LinkScrollup = styled.a`
    color: white;
`;



const ScrollUp = () => {
    const [setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      
    window.addEventListener('scroll', toggleVisible);

    return (
        <Container>
            <Scrollup onClick={scrollToTop}>
                <LinkScrollup >
                    <FiChevronUp/>
                </LinkScrollup>
            </Scrollup>
        </Container>
    )
}

export default ScrollUp