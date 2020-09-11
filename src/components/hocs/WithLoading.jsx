import React from 'react';

function WithLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    const { isLoading, form, ...passThroughProps } = props;

    if (!isLoading) {
      return WrappedComponent === null
        ? null
        : <WrappedComponent {...form} {...passThroughProps} />;
    }

    return <p>Hold on, fetching data might take some time.</p>;
  };
}

export default WithLoading;
