import React from "react";
import NoteCtnActive from "../NoteMain/NoteCtnActive";

function NoteActive({ notes, query, onDelete, onArchive }) {
  return (
    <main>
      <div className="note-container">
        <NoteCtnActive
          notes={notes}
          query={query}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      </div>
    </main>
  );
}

export default NoteActive;
