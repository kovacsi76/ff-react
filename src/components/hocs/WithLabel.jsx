import React from 'react';

function WithLabel(WrappedComponent) {
  return function WithLabelComponent(props) {
    const { label, ...passThroughProps } = props;
    console.log("wla", label, passThroughProps);

    if (!label) {
      return <WrappedComponent {...passThroughProps} />;
    }

    return (
      <label htmlFor={passThroughProps.id}>
        <span>{label}</span>
        <WrappedComponent {...passThroughProps} />
      </label>
    );
  };
}

export default WithLabel;
