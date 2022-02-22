import styled from "styled-components";

export const DropdownStyled = styled.div`
  padding: 20px;
  width: 100%;
  height: 30vh;
  background: orange;

  display: grid;
  grid-template: 1fr / [breadcrumbs] 1fr [navigate] 2fr [close] 1fr;

  position: absolute;
  top: 65px;
  left: 0;
`

export const Breadcrumbs = styled.div`
  margin: 10px 0;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
  }
`

export const Navigate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`

export const Close = styled.div`
  margin: 10px 0;

  display: flex;
  justify-content: end;
  align-items: flex-start;

  cursor: pointer;
  color: white;
  font-size: 20px;  
`