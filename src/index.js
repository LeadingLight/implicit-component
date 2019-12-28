import React, {useContext} from 'react';

const ComponentListContext = React.createContext({});

export function ComponentContext({list = {}, children}) {
  const parentContext = useContext(ComponentListContext);

  list.__proto__ = parentContext;

  return <ComponentListContext.Provider value={list}>{children}</ComponentListContext.Provider>;
}

export function useComponentContext() {
  return useContext(ComponentListContext);
}
