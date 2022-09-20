import React from "react";
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

export default AddNote;
