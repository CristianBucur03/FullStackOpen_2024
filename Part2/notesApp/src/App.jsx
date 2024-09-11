/* eslint-disable react/prop-types */
import Note from "./components/Note";
import { useState } from "react";

const App = ({ notes }) => {
  const [note, setNotes] = useState(notes);
  const [newNote, setNewNote] = useState("a new note...");
  const addNote = (event) => {
    event.preventDefault();

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    };
    setNotes(note.concat(noteObject));
    console.log(note);
    setNewNote("");
    console.log("note added");
  };
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
    console.log(newNote);
  };
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {note.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
