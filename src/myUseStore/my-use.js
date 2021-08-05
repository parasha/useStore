import React, { useContext } from "react";


// 生成 react context
function getContext(store) {
  if (!store.Context) {
    store.Context = React.createContext();
  }
  return store.Context;
}

//
export function useStore(store) {
  const context = useContext(getContext(store));

  // mock
  return context;
}

export function Provider(props) {
  const { store } = props;
  const Context = getContext(store);

  return <Context.Provider value={{count: 1}}>{props.children}</Context.Provider>;
}
