/* eslint-disable react/prop-types */

export const AddPerson = ({
  addNewPerson,
  newPerson,
  handleNameInputChange,
  newNumber,
  handleNumberInputChange,
}) => {
  return (
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
  );
};
