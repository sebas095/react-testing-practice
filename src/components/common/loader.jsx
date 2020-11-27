import styled from "styled-components";

import { spinAnimation } from "../../styles/keyframes";

const LoaderStyled = styled.div`
  display: grid;
  place-items: center;
`;

const LoaderContentStyled = styled.div`
  border: 8px solid gray;
  border-radius: 50%;
  border-top: 8px solid white;
  opacity: 0.3;
  width: 80px;
  height: 80px;
  animation: ${spinAnimation} 2s linear infinite;
`;

const Loader = () => (
  <LoaderStyled>
    <LoaderContentStyled />
  </LoaderStyled>
);

export default Loader;
