/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const MyButton = ({ myText, myEvent, count }) => {
    return <button onClick={() => myEvent(count + 1)}>{myText}</button>;
  };

  const StatisticLine = ({ text, myValue }) => {
    return (
      <p>
        {text}: {myValue}{" "}
      </p>
    );
  };

  const Statistics = ({ good, bad, neutral }) => {
    const totalVotes = good + bad + neutral;
    const average = totalVotes !== 0 ? (good - bad) / totalVotes : 0;
    const posVotesPercentage = totalVotes !== 0 ? (good / totalVotes) * 100 : 0;
    return totalVotes !== 0 ? (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text="Good" myValue={good} />
        <StatisticLine text="Bad" myValue={bad} />
        <StatisticLine text="Neutral" myValue={neutral} />
        <StatisticLine text="Total votes" myValue={totalVotes} />
        <StatisticLine text="Average" myValue={average} />
        <StatisticLine text="Positive" myValue={posVotesPercentage} />
        {/* <p>Good: {good}</p>
        <p>Bad: {bad}</p>
        <p>Neutral: {neutral}</p>
        <p>Total votes: {totalVotes}</p>
        <p>Average: {average}</p>
        <p>Positive:{posVotesPercentage}</p> */}
      </div>
    ) : (
      <p>No feedback given</p>
    );
  };

  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <MyButton myText={"Good"} myEvent={setGood} count={good} />
        <MyButton myText={"Bad"} myEvent={setBad} count={bad} />
        <MyButton myText={"Neutral"} myEvent={setNeutral} count={neutral} />
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </>
  );
}

export default App;
