import React from 'react';
import { NavLink  } from 'react-router-dom';

import { menuList, getIcon } from './helpers/menuLinks';

class MenuList extends React.Component {
 render() {
   return (
     <ul>
     { 
      menuList.map((menu, i) => 
        <li key={i}>
          <NavLink  activeClassName="selected" to={menu.href}>
            {getIcon(menu.icon)}
            <span>{menu.label}</span>
          </NavLink>
        </li>
      )
    }
    </ul>
   )
 }
}

export default MenuList;
