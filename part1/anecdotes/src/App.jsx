import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const points = { }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]  
   
  const [selected, setSelected] = useState(0)

  const SelectAnecdote = () => {
    const Selected = Math.floor(Math.random() * anecdotes.length)
    setSelected(Selected)
  }

  const VoteAnecdote = () => {
    const copy = { ...points }
    if (copy.hasOwnProperty(selected)) {
      copy[selected] += 1
    } else {
      copy[selected] = 1
    }    
    Object.assign(points, copy)
    //console.log(points)
  }

  const GetVotes = () => {
    if (points.hasOwnProperty(selected)) {
      return points[selected]
    } else {
      return 0
    }    
  }

  const MostVotes = () => {
    let most = -1, last = -1
    for (const key in points) {
      if (points[key] > last) {
        most = key
      }
      last = points[key]
    } 
    if (most != -1) {
      return most
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      has {GetVotes()} votes<br />
      <Button handleClick={VoteAnecdote} text="vote" />
      <Button handleClick={SelectAnecdote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      {anecdotes[MostVotes()]}<br />
      has {points[MostVotes()]} votes<br />
    </div>
  )
}

export default App