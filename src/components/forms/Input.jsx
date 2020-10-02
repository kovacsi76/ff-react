import React from 'react'

export const Input = props => (
  <input
    id={props.data.id || "input"}
    name={props.data.name || "input"}
    type={props.data.type || "text"}
    placeholder={props.data.placeholder || "Default placeholder"}
    defaultValue={props.data.defaultValue}
    // value={props.value}
    required={props.data.required || false}
    disabled={props.data.disabled || false}
    className={props.className || "input"}
  />
);
