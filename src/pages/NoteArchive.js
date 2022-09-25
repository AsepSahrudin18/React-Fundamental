import React from "react";
import PropTypes from "prop-types";
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

NoteArchive.propTpes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};

export default NoteArchive;
