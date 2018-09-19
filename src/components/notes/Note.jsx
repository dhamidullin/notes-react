import React, { Component } from "react";
import "./Note.css";

export default class NoteComponent extends Component {
  constructor(props) {
    super(props);

    this.expand = false;
    this.changed = false;

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    if (!this.props.note._id) {
    }
  }
  toggleEdit() {
    this.expand = !this.expand;
    this.expand = true;
    this.forceUpdate();
  }
  handleChange(e) {
    this.props.note["" + e.target.id] = "" + e.target.innerHTML;
    this.changed = true;
  }

  render() {
    return (
      <div className={`note-container ${this.expand ? "expand" : ""}`}>
        <div className="note" onClick={this.toggleEdit}>
          {(this.props.note.title || this.expand) && (
            <div
              className="title"
              role="textbox"
              id="title"
              contentEditable={this.expand}
              suppressContentEditableWarning={true}
              onKeyUp={this.handleChange}
            >
              {this.props.note.title}
            </div>
          )}
          <div
            className="body"
            role="textbox"
            id="body"
            contentEditable={this.expand}
            suppressContentEditableWarning={true}
            onKeyUp={this.handleChange}
          >
            {this.props.note.body}
          </div>
          <div className="buttons">
            {/* <i className="fas fa-edit">
              <span>Редактировать</span>
            </i> */}
            {this.changed && (
              <i className="fas fa-save">
                <span>Сохранить</span>
              </i>
            )}
            {this.changed && (
              <i className="fas fa-window-close">
                <span>Закрыть без изменений</span>
              </i>
            )}
            <i className="fas fa-bookmark">
              <span>В закладки</span>
            </i>
            <i className="fas fa-arrow-up">
              <span>Вверх</span>
            </i>
            <i className="fas fa-arrow-down">
              <span>Вниз</span>
            </i>
            <i className="far fa-trash-alt">
              <span>Удалить</span>
            </i>
          </div>
        </div>
      </div>
    );
  }
}
