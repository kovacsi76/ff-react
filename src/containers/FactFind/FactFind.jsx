import React, { useEffect, useState } from 'react';
import { WithLoading } from '../../components/hocs/WithLoading';
import { RecursiveFactfindBuilder } from '../../components/FactFind/RecursiveFactfindBuilder';
import FactfindData from '../../data/factfind.json';

const EmptyWithLoading = WithLoading(null);

export const FactFind = props => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      const timer = setTimeout(
        async () => {
          // const response = await fetch('model/factfind.json');
          // if (!response.ok) {
          //   return false;
          // }
          // const apiData = await response.json();
          const apiData = FactfindData || {};
          setData(apiData);
          setLoading(false);
        },
        500
      );

      return () => {
        clearTimeout(timer);
      };
    },
    []
  );

  if (loading) {
    return <EmptyWithLoading isLoading={loading} />;
  }

  return (
    <RecursiveFactfindBuilder components={[data]} />
  );
}
