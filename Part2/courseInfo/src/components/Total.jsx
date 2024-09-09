const Total = ({ parts }) => {
  const myResult = parts.reduce((sum, i) => sum + i.exercises, 0);
  return (
    <div>
      <p>Number of exercises {myResult}</p>
    </div>
  );
};

export default Total;
