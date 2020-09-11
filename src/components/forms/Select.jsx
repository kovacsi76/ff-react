import React from 'react'
import SelectOption from './SelectOption'

export default function Select(props) {
  if (!props.options) {
    return null;
  }
  if (!props.options.length) {
    return <p>No options.</p>
  }

  return (
    <select
      id={props.id || "select"}
      name={props.name || "select"}
      defaultValue={props.defaultValue || ""}
      // value={props.value || ""}
      required={props.required || false}
      disabled={props.disabled || false}
      multiple={props.multiple || false}
      size={props.size || 0}
    >
      {props.options.map(option => (
        <SelectOption
          key={option.id || option.label}
          {...option}
        />
      ))}
    </select>
  );
}
