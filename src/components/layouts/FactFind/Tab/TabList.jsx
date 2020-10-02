import React from 'react'

export const TabList = props => (
  <ul className={`TabList ${props.className}`}>
    {props.children}
  </ul>
);
