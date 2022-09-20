import React from "react";
import { GrFormNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function NoteCardActive({ note, onDelete, onArchive, showFormattedDate }) {
  const navigate = useNavigate();
  const formattedDate = showFormattedDate(note.createdAt);

  return (
    <div className="note-card active">
      <div className="card-content">
        <div className="card-content__header">
          <h3>{note.title}</h3>
          <div className="detail-button" onClick={() => {
            navigate(`/detail/${note.id}`);
          }}>
            <GrFormNext />
          </div>
        </div>
        <p>
          {formattedDate} <br />
          <br />
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
