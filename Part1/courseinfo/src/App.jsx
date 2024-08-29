/* eslint-disable react/prop-types */
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };
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
  const Content = ({ parts }) => {
    console.log(parts);
    return (
      <div>
        {parts.map((each) => (
          <Part key={each.index} part={each.name} exercises={each.exercises} />
        ))}
      </div>
    );
  };

  const Total = ({ parts }) => {
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
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
