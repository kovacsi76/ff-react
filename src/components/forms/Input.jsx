import React from 'react'

export default function Input(props) {
  return (
    <input
      id={props.id || "input"}
      name={props.name || "input"}
      type={props.type || "text"}
      defaultValue={props.defaultValue || "Default Value"}
      // value={props.value || ""}
      required={props.required || false}
      disabled={props.disabled || false}
    />
  );
}
