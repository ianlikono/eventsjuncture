import styled, { css } from 'styled-components';

export const Button = styled.button`

 padding: 1.5rem 5rem;
 background-image: ${(props)=>`linear-gradient(to right,${props.theme.colorBlueDark},${props.theme.coloBlueMedium},${props.theme.colorBlueLight})`};
 border: none;
 font-family: Montserrat;
 color: white;
 text-decoration: none;
 font-size: 1rem;
 cursor: pointer;
 letter-spacing: 0.08rem;
 box-shadow: 0 8rem 16rem 0 rgba(0,0,0,0.2), 0 6rem 20rem 0 rgba(0,0,0,0.19);
 font-weight:700;


 ${props=>props.small && css`
    padding: 1.5rem 4rem;
 `};

  ${props=>props.purple && css`
    background-image: ${(props)=>`linear-gradient(to bottom right,${props.theme.colorPurpleLight},${props.theme.colorPurpleDark})`};
  `};

  ${props=>props.large && css`
    padding: 1.5rem 9rem;
 `};



 ${props=>props.tiny && css`
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
   

 `};

 ${props=>props.round && css`
    border-radius: 50%;
    padding: 0.6rem;
    min-width: 2.7rem;

 `}

 ${props=>props.aqua && css`
    background-image: ${(props)=>`linear-gradient(to bottom right,${props.theme.colorAquaDark},${props.theme.colorAquaMild},${props.theme.colorAquaLight},${props.theme.colorAquaVeryLight})`};
  `};

 &:hover{
  background-image: ${(props)=>`linear-gradient(to left,${props.theme.colorPurpleDark},${props.theme.colorPurpleMedium},${props.theme.colorPurpleLight})`};
 }

 &:active{
    transform: translateY(0.1rem);
 }

`

