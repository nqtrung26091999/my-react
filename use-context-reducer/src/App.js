import { StoreContext } from "./store";
import { useContext } from "react";
import { actions } from "./store";
import { useRef } from "react";
import './App.css'

function App() {
  const [state, dispatch] = useContext(StoreContext)

  const inputRef = useRef()

  const handleAdd = () => {
    dispatch(actions.setTodos(state.inputTodo))
    dispatch(actions.setInputTodo(''))
    inputRef.current.focus()
  }
  
  return (
    <div style={{ padding: 32 }}>
      <h1>Todo app</h1>
      <input
      ref={inputRef}
        placeholder="Input your todo..."
        value={state.inputTodo}
        onChange={e => dispatch(actions.setInputTodo(e.target.value))}
      />
      <button
       onClick={handleAdd}
      >
        Add todo
      </button>
      <br/>
      <ul>
        {state.todos && state.todos.map((item, index) => {
          return(
            <li key={index}>
              {item}
              <span 
                className="del" 
                onClick={() => { dispatch(actions.deleteTodo(index)) }}>
                  &times;
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
