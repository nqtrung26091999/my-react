import { useReducer, useRef } from "react";
import { act } from "react-dom/test-utils";

// useState
// 1. init state
// 2. Actions: Up(state + 1), Down(state - 1)

// useReducer
// 1. init state
// 2. Actions: Up(state + 1), Down(state - 1)
// 3. Reducer
// 4. Dispatch

// initState
const initState = {
  job: '',
  jobs: [] 
}

// 2. Actions
const SET_JOB = 'set_job'
const SET_JOBS = 'set_jobs'

const setJob = payLoad => {
  return {
    type: SET_JOB,
    payLoad
  }
}

const addJob = payLoad => {
  return {
    type: SET_JOBS,
    payLoad
  }
}
// console.log(setJob())

// 3. Reducer
const reducer = (state, action) => {

  console.log('Action', action);
  console.log('Prev-state', state);

  let newState

  switch(action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payLoad
      }
      break
    case SET_JOBS:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payLoad]
      }
      break
    default: 
      throw new Error('Invalid aciton')
  }

  console.log('New-state', newState);

  return newState
}

function App() {

  const [state, dispatch] = useReducer(reducer, initState)
  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  return (
    <div style={{ padding: 32 }}>
      <input
        ref={inputRef}
        placeholder="Input your job"
        value={job}
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}  &times;</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
