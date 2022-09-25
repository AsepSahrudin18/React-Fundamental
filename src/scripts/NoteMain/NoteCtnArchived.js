import React from "react";
import PropTypes from "prop-types";
import NoteCardArchived from "../NoteCard/NoteCardArchived";

function filterArchived(notes, query) {
  return notes.filter((note) => {
    return note.archived === true && note.title.toLowerCase().includes(query);
  });
}

function NoteCtnArchived({
  notes,
  query,
  onDelete,
  onRestore,
  showFormattedDate,
}) {
  const filteredNotes = filterArchived(notes, query);

  return (
    <div className="note-container__archived">
      <h2>Archived Note</h2>
      <div className="note-container__card">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => {
            return (
              <NoteCardArchived
                key={note.id}
                note={note}
                onDelete={onDelete}
                onRestore={onRestore}
                showFormattedDate={showFormattedDate}
              />
            );
          })
        ) : (
          <div className="empty">
            <p>Tidak Ada Data Archived Yang Tersedia</p>
          </div>
        )}
      </div>
    </div>
  );
}

NoteCtnArchived.propTpes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};

export default NoteCtnArchived;
