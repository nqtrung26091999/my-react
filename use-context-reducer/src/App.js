import { useStore } from "./store";
import { actions } from "./store";
import "./App.css"


function App() {
  const [state, dispatch] = useStore()

  const { inputTodo, todos } = state

  //. add todo
  const handleAddTodo = () => {
    dispatch(actions.setTodos(inputTodo))
    actions.setInputTodo('')
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>Hello world !</h1>
      <input
        value={inputTodo}
        placeholder="Input todo..."
        onChange={(e) => {
          dispatch(actions.setInputTodo(e.target.value))
        }}
      />
      <button 
        onClick={handleAddTodo} 
      >
        Add todo
      </button>
      <br/>
      <ul>
        { state.todos && todos.map((todo, index) => {
          return(
            <li key={index}>
              {todo}
              <span 
                className="del" 
                title="delete"
                onClick={() => dispatch(actions.deleteTodo(index))}
              >
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
