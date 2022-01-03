import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    firstLoad();
  }, []);

  const firstLoad = () => {
    fetch("http://localhost:7777/notes")
      .then((resp) => resp.json())
      .then(function (data) {
        setNotes(data);
      });
  };

  const onAdd = (props) => {
    let fetchData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 0,
        content: props,
      }),
    };
    fetch("http://localhost:7777/notes", fetchData).then((resp) => {
      if (resp.ok) {
        firstLoad();
      }
    });
  };

  const onHandleDelete = (id) => {
    fetch(`http://localhost:7777/notes/${id}`, { method: "DELETE" }).then(
      (resp) => {
        if (resp.ok) {
          firstLoad();
        }
      }
    );
  };
  return (
    <>
      <h1>Notes</h1>
      <button onClick={firstLoad}>update</button>
      <Notes onDelete={onHandleDelete} notes={notes} />
      <Form onSub={onAdd} />
    </>
  );
}

export default App;
