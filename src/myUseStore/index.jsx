import React, { useState, useContext } from "react";

const store = () => {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
};

function FirstChild() {
  const [count, setCount] = useContext(getContext(store));

  return (
    <div>
      <button onClick={()=>setCount(++count)}>+1</button>
      数量：{count}
    </div>
  )
}

// utils
function getContext(s) {
  if (!s.Context) {
    s.Context = React.createContext(s);
  }
  return s.Context;
}

function useStore(store){
  const context = getContext(store);
  const container = useContext(context);
}

export default function MyStore() {
  const storeContext = getContext(store);
  console.log("top render");
  <storeContext.Provider value={store}>
    <FirstChild />
  </storeContext.Provider>;
}
