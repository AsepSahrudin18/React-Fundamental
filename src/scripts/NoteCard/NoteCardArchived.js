import React from "react";

function NoteCardArchived({ note, onDelete, onRestore, showFormattedDate }) {
  const formattedDate = showFormattedDate(note.createdAt);

  return (
    <div className="note-card archived">
      <div className="card-content">
        <h3>{note.title}</h3>
        <p>
          {formattedDate} <br /> <br />
          {note.body}
        </p>
      </div>

      <div className="button-container archived">
        <button
          className="restore"
          onClick={() => {
            onRestore(note.id);
          }}
        >
          Restore
        </button>
        <button
          className="delete"
          onClick={() => {
            onDelete(note.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCardArchived;
