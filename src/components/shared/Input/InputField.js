import styled, { css } from 'styled-components';

export const InputField = styled.input`
  border: none;
  background: none;
  border-bottom: ${(props)=>`1px solid ${props.theme.inputBorderColor}`};
  color: white;
  display: block;
  padding: 1rem 1rem 1rem 0.5rem;
  font-size: 1.4rem;
  

  &:focus{
    outline: none;
  }

`

export const Label = styled.label`
  pointer-events: none;
  position: absolute;
  top: 1.4rem;
  left: 1rem;
  font-size: 1.5rem;
  transition: 0.3s ease all;

 ${InputField}:focus ~ & {
    left: 0.6rem;
    top: 0.01rem;
    opacity: 1.6;
    font-size: 0.9rem;
 }
   
    ${InputField}:valid ~ & {
    left: 0.6rem;
    top: 0.01rem;
    opacity: 1.6;
    font-size: 0.9rem;
  }
   
`

  /* ${InputField}:valid ~ &{
    left: 0.6rem;
    top: 0.01rem;
    opacity: 1.6;
    font-size: 0.9rem;
  } */
  

export const InputWrapper = styled.div`
position: relative;
`