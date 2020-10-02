import React from 'react'

export const Button = props => (
  <button
    id={props.data.id || "button"}
    name={props.data.name || "button"}
    type={props.data.type || "button"}
    required={props.data.required || false}
    disabled={props.data.disabled || false}
    className={props.className || "button"}
    onClick={props.onClick}
  >
    {props.data.value || ""}
  </button>
);
