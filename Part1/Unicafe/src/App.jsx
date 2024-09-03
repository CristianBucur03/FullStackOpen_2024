/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
  const [good, setCount] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNEutral] = useState(0);

  const Statistics = ({ good, bad, neutral }) => {
    const totalVotes = good + bad + neutral;
    const average = totalVotes !== 0 ? (good - bad) / totalVotes : 0;
    const posVotesPercentage = totalVotes !== 0 ? (good / totalVotes) * 100 : 0;
    return (
      <div>
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Bad: {bad}</p>
        <p>Neutral: {neutral}</p>
        <p>Total votes: {totalVotes}</p>
        <p>Average: {average}</p>
        <p>Positive:{posVotesPercentage}</p>
      </div>
    );
  };

  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => setCount(good + 1)}>Good</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
        <button onClick={() => setNEutral(neutral + 1)}>Neutral</button>

        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </>
  );
}

export default App;
