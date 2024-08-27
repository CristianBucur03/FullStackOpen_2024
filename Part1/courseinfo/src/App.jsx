/* eslint-disable react/prop-types */
const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  // Refactor the code so that it consists of three new components: Header, Content, and Total.

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
  const Content = () => {
    return (
      <div>
        <Part part={part1.name} exercises={part1.exercises} />
        <Part part={part2.name} exercises={part2.exercises} />
        <Part part={part3.name} exercises={part3.exercises} />
      </div>
    );
  };

  const Total = () => {
    return (
      <div>
        <p>
          Number of exercises{" "}
          {part1.exercises + part2.exercises + part3.exercises}
        </p>
      </div>
    );
  };

  return (
    <div>
      <Header title={course} />
      <Content />
      <Total />
    </div>
  );
};

export default App;
