import { useState } from "react"

import { MenuItem } from "./menu-item"

import { MenuData } from '../../data/MenuData'

import { MenuStyled } from "./MenuStyled"
import { MenuBurger } from "../menu-burger"

export const Menu = () => {
  const [isActive, setActive] = useState()

  const toggleActive = (id) => id !== isActive ? setActive(id) : setActive()

  return (
    <MenuStyled>
      <ul>
        {
          MenuData.map(item => <MenuItem key={item.id} item={item} isActive={isActive} toggleActive={toggleActive}/>)
        }
      </ul>
      <MenuBurger />
    </MenuStyled>
  )
}