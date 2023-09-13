import { useState, useCallback } from "react";
import Content from "./Content.js";


function App() {

  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <div style={{ padding: 32 }}>
      <Content
        onIncrease={handleClick}
      />
      <h2>{count}</h2>
    </div>
  )
}

export default App;
