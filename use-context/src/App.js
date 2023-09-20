import Paragraph from "./Paragraph.js"
import { ThemeContext } from "./ThemeContext.js";
import { useContext } from "react";
import "./App.css"

function App() {
  const context = useContext(ThemeContext)

  return (
    <div style={{ padding: 32 }}>
          <button onClick={context.handleSetTheme}>Toggle theme</button>
          <Paragraph/>
    </div>   
  )
}

export default App;
