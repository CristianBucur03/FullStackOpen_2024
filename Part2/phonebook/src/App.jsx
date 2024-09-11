import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filteredList, setFilteredList] = useState([]);
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleNameInputChange = (event) => {
    setNewPerson(event.target.value);
  };
  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    defineFilteredList(searchInput);
  };

  const newName = {
    name: newPerson,
    number: newNumber,
    id: persons.length + 1,
  };

  const existingName = persons.filter((each) => each.name === newPerson);

  const defineFilteredList = (searchInput) => {
    const newFilteredList = persons.filter((each) =>
      each.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    newFilteredList.length > 0;
    setFilteredList(newFilteredList);
  };

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
      <form>
        <div>
          Search person : <input onChange={handleSearchInputChange} />
        </div>
      </form>
      <div>
        <h3>Numbers:</h3>
      </div>
      {searchInput !== ""
        ? filteredList.map((each, i) => (
            <p key={i}>
              {each.name} {each.number}
            </p>
          ))
        : persons.map((each, i) => (
            <p key={i}>
              {each.name} {each.number}
            </p>
          ))}
    </>
  );
}

export default App;
