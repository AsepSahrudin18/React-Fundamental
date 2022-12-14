import React from "react";
import PropTypes from "prop-types";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";

function findNote(notes, id) {
  return notes.filter((note) => note.id === id);
}

function DetailNote({ notes, showFormattedDate }) {
  const params = useParams();
  const { id } = params;

  const [note] = findNote(notes, Number(id));

  if (note === undefined) {
    return <NotFound />;
  }

  const formattedDate = showFormattedDate(note.createdAt);

  return (
    <main>
      <div className="detail-container">
        <h1>{note.title}</h1>
        <p>
          {formattedDate} - {note.archived ? "Archived" : "Active"}{" "}
        </p>
        <p>{note.body}</p>
      </div>
    </main>
  );
}

DetailNote.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  showFormattedDate: PropTypes.func.isRequired,
}

export default DetailNote;
