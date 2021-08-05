import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import ContextPage from "./context/index.jsx";
import MyUseStore from "./myUseStore/index.jsx";
import RetoDemo from "./reto/index.jsx";

function Parent() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("parent render");
  });
  useEffect(() => {
    console.log("parent useEffect run");
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +1
      </button>
      <Child number={number}></Child>
    </div>
  );
}

function Child(props) {
  useEffect(() => {
    console.log("child render");
  });
  useEffect(() => {
    console.log("child useEffect run");
  }, []);
  return <span>{props.number}</span>;
}

function App() {
  const app = useRef();

  useEffect(() => {
    console.log(app.current.onInitialize);
    // app.current.onInitialize();
  }, []);

  return (
    <div className="App" ref={app}>
      useEffect:
      <Parent />
      <br />
      context:
      <ContextPage />
      <br />
      my store:
      <MyUseStore />
      <br />
      reto:
      <RetoDemo />
      
    </div>
  );
}

export default App;
