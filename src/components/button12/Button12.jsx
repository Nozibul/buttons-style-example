import styled, { keyframes } from 'styled-components';

// Importing Raleway font from Google Fonts
const GlobalStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway:500');
`;

// Defining the keyframes for the gradient animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100%;
  }
`;

// Styled button component
const StyledButton = styled.button`
  appearance: none;
  background: linear-gradient(to right, ${props => props.green} 0%, ${props => props.sand} 50%, ${props => props.peach} 100%);
  background-size: 500%;
  border: none;
  border-radius: 5rem;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
  color: ${props => props.white};
  cursor: pointer;
  font: 1.5em 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 4rem;
  letter-spacing: .05em;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 15rem;
  margin-top: 15px;

  &:hover {
    animation-name: ${gradientAnimation};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

// Main component
const Button12 = () => {
  return (
   <div className='w-72'>
     <GlobalStyle>
      <StyledButton green="#a2ccb6" sand="#fceeb5" peach="#ee786e" white="#fff">Beach Time 🌴</StyledButton>
    </GlobalStyle>
   </div>
  );
};

export default Button12;
