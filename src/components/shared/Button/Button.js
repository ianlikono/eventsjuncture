import styled, { css } from 'styled-components';

export const Button = styled.button`

 padding: 1.5rem 5rem;
 background-image: ${(props)=>`linear-gradient(to right,${props.theme.colorBlueDark},${props.theme.colorBlueMedium},${props.theme.colorBlueLight})`};
 border: none;
 font-family: josefin,Nunito;
 color: white;
 text-decoration: none;
 font-size: 1rem;
 cursor: pointer;
 letter-spacing: 0.08rem;
 box-shadow: ${props=>props.theme.BoxShadow}
 font-weight:700;

  &:hover{
  background-image: ${(props)=>`linear-gradient(to left,${props.theme.colorBlueDark},${props.theme.colorBlueMedium},${props.theme.colorBlueLight})`};
  box-shadow: ${props=>props.theme.HoverBoxShadow}
  }

 ${props=>props.small && css`
    padding: 1.5rem 4rem;
 `};

  ${props=>props.purple && css`
    background-image: ${(props)=>`linear-gradient(to bottom right,${props.theme.colorPurpleLight},${props.theme.colorPurpleDark})`};
  
    &:hover{
  background-image: ${(props)=>`linear-gradient(to left,${props.theme.colorPurpleLight},${props.theme.colorPurpleDark}`};
 }
  
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
 &:hover{
  background-image: ${(props)=>`linear-gradient(to left,${props.theme.colorAquaDark},${props.theme.colorAquaMild},${props.theme.colorAquaLight})`};
 }
  `};


 &:active{
    transform: translateY(0.1rem);
 }

`

