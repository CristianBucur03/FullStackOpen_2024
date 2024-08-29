/* eslint-disable react/prop-types */
const App = () => {
  const course = "Half Stack application development";
  // const part1 = {
  //   name: "Fundamentals of React",
  //   exercises: 10,
  // };
  // const part2 = {
  //   name: "Using props to pass data",
  //   exercises: 7,
  // };
  // const part3 = {
  //   name: "State of a component",
  //   exercises: 14,
  // };
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  //

  const Header = (props) => {
    return (
      <>
        <h1>{props.title}</h1>
      </>
    );
  };

  const Part = (props) => {
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    );
  };
  const Content = (parts) => {
    return (
      <div>
        {parts.map((each) => (
          <Part key={each.index} part={each.name} exercises={each.exercises} />
        ))}
      </div>
    );
  };

  const Total = (parts) => {
    return (
      <div>
        <p>
          Number of exercises{" "}
          {parts[0].exercises + parts[1].exercises + parts[2].exercises}
        </p>
      </div>
    );
  };

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
