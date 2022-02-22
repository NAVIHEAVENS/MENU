import styled from "styled-components";

export const MenuBurgerStyled = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
    margin-right: 20px;
    width: 30px;
    height: 20px;
    cursor: pointer;

    position: relative;
    transition: all 1s linear;

    span {
      background-color: white;
      position: absolute;
      top: 9px;
      left: 0;
      height: 2px;
      width: 100%;
    }
    &::before, &::after {
      content: '';
      background-color: white;
      position: absolute;
      left: 0;
      height: 2px;
      width: 100%;
    }
    &::before {
      top: 0;
    }
    &::after {
      bottom: 0;
    }
  }
`