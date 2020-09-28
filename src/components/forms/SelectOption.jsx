import React from 'react'

export const SelectOption = props => (
  <option
    key={props.id || props.value}
    label={props.label}
    value={props.value || props.label}
    disabled={props.disabled || false}
    className={props.className || "selectOption"}
  />
);
