import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LinkStyled = styled(Link)`
  margin: 16px;
  text-decoration: none;
  color: gray;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <NotFoundStyled>
      <p>Oops! Por acá no está lo que estás buscando</p>
      <LinkStyled to="/" title="Volver al inicio">
        Volver al inicio
      </LinkStyled>
    </NotFoundStyled>
  );
};

export default NotFound;
