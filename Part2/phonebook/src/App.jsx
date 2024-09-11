import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: "Mikey Mike", number: "09090909" },
  ]);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameInputChange = (event) => {
    setNewPerson(event.target.value);
  };
  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value);
  };

  const newName = {
    name: newPerson,
    number: newNumber,
  };
  const existingName = persons.filter((each) => each.name === newPerson);

  const addNewPerson = (event) => {
    event.preventDefault();

    const newList = persons.concat(newName);
    existingName.length > 0
      ? alert(`${newPerson} is already in the list`)
      : newNumber !== ""
      ? setPersons(newList)
      : alert(`Phone  number is missing`);
    setNewPerson("");
    setNewNumber("");
  };
  return (
    <>
      <h2>Phone Book</h2>
      <form onSubmit={addNewPerson}>
        <div>
          <h3>Person name:</h3>
          <input value={newPerson} onChange={handleNameInputChange} />
          <h3>Person number:</h3>
          <input value={newNumber} onChange={handleNumberInputChange} />
        </div>
        <div>
          <button type="submit">Add person</button>
        </div>
      </form>
      <div>
        <h3>Numbers:</h3>
      </div>
      {persons.map((each, i) => (
        <p key={i}>
          {each.name} {each.number}
        </p>
      ))}
    </>
  );
}

export default App;
