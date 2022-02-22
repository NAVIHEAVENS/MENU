import styled, { css } from "styled-components";

export const MenuItemStyled = styled.li`
  list-style: none;

  font-size: 20px;
  color: white;
  padding: 20px 20px;
  cursor: pointer;
  
  transition: all 0.5s linear;

  ${props => props.isActive && css`
    background: orange;
  `}

  &:hover {
    background: orange;
  }
  @media (max-width: 767px) {
    display: none;
  }
` 