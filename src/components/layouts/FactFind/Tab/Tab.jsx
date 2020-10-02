import React from 'react'
import { TabList } from './TabList'
import { TabListItem } from './TabListItem'

export const Tab = ({ data ,children, ...restProps }) => (
  <>
    <TabList>
      {data.items.map(item => (
        <TabListItem
          key={item.id}
          {...item}
        />
      ))}
    </TabList>
    {children}
  </>
);
