function Notes({ notes, onDelete }) {
  const onDeleteNote = (e) => {
    onDelete(e.target.dataset.id);
  };
  let notes_view = notes.map((item) => (
    <div className="note" key={item.id}>
      {item.content}
      <span
        name="item"
        data-id={item.id}
        onClick={onDeleteNote}
        className="delete"
      >
        X
      </span>
    </div>
  ));
  return <div className="wrap_notes">{notes_view}</div>;
}

export default Notes;
