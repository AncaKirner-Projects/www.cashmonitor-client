import React from 'react';
import { NavLink  } from 'react-router-dom';

import { menuList, getIcon } from '../helpers/menuLinks';

/**
 * Returns the NavLink Component that contains a sub-menu composed by icon and menu name
 * @param {Object} menu 
 * @returns <Component>
 */
const selectableLink = (menu) => {
  return (
    <NavLink activeClassName="selected" to={menu.href}>
      {getIcon(menu.icon)}
      <span>{menu.label}</span>
    </NavLink>
)};

class MenuList extends React.Component {
 render() {
   return (
     <ul>
     { 
      menuList.map((menu, i) => 
        <li key={i}>
          { // Returns an icon item together with the name as a sub-menu or the menu name as a header
            menu.icon ? selectableLink(menu) : <span className="header-menu">{menu.label}</span> 
          }
        </li>
      )
    }
    </ul>
   )
 }
}

export default MenuList;
