import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([{ name: "Mikey Mike" }]);
  const [newPerson, setNewPerson] = useState("");

  // const handleNameInputChange = (event) => {
  //   setNewPerson(event.target.value);
  // };

  // const addNewPerson = (event) => {
  //   event.preventDefault();
  //   const newName = {
  //     name: newPerson,
  //   };
  //   const NewPersonList = persons.concat(newName);
  //   newPerson == ""
  //     ? alert("Please enter a name In the text box")
  //     : setPersons(NewPersonList);
  //   setNewPerson("");
  //   console.log(persons);
  // };

  const handleNameInputChange = (event) => {
    setNewPerson(event.target.value);
  };

  const newName = {
    name: newPerson,
  };
  const existingName = persons.filter((each) => each.name === newPerson);

  const addNewPerson = (event) => {
    event.preventDefault();

    const newList = persons.concat(newName);
    existingName.length > 0
      ? alert(`${newPerson} is already in the list`)
      : setPersons(newList);
    setNewPerson("");
  };
  return (
    <>
      <h2>Phone Book</h2>
      <form onSubmit={addNewPerson}>
        <div>
          <h3>Person name:</h3>
          <input value={newPerson} onChange={handleNameInputChange} />
        </div>
        <div>
          <button type="submit">Add person</button>
        </div>
      </form>
      <div>
        <h3>Numbers:</h3>
      </div>
      {persons.map((each, i) => (
        <p key={i}>{each.name}</p>
      ))}
    </>
  );
}

export default App;
