/* eslint-disable no-unused-vars */
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(7).fill(0));
  const selectAnecdote = () => {
    setSelected(Math.floor(Math.random() * 7));
  };
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  //create a voting system for each anecdote and display it

  const vote = (selected) => {
    const changePoints = [...points];
    changePoints[selected] += 1;
    setPoints(changePoints);
    console.log(points);
  };

  return (
    <div>
      <div>
        {anecdotes[selected]} has {points[selected]}points
      </div>
      <button onClick={() => selectAnecdote()}>Next anecdote</button>
      <button onClick={() => vote(selected)}>Vote</button>
    </div>
  );
}

export default App;
