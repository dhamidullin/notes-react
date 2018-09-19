import React, { Component } from "react";
import "./Notes.css";

import NoteComponent from "./Note.jsx";

export default class NotesComponent extends Component {
  constructor(props) {
    super(props);
    this.notes = [
      {
        _id: "aaaaaaaaaaaaaaaaaa",
        title: "Sunt 1 mollit cillum minim culpa aliqua ad.",
        body:
          "111 Qui laboris tempor est laboris. Laboris cupidatat enim mollit cupidatat veniam labore. Sunt incididunt enim ad tempor nulla sunt commodo dolor duis consequat officia irure culpa. Quis veniam ullamco deserunt exercitation enim voluptate dolor. Magna duis in proident duis reprehenderit deserunt minim excepteur proident eiusmod. Ex sit duis aliquip in eu."
      },
      {
        _id: "bbbbbbbbbbbbbbbbb",
        title: "Sunt 2 mollit cillum minim culpa aliqua ad.",
        body:
          "222 Qui laboris tempor est laboris. Laboris cupidatat enim mollit cupidatat veniam labore. Sunt incididunt enim ad tempor nulla sunt commodo dolor duis consequat officia irure culpa. Quis veniam ullamco deserunt exercitation enim voluptate dolor. Magna duis in proident duis reprehenderit deserunt minim excepteur proident eiusmod. Ex sit duis aliquip in eu."
      },
      {
        _id: "ccccccccccccccccc",
        title: "Sunt 3 mollit cillum minim culpa aliqua ad.",
        body:
          "333 Qui laboris tempor est laboris. Laboris cupidatat enim mollit cupidatat veniam labore. Sunt incididunt enim ad tempor nulla sunt commodo dolor duis consequat officia irure culpa. Quis veniam ullamco deserunt exercitation enim voluptate dolor. Magna duis in proident duis reprehenderit deserunt minim excepteur proident eiusmod. Ex sit duis aliquip in eu."
      }
    ];
  }

  render() {
    return (
      <div className="notes-container">
        <NoteComponent
          note={{
            title: "Новая заметка",
            body: ""
          }}
          key="new-note"
        />
        {this.notes.map((note, i) => {
          note.index = i;
          return <NoteComponent note={note} key={note._id} />;
        })}
      </div>
    );
  }
}
