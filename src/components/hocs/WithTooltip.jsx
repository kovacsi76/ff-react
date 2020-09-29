import React from 'react';
import { convertSpace2NonBreakableSpace } from '../../utils/utility';

export const WithTooltip = WrappedComponent => props => {
  const { tooltip, ...restProps } = props;

  let returnElement = (
    WrappedComponent ? <WrappedComponent {...restProps} /> : null
  );

  if (typeof tooltip !== "object" || typeof tooltip.text === "undefined") {
    return returnElement;
  }

  const tooltipPosition = tooltip.position || "right";
  const icon = tooltip.icon || "info";
  const msgLocation = tooltip.msgLocation || "right-all";

  const tooltipElement = (
    <div className={`Tooltip m-tooltip m-tooltip--small ${tooltipPosition}`}>
      <div className={`m-tooltip__trigger c-icon--${icon}`} tabIndex="0" />

      <div className={`m-tooltip__msg m-tooltip__msg--${msgLocation}`}>
        {convertSpace2NonBreakableSpace(tooltip.text)}
      </div>
    </div>
  );

  returnElement = tooltip.position === "left"
    ? (
      <>
        {tooltipElement}
        {returnElement}
      </>
    )
    : (
      <>
        {returnElement}
        {tooltipElement}
      </>
    );

  return returnElement;
};
