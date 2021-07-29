import React from "react";
import { Provider, useStore } from "reto";
import store from "./store";

function FirstChild() {
  const { count } = useStore(store);

  return <div>count: {count}</div>;
}

function SecondChild() {
  const { count, setCount } = useStore(store);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      +1
    </button>
  );
}

export default function RetoDemo() {
  return (
    <Provider of={store}>
      <FirstChild />
      <SecondChild />
    </Provider>
  );
}
