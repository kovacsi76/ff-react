import React from 'react'

export default function SelectOption(props) {
  return (
    <option
      key={props.id || props.value}
      label={props.label}
      value={props.value || props.label}
      disabled={props.disabled || false}
    />
  );
}
