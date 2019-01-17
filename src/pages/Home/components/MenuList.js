import React from 'react';
import { NavLink  } from 'react-router-dom';

import { menuList } from './helpers/menuLinks';
import Equalizer from '@material-ui/icons/Equalizer';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import Category from '@material-ui/icons/Category';

const getIcon = (name) => {
  let icon;
  switch (name){
    case 'dashboard': 
      icon = <Equalizer />;
      break;
    case 'account':
      icon = <AccountBalanceWallet />;
      break;
    case 'category':
      icon = <Category />;
      break;
    default: 
      break;
  }

  return icon;
}

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
