import React from "react";
import PropTypes from "prop-types";

class NoteSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  onQueryChangeEventHandler(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div className="search-bar">
        <form
          id="search-notes"
          onSubmit={(event) => this.props.onQuery(event, this.state.query)}
        >
          <div className="search-column">
            <input
              type="text"
              id="search-input"
              placeholder="Type your note"
              onChange={(e) => {
                this.onQueryChangeEventHandler(e);
              }}
            />
          </div>
          <div className="submit-column">
            <button type="submit">
              <span className="material-symbols-outlined"> search </span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

NoteSearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onQuery: PropTypes.func.isRequired,
};

export default NoteSearchBar;
