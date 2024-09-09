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
  return (
    <div>
      {parts.map((each, i) => (
        <Part key={i} part={each.name} exercises={each.exercises} />
      ))}
    </div>
  );
};

export default Content;
