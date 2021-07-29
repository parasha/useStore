import "./App.css";
import React, {useRef, useEffect} from 'react';
import ContextPage from "./context/index.jsx";
// import MyUseStore from './myUseStore/index.jsx';
import RetoDemo from './reto/index.jsx';

function App() {
  const app = useRef();

  useEffect(()=>{
    console.log(app.current.onInitialize);
    // app.current.onInitialize();
  },[])

  return (
    <div className="App" ref={app}>
      context:
      <ContextPage />
      <br/>
      my store:
      {/* <MyUseStore /> */}
      <br/>
      reto:
      <RetoDemo />
    </div>
  );
}

export default App;
