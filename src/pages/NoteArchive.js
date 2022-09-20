import React from "react";
import NoteCtnArchived from "../scripts/NoteMain/NoteCtnArchived";

function NoteArchive({ notes, query, onDelete, onRestore, showFormattedDate }) {
  return (
    <main>
      <div className="note-container">
        <NoteCtnArchived
          notes={notes}
          query={query}
          onDelete={onDelete}
          onRestore={onRestore}
          showFormattedDate={showFormattedDate}
        />
      </div>
    </main>
  );
}

export default NoteArchive;
