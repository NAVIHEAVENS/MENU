import styled from "styled-components";

export const MenuStyled = styled.nav`
  margin: 20px 0;

  grid-area: header / content;
  background-color: grey;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @media (min-width: 767px) {
    font-size: 10px;
  }
`   