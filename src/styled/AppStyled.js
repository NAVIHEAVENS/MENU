import styled from "styled-components";

export const AppStyled = styled.div`
  display: grid;
  grid-template: [header] minmax(100px, auto) 1fr / 1fr [content] 1200px 1fr;
  height: 100vh;
`