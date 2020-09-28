import React from 'react'

export const TabListItem = props => (
  <li
    key={props.id || props.value}
    id={props.id || ""}
    disabled={props.disabled || false}
    className={props.className || "TabListItem"}
  >
    <a href={`#${props.link || ""}`} className="TabListItemLink">{props.value || "Default value"}</a>
  </li>
);
