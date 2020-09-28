import React from 'react';

export const WithLabel = WrappedComponent => props => {
  const { label, ...restProps } = props;

  if (!label) {
    return <WrappedComponent {...restProps} />;
  }

  const labelProps = {};
  labelProps.className = label.position;
  
  let LabelWrapper = "span";
  if (["top", "bottom"].includes(label.position)) {
    LabelWrapper = "div";
  }
  const labelText = <LabelWrapper>{label.text}</LabelWrapper>;

  let labelContent = null;
  if (["bottom", "right"].includes(label.position)) {
    labelContent = (
      <>
        <WrappedComponent {...restProps} />
        {labelText}
      </>
    );
  } else {
    labelContent = (
      <>
        {labelText}
        <WrappedComponent {...restProps} />
      </>
    );
  }

  return (
    <label htmlFor={restProps.data.id} {...labelProps}>
      {labelContent}
    </label>
  );
};
