import React from "react";
import PropTypes from "prop-types";
import NoteForm from "../scripts/NoteMain/NoteForm";

function AddNote({ onAddNote }) {
  return (
    <main>
      <div className="note-form">
        <NoteForm onAddNote={onAddNote} />
      </div>
    </main>
  );
}

AddNote.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default AddNote;
