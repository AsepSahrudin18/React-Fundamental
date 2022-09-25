import React from "react";
import { Route, Routes } from "react-router-dom";

import AddNote from "../pages/AddNote";
import NoteFooter from "./NoteApp/NoteFooter";
import NoteHeader from "./NoteApp/NoteHeader";
import NoteActive from "../pages/NoteActive";
import NoteArchive from "../pages/NoteArchive";

import { getInitialData, showFormattedDate } from "./utils/data";
import DetailNote from "../pages/DetailNote";
import NotFound from "../pages/NotFound";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      query: "",
    };

    this.onQuerySubmitEventHandler = this.onQuerySubmitEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.onRestoreEventHandler = this.onRestoreEventHandler.bind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, newNote],
      };
    });
  }

  onQuerySubmitEventHandler(event, query) {
    event.preventDefault();
    this.setState({ query });
  }

  onArchiveEventHandler(id) {
    const currNotes = [...this.state.notes];
    const index = currNotes.findIndex((note) => note.id === id);
    currNotes[index].archived = true;
    this.setState({ notes: currNotes });
  }

  onRestoreEventHandler(id) {
    const currNotes = [...this.state.notes];
    const index = currNotes.findIndex((note) => note.id === id);
    currNotes[index].archived = false;
    this.setState({ notes: currNotes });
  }

  onDeleteEventHandler(id) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <NoteHeader
            query={this.state.query}
            onQuery={this.onQuerySubmitEventHandler}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <NoteActive
                  notes={this.state.notes}
                  query={this.state.query}
                  onDelete={this.onDeleteEventHandler}
                  onArchive={this.onArchiveEventHandler}
                  showFormattedDate={showFormattedDate}
                />
              }
            />

            <Route
              exact
              path="/archives"
              element={
                <NoteArchive
                  notes={this.state.notes}
                  query={this.state.query}
                  onDelete={this.onDeleteEventHandler}
                  onRestore={this.onRestoreEventHandler}
                  showFormattedDate={showFormattedDate}
                />
              }
            />

            <Route
              exact
              path="/add"
              element={<AddNote onAddNote={this.onAddNoteEventHandler} />}
            />

            <Route
              exact
              path="/detail/:id"
              element={
                <DetailNote notes={this.state.notes} showFormattedDate={showFormattedDate} />
              }
            />

            <Route exact path="*" element={<NotFound />} />
          </Routes>

          <NoteFooter />
        </div>
      </div>
    );
  }
}

export default NoteApp;
