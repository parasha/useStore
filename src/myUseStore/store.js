import { useState } from "react";

export default function Store() {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
}
