import React from 'react';
import { WithLabel } from '../hocs/WithLabel';
import { componentList } from "./componentList";
import { WithModule } from '../hocs/FactFind/WithModule';

// Recursive component
export const RecursiveFactfindBuilder = ({ components, ...restProps }) => (
  components.map(({ module, children, ...restComponent }) => {
    if (!module) {
      return null;
    }

    let Component = componentList[module.type] || null;
    if (Component && restComponent.label) {
      Component = WithLabel(Component);
    }
    const ComponentWithModule = WithModule(Component);

    return (
      <ComponentWithModule
        {...restComponent}
        module={module}
        key={module.id}
      >
        {(Array.isArray(children) && children.length > 0) &&
          <RecursiveFactfindBuilder components={children} />
        }
      </ComponentWithModule>
    );
  })
);
