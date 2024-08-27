/* eslint-disable react/prop-types */
const App = () => {
  const now = new Date();
  const a = 3;
  const b = 4;
  console.log("Hello from component");
  const Hello = (props) => {
    return (
      <div>
        <p>
          Hello {props.name} ,it is {now.toDateString()}
        </p>
        <p>
          {a}+{b}= {a + b}
        </p>
      </div>
    );
  };

  return (
    <div>
      <p>Greetings</p>
      <Hello name="Mata" />
    </div>
  );
};

export default App;
