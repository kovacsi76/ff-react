import React from 'react';

export const WithModule = WrappedComponent => props => {
  const { module, ...restProps } = props;

  const returnElement = (
    WrappedComponent ? <WrappedComponent {...restProps} /> : null
  );

  if (!module || module.noRender) {
    return returnElement;
  }

  return (
    <div
      key={module.id}
      id={module.name || module.id}
      className={`module ${module.type}`}
      data-parent={module.parent}
    >
      {returnElement}
    </div>
  );
};
