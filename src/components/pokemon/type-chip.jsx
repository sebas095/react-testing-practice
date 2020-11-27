import styled from "styled-components";

const typeColors = {
  poison: "purple",
  grass: "green",
  electric: "yellow",
};

const TypeChipStyled = styled.div`
  background-color: aqua;
  padding: 2px 5px;
  border-radius: 15px;
  text-align: center;
  width: fit-content;
  background-color: ${({ pokemonType }) => typeColors[pokemonType]};
`;

const TypeChip = ({ name }) => (
  <TypeChipStyled pokemonType={name.toLowerCase()}>{name}</TypeChipStyled>
);

export default TypeChip;
