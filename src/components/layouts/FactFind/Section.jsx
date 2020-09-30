import React from 'react'

export const Section = ({ data, children, ...restProps }) => (
  <>
    <header>{data.header}</header>
    {children}
  </>
);
