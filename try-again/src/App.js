import { StoreContext } from './store'
import { useContext } from 'react';
import { actions } from './store'
import { useRef } from 'react';
import './App.css'

function App() {
  const [state, dispatch] = useContext(StoreContext)
  console.log(state);
  const { inputTodo, todos } = state
  const inputRef = useRef()

  const handleAdd = () => {
    dispatch(actions.setTodos(inputTodo))
    dispatch(actions.setInputTodo(''))
    inputRef.current.focus()
  }

  return (
    <div style={{ padding: 32 }}>
      <input
        ref={inputRef}
        value={inputTodo}
        onChange={e => {
          dispatch(actions.setInputTodo(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add todo</button>
      <br/>
      <ul>
        {todos && todos.map((item, index) => {
          return(
            <li key={index}>
              {item}
              <span className='deleteStyle' onClick= {() => {
                dispatch(actions.deleteTodo(index))
              }}>&times;</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
