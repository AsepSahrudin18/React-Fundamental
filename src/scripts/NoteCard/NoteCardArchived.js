import React from "react";
import { GrFormNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function NoteCardArchived({ note, onDelete, onRestore, showFormattedDate }) {
  const navigate = useNavigate();
  const formattedDate = showFormattedDate(note.createdAt);

  return (
    <div className="note-card archived">
      <div className="card-content">
        <div className="card-content__header">
          <h3>{note.title}</h3>
          <div
            className="detail-button"
            onClick={() => {
              navigate(`/detail/${note.id}`);
            }}
          >
            <GrFormNext />
          </div>
        </div>
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
