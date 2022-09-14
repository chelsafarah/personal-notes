import React from "react";

class NoteHeader extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      search: "",
    };

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
    this.props.search(event.target.value);
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input type="text" placeholder="Cari catatan..." value={this.state.search} onChange={this.onSearchChangeEventHandler} />
        </div>
      </div>
    );
  }
}

export default NoteHeader;
