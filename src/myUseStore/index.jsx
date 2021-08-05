import React, { useContext } from "react";
import { Provider, useStore } from "./my-use";
import store from "./store";

function FirstChild() {
  
  const Context = useStore(store);

  return (
    <div>
      <button>+1</button>
      数量：{Context.count}
    </div>
  );
}

export default function MyStore() {
  return (
    <>
      <Provider store={store}>
        <FirstChild />
      </Provider>
    </>
  );
}
