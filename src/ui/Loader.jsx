import styled, { keyframes } from "styled-components";

// Keyframes for spinning animation
const spinAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

// Styled component for the loader container
const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const StyledSpinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #2d3748;
  animation: ${spinAnimation} 1s linear infinite;
`;

function Loader() {
  return (
    <LoaderContainer>
      <StyledSpinner />
    </LoaderContainer>
  );
}

export default Loader;
