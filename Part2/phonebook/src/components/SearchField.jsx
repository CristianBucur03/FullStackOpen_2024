/* eslint-disable react/prop-types */

export const SearchField = ({ handleSearchInputChange }) => {
  return (
    <form>
      <div>
        Search person : <input onChange={handleSearchInputChange} />
      </div>
    </form>
  );
};
