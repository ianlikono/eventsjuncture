import styled from 'styled-components'

export const AuthWrapper = styled.div`
 border-style: dotted;
 border-color: red;
 height: 90vh;
 width: 70%;
 margin: 0 auto;
 display: flex;
`


export const PictureWrapper = styled.div`
  height: 100%;
  width: 50%;
  background-image: ${(props)=>`linear-gradient(to right,${props.theme.colorBlueDark},${props.theme.colorBlueMedium},${props.theme.colorBlueLight})`};
`

export const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  
`

export const Label = styled.label`
  font-size: ${props=>props.theme.labelSize};
  cursor: pointer;
`

export const ContentWrapper = styled.div`
  height: 100%;
  border-style: dotted;
  border-color: red;
  
`

export const FormWrapper = styled.div`
`

export const DisplayWrapper = styled.div`
  height: 100%;
  margin: auto auto;
  width: 50%;

` 