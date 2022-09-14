import React from "react";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import ActivedNoteList from "./ActivedNoteList";
import ArchivedNoteList from "./ArchivedNoteList";

class NoteBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // notes: getInitialData(),
      activednotes: getInitialData().filter((note) => note.archived === false),
      archivednotes: getInitialData().filter((note) => note.archived === true),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    // const thenotes = this.state.notes.filter((note) => note.id !== id);
    // this.setState({ thenotes });
    const activednotes = this.state.activednotes.filter((note) => note.id !== id);
    this.setState({ activednotes });
    const archivednotes = this.state.archivednotes.filter((note) => note.id !== id);
    this.setState({ archivednotes });
  }

  onArchiveHandler(id) {
    console.log("test archive");
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        // notes: [
        //   ...prevState.notes,
        //   {
        //     id: +new Date(),
        //     title,
        //     body,
        //     createdAt: +new Date(),
        //     archived: false,
        //   },
        // ],
        activednotes: [
          ...prevState.activednotes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <ActivedNoteList activednotes={this.state.activednotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        <h2>Arsip</h2>
        <ArchivedNoteList archivednotes={this.state.archivednotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </div>
    );
  }
}

export default NoteBody;
