import { useState } from "react"

function App() {
  
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem('jobs')) ?? []
  })

  const handleOnChange = job => {
    if(job) {
      setJob(job)
    }
  }
  const handleOnclick = () => {
    if(job) {
      setJobs(prev => {
        localStorage.setItem('jobs', JSON.stringify([...prev, job]))
        return [...prev, job]
      })
    }
    setJob('')
  }

  const handleDelete = (index) => {
    const newJobs = jobs.filter((item) => item !== jobs[index])
    localStorage.setItem('jobs', JSON.stringify(newJobs))
    return setJobs(newJobs)
  }

  return (
    <div className="App" style={{ padding: 32 }}>
      <input
        value={job}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <button onClick={handleOnclick}>Add</button>
      <ul>
        {jobs.map((item, index) => {
          return(
            <li key={index}>{item}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
