import React from "react";
import PropTypes from "prop-types";
import NoteCardActive from "../NoteCard/NoteCardActive";

function filterActive(notes, query) {
  return notes.filter((note) => {
    return note.archived === false && note.title.toLowerCase().includes(query);
  });
}

function NoteCtnActive({
  notes,
  query,
  onDelete,
  onArchive,
  showFormattedDate,
}) {
  const filteredNotes = filterActive(notes, query);

  return (
    <div className="note-container__active">
      <h2>Active Note</h2>
      <div className="note-container__card">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => {
            return (
              <NoteCardActive
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                showFormattedDate={showFormattedDate}
              />
            );
          })
        ) : (
          <div className="empty">
            <p>Tidak Ada Data Active Yang Tersedia</p>
          </div>
        )}
      </div>
    </div>
  );
}

NoteCtnActive.propTpes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};

export default NoteCtnActive;
