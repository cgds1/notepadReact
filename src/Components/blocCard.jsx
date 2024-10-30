import { useContext, useState } from "react";
import { BlocContext } from "../Context/blocContext";
import "../style/cardStyle.css";

function BlocCard({ note }) {
  const { DeleteNote, EditNote } = useContext(BlocContext);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ ...note });
  const [isLargeView, setIsLargeView] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    EditNote(editedNote);
    setIsEditing(false);
  };

  const handleViewLarge = () => {
    setIsLargeView(true);
  };

  const handleCloseLargeView = () => {
    setIsLargeView(false);
  };

  return (
    <>
      <section className="note">
        <div className="div_note">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedNote.title}
                onChange={(e) =>
                  setEditedNote({ ...editedNote, title: e.target.value })
                }
              />
              <textarea
                value={editedNote.description}
                onChange={(e) =>
                  setEditedNote({
                    ...editedNote,
                    description: e.target.value,
                  })
                }
              />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <p className="note_id">Id: {note.id}</p>
              <h1 className="note_title">{note.title}</h1>
              <p className="note_description">{note.description}</p>
            </>
          )}
        </div>
        <div className="div_button">
          <button className="delete_button" onClick={() => DeleteNote(note.id)}>
            Delete Note
          </button>
          <button className="edit_button" onClick={handleEdit}>
            Edit Note
          </button>
          <button className="view_large_button" onClick={handleViewLarge}>
            View Large
          </button>
        </div>
      </section>

      {isLargeView && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h1>{note.title}</h1>
            <div className="modal-text-container">
              <p>{note.description}</p>
            </div>
            <button className="close_modal_button" onClick={handleCloseLargeView}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BlocCard;
