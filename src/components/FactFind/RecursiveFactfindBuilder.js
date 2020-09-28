import React from 'react';
import { WithLabel } from '../hocs/WithLabel';
import { componentList } from "./componentList";
import { WithModule } from '../hocs/FactFind/WithModule';

// Recursive component
export const RecursiveFactfindBuilder = ({ components }) => (
  components.map(component => {
    let Component = componentList[component.module.type] || null;
    if (Component && component.label) {
      Component = WithLabel(Component);
    }
    const ComponentWithModule = WithModule(Component);

    return (
      <ComponentWithModule
        {...component}
        key={component.module.id}
      >
        {(component.children && component.children.length > 0) &&
          <RecursiveFactfindBuilder components={component.children} />
        }
      </ComponentWithModule>
    );
  })
);
