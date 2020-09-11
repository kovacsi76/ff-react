import React from 'react'

export default function Paragraph(props) {
  return (
    <p
      id={props.id || "paragraph"}
      name={props.name || "paragraph"}
    >
      {props.value || ""}
    </p>
  );
}
