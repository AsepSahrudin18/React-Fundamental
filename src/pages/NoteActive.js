import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NoteCtnActive from "../scripts/NoteMain/NoteCtnActive";
import { useSearchParams } from "react-router-dom";

function NoteActive({ notes, query, onDelete, onArchive, showFormattedDate }) {
  const [searchParams, setSearchparams] = useSearchParams();

  useEffect(() => {
    if (query) {
      setSearchparams({ title: query });
    }
  }, []);

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

NoteActive.propTpes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};

export default NoteActive;
