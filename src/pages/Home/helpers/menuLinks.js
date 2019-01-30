import React from 'react';
import Equalizer from '@material-ui/icons/Equalizer';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import Category from '@material-ui/icons/Category';

export let menuList = [
  {
    label: 'Dashboard',
    href: '/app/home/dashboard',
    icon: 'dashboard',
    classname: 'material-icons menu-header'
  },
  {
    label: 'Settings',
    href: '',
    icon: '',
    classname: 'material-icons menu-header'
  },
  {
    label: 'Accounts',
    href: '/app/home/settings/accounts',
    icon: 'account',
    classname: 'material-icons menu-element'
  },
  {
    label: 'Categories',
    href: '/app/home/settings/categories',
    icon: 'category',
    classname: 'material-icons menu-element'
  },
  {
    label: 'Reports',
    href: '',
    icon: '',
    classname: 'material-icons menu-header'
  },
  {
    label: 'Accounts',
    href: '/app/home/raports/accounts',
    icon: 'category',
    classname: 'material-icons menu-element'
  },
];

export const getIcon = (name) => {
  let icons = [];
  icons['dashboard'] = <Equalizer />;
  icons['account'] = <AccountBalanceWallet />;
  icons['category'] = <Category />;

  return icons[name] ? icons[name] : null;
}