import React from "react";
import NoteItem from "./NoteItem";

function ActivedNoteList({ activednotes, onDelete, onArchieve }) {
  console.log(onDelete);
  console.log(onArchieve);
  if (activednotes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  } else {
    return (
      <div className="notes-list">
        {activednotes.map((note) => (
          <NoteItem key={note.id} id={note.id} archived={note.archived} onDelete={onDelete} onArchive={onArchieve} {...note} />
        ))}
      </div>
    );
  }
}

export default ActivedNoteList;
