import React from 'react';

function WithModuleData(WrappedComponent) {
  return function WithModuleDataComponent(props) {
    const { children, module, ...passThroughProps } = props;

    const returnElement = WrappedComponent
      ? <WrappedComponent {...passThroughProps} />
      : children;

    if (!module) {
      return returnElement;
    }

    return <div id={module.id}>
      {returnElement}
    </div>;
  };
}

export default WithModuleData;
