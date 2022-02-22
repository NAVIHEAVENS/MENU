import { DropdownItem } from './dropdown-item'

import { DropdownStyled, Breadcrumbs, Navigate, Close } from "./DropdownStyled";

export const Dropdown = ({ item, toggleActive }) => {
  return (
    <DropdownStyled>
      <Breadcrumbs>
        <a href='#'>{ item.text }</a>
      </Breadcrumbs>

      <Navigate>
        {
          item.submenu.map(subitem => <DropdownItem key={subitem.id} subitem={subitem} />)
        }
      </Navigate>

      <Close>
       X
      </Close>
    </DropdownStyled>
  ) 
}