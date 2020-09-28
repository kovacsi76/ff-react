import React from 'react';

export const WithLoading = WrappedComponent => props => {
  const { isLoading, ...restProps } = props;

  if (!isLoading) {
    return WrappedComponent === null
      ? null
      : <WrappedComponent {...restProps} />;
  }

  return <p>Hold on, fetching data might take some time...</p>;
};
