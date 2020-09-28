import React from 'react';

export const WithModule = WrappedComponent => props => {
  const { children, module, ...restProps } = props;

  const returnElement = (
    <>
      {WrappedComponent ? <WrappedComponent {...restProps} /> : null}
      {children}
    </>
  );

  if (!module) {
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
