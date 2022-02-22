import { DropdownItemStyled } from './DropdownItemStyled'

export const DropdownItem = ({ subitem }) => {
  return (
    <DropdownItemStyled>
      { subitem.text }
    </DropdownItemStyled>
  )
}