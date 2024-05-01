import styled from 'styled-components';

// Create a styled button component with the provided CSS styles
const StyledButton = styled.button`
  padding: 15px 30px;
  border: 3px solid #ece5ce;
  border-radius: 9999px; /* pill shape */
  color: #fff;
  margin:15px;
  background-color: #53777a;
  box-shadow: 0 0 10px #0009, 0 0 120px #fff9;

  /* Add hover effect */
  &:hover {
    background-color: #6b979b;
  }
`;

// Button6 component renders the styled button component
const Button6 = () => {
  return <StyledButton>Simple Button</StyledButton>;
};

export default Button6;

