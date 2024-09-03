import { useState } from "react";

function App() {
  const [good, setCount] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNEutral] = useState(0);
  const totalVotes = good + bad + neutral;
  const average = totalVotes !== 0 ? (good - bad) / totalVotes : 0;
  return (
    <>
      <p>Give feedback</p>
      <div>
        <button onClick={() => setCount(good + 1)}>Good</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
        <button onClick={() => setNEutral(neutral + 1)}>Neutral</button>
      </div>

      <p>Statistics</p>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Total votes: {totalVotes}</p>
      <p>Average: {average}</p>
    </>
  );
}

export default App;
