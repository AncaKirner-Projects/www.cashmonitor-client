import React from 'react';
import { NavLink  } from 'react-router-dom';

import { menuList, getIcon } from './helpers/menuLinks';

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
          { 
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
