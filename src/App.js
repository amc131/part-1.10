import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programing without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]



  const [selected, setSelected] = useState(0)

  const [copy, setCopy] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
  
  const handleVotes = () => {
    const pointsCopy = {...copy}
    pointsCopy[selected] =+ 1;
    setCopy(pointsCopy)
  }
  
  const random = () => {
     const phrase = Math.floor(Math.random() * 5)
     setSelected(selected + phrase)
     
     if (selected >= 5){
      setSelected(0)
     }
  }

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <button onClick = {handleVotes}>vote</button>
      <button onClick = {random}>
        next anecdote
      </button>
      
    </div>
  )
}

export default App