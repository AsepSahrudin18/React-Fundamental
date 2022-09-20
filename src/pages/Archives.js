import React from "react";
import NoteCtnArchived from "../scripts/NoteMain/NoteCtnArchived";

function NoteArchive({ notes, query, onDelete, onRestore }) {
  return (
    <main>
      <div className="note-container">
        <NoteCtnArchived
          notes={notes}
          query={query}
          onDelete={onDelete}
          onRestore={onRestore}
        />
      </div>
    </main>
  );
}

export default NoteArchive;
