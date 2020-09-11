import React from 'react';
import WithLabel from './hocs/WithLabel';
import componentList from "./componentList";

// Recursive component
const Module = ({ modules }) => {
  return (
    <>
      {modules.map(module => {
        let Component = componentList[module.module.type] || null;
        if (Component && module.data.label) {
          Component = WithLabel(Component);
        }

        return (
          <div
            key={module.module.id}
            id={module.module.id}
            name={module.module.type}
            className={module.module.parent}
          >
            {Component === null ? null : <Component {...module.data} />}
            {(module.children && module.children.length > 0) &&
              <Module
                modules={module.children} />}
          </div>
        );
      })}
    </>
  );
};

export default Module;
