import { useReducer, useRef } from "react";
import { act } from "react-dom/test-utils";

// useState
// 1. init state
// 2. Actions

// useReducer
// 1. init state
// 2. Actions
// 3. Reducer
// 4. Dispatch

// initState
const initState = {
  job: '',
  jobs: []
}

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payLoad => {
  return {
    type: SET_JOB,
    payLoad
  }
}

const addJob = payLoad => {
  return {
    type: ADD_JOB,
    payLoad
  }
}

const deleteJob = payLoad => {
  return {
    type: DELETE_JOB,
    payLoad
  }
}

const reducer = (state, action) => {
  let newState
  switch (action.type) {
    case SET_JOB:
        newState = {
          ...state,
          job: action.payLoad
        }
      break;
    case ADD_JOB:
        newState = {
          ...state,
          jobs: [...state.jobs, action.payLoad]
        }
      break
    case DELETE_JOB:
        const newJobs = [...state.jobs]
        newJobs.splice(action.payLoad, 1)
        newState = {
          ...state,
          jobs: newJobs
        }
      break
    default:
      throw new Error('Invalid action')
  }
  console.log(newState);
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
        value={job}
        placeholder="Input your job"
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => {
          return(
            <li key={index}>
              {job}
              <span onClick={() => dispatch(deleteJob(index))}>&times;</span>                
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
