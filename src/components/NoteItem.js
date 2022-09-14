import React from "react";
import NoteItemContent from "./NoteItemContent";
import ActionButton from "./ActionButton";

function NoteItem({ title, body, createdAt, id, archived, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <ActionButton id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NoteItem;
