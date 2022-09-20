import React from "react";

function NoteCardActive({ note, onDelete, onArchive, showFormattedDate }) {
  const formattedDate = showFormattedDate(note.createdAt);

  return (
    <div className="note-card active">
      <div className="card-content">
        <h3>{note.title}</h3>
        <p>
          {formattedDate} <br /><br />
          {note.body}
        </p>
      </div>

      <div className="button-container active">
        <button
          className="archived"
          onClick={() => {
            onArchive(note.id);
          }}
        >
          Archive
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

export default NoteCardActive;
