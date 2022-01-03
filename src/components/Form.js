function Form({ onSub }) {
  const onAddNote = (e) => {
    e.preventDefault();
    onSub(e.target.note.value);
    e.target.note.value = "";
  };

  return (
    <form onSubmit={onAddNote}>
      <input type="text" name="note" />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
