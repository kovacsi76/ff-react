import React from 'react';
import { WithLabel } from '../hocs/WithLabel';
import { componentList } from "./componentList";
import { WithModule } from '../hocs/FactFind/WithModule';

// Recursive component
export const RecursiveFactfindBuilder = ({ components, ...restProps }) => (
  components.map(({ module, children, ...restComponent }, idx) => {
    let Component = componentList[module ? module.type : null] || null;
    if (Component && restComponent.label) {
      Component = WithLabel(Component);
    }
    const ComponentWithModule = WithModule(Component);

    return (
      <ComponentWithModule
        {...restComponent}
        module={module}
        key={module ? module.id : idx}
      >
        {(children && children.length > 0) &&
          <RecursiveFactfindBuilder components={children} />
        }
      </ComponentWithModule>
    );
  })
);
