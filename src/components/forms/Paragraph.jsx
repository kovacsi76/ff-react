import React from 'react'

export const Paragraph = props => (
  <p
    id={props.data.id || "paragraph"}
    name={props.data.name || "paragraph"}
    className={props.className || "paragraph"}
  >
    {props.data.value || ""}
  </p>
);
