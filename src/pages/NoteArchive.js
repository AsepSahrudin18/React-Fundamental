import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NoteCtnArchived from "../scripts/NoteMain/NoteCtnArchived";
import { useSearchParams } from "react-router-dom";

function NoteArchive({ notes, query, onDelete, onRestore, showFormattedDate }) {
  const [searchParams, setSearchparams] = useSearchParams();

  useEffect(() => {
    if (query) {
      setSearchparams({ title: query });
    }
  }, []);

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
