import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NoteApp extends React.Component {
  onSearchHandler(search) {
    console.log(search);
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader search={this.onSearchHandler} />
        <NoteBody />
      </div>
    );
  }
}

export default NoteApp;
