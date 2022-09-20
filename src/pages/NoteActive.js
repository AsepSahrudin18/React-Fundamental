import React from "react";
import NoteCtnActive from "../scripts/NoteMain/NoteCtnActive";

function NoteActive({ notes, query, onDelete, onArchive, showFormattedDate }) {
  return (
    <main>
      <div className="note-container">
        <NoteCtnActive
          notes={notes}
          query={query}
          onDelete={onDelete}
          onArchive={onArchive}
          showFormattedDate={showFormattedDate}
        />
      </div>
    </main>
  );
}

export default NoteActive;
