const Total = ({ parts }) => {
  const myResult = parts.reduce((sum, i) => sum + i.exercises, 0);
  return (
    <div>
      <h3>Number of exercises {myResult}</h3>
    </div>
  );
};

export default Total;
