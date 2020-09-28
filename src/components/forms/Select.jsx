import React from 'react'
import { SelectOption } from './SelectOption'

export const Select = props => {
  if (!props.data.options) {
    return <p>Options array missing.</p>;
  }
  if (!props.data.options.length) {
    return <p>Options array empty.</p>
  }

  return (
    <select
      id={props.data.id || "select"}
      name={props.data.name || "select"}
      defaultValue={props.data.defaultValue || ""}
      // value={props.value || ""}
      required={props.data.required || false}
      disabled={props.data.disabled || false}
      multiple={props.data.multiple || false}
      size={props.data.size || 0}
      className={props.className || "select"}
    >
      {props.data.options.map(option => (
        <SelectOption
          key={option.id || option.label}
          {...option}
        />
      ))}
    </select>
  );
};
