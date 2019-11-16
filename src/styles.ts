import styled from 'styled-components';

const InputBarStyled = styled.div.attrs({
  className: 'InputBar',
  autofocus: true,
})`
  display: flex;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: -2rem;
  opacity: 1;
  transition: opacity 1s ease-in;
  -moz-transition: opacity 1s ease-in-out;
  -webkit-transition: opacity 1s ease-in-out;
`;


const InputText = styled.input.attrs({
  className: 'InputText',
  autofocus: true,
})`
  background-color: rgb(1, 1, 1, 0);
  border-radius: 1rem;
  border: none;
  padding: 0.25rem 2.25rem;
  font-size: 2rem;
  height: 4rem;
  width: 40rem;
  margin-bottom: 100px;
  color: white;
  

  ::placeholder {
    color: white;
    opacity: .1;
  }
  &:focus {
    outline: none !important;
  }
`;

const IntroStyled = styled(InputBarStyled)`
margin-top: 0rem;
font-size: 2rem;
opacity: 1;
transition: none;



`;

const IntroStyledText = styled(InputText).attrs({
  className: 'InputBar',
  disabled: true,
})`
  font-size: 2rem;
`;

export const Logo = styled.a`
  position: fixed;
  right: 50px;
  bottom: 15px;
  opacity: .5;

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export {
  InputBarStyled, InputText, IntroStyled, IntroStyledText
};
