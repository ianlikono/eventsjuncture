import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }
  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.5rem;
    border: ${props => `1px solid ${props.theme.BorderColor}`};
    color: ${props => props.theme.textColorDark};
    background: ${props => props.theme.colorPrimaryLight};
    border: ${props => `1px solid ${props.theme.BorderColor}`};
    &:hover {
      border-color: ${props => props.theme.colorPurpleDark};
    }
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
      border-color: ${props => props.theme.colorPurpleDark};
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
  }
  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
      background-image: linear-gradient(
        to right,
        #5f26fa 0%,
        #b04aea 50%,
        #5f26fa 100%
      );
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
