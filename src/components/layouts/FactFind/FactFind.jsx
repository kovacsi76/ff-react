import React from 'react'

export const FactFind = ({data, children, ...restProps}) => (
  <>
    <header>{data.header}</header>
    {children}
  </>
);
