import React from 'react';
import { NavMenu } from '../NavigationBar/NavMenu';

export type Props = {
  children: any,
}

export const Layout = ({children}: Props) => {
  return (
    <div>
      <NavMenu />
      {children}
    </div>
  );
}