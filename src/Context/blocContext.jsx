import { createContext, useEffect, useState } from "react";
import { notes as data } from "../Data/notes";

export const BlocContext = createContext();

function BlocContextProvider(props) {
  const [notes, setNotes] = useState([]);
  const [keyId, setKeyId] = useState(4);

  useEffect(() => {
    setNotes(data);
  }, []);

  function CreateNote(note) {
    setNotes([
      ...notes,
      {
        id: keyId,
        title: note.title,
        description: note.description,
      },
    ]);
    setKeyId(keyId + 1);
  }

  function DeleteNote(noteId) {
    setNotes(notes.filter((note) => note.id !== noteId));
  }

  function EditNote(updatedNote) {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  }

  function ViewLarge(note) {
    console.log("Viewing note in large mode:", note);
  }

  return (
    <BlocContext.Provider
      value={{
        notes,
        CreateNote,
        setKeyId,
        DeleteNote,
        EditNote,
        ViewLarge,
      }}
    >
      {props.children}
    </BlocContext.Provider>
  );
}

export default BlocContextProvider;
