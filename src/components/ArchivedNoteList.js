import React from "react";
import NoteItem from "./NoteItem";

function ArchivedNoteList({ archivednotes, onDelete, onArchieve }) {
  if (archivednotes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  } else {
    return (
      <div className="notes-list">
        {archivednotes.map((note) => (
          <NoteItem key={note.id} id={note.id} archived={note.archived} onDelete={onDelete} onArchive={onArchieve} {...note} />
        ))}
      </div>
    );
  }
}

export default ArchivedNoteList;
