import { Dropdown } from "../../dropdown"
import { MenuItemStyled } from "./MenuItemStyled"

export const MenuItem = ({ item, isActive, toggleActive }) => {
  
  return (
    <MenuItemStyled isActive={ isActive === item.id ? isActive : null } onClick={() => toggleActive(item.id)}>
      { item.text }
      { isActive === item.id && <Dropdown item={item} toggleActive={toggleActive} onClick={e => e.stopPropagation()}/> }
    </MenuItemStyled>
  )
}