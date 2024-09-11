import { useState } from "react";
import { Numbers } from "./components/Numbers";
import { AddPerson } from "./components/AddPerson";
import { SearchField } from "./components/SearchField";

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
      <AddPerson
        addNewPerson={addNewPerson}
        newPerson={newPerson}
        handleNameInputChange={handleNameInputChange}
        newNumber={newNumber}
        handleNumberInputChange={handleNumberInputChange}
      />
      <SearchField handleSearchInputChange={handleSearchInputChange} />
      <Numbers
        searchInput={searchInput}
        persons={persons}
        filteredList={filteredList}
      />
    </>
  );
}

export default App;
