import React from 'react';
import { WithTooltip } from './WithTooltip';

export const WithLabel = WrappedComponent => props => {
  const { label, ...restProps } = props;

  let returnElement = (
    WrappedComponent ? <WrappedComponent {...restProps} /> : null
  );

  if (!label) {
    return returnElement;
  }

  const labelProps = {};
  labelProps.className = label.position;

  const LabelTextWrapper = "div";
  const LabelText = () => <LabelTextWrapper className="LabelTextWrapper">{label.text}</LabelTextWrapper>;
  const LabelTextWithTooltip = WithTooltip(LabelText);

  returnElement = ["bottom", "right"].includes(label.position)
    ? (
      <>
        {returnElement}
        <LabelTextWithTooltip {...restProps} />
      </>
    ) : (
      <>
        <LabelTextWithTooltip {...restProps} />
        {returnElement}
      </>
    );

  return (
    <label htmlFor={restProps.data.id} {...labelProps}>
      {returnElement}
    </label>
  );
};
