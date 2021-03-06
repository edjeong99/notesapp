import React, { Component } from 'react';

// Presentational component for displaying edit note
class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
      id: ''
    };
    this.note = {};

    this.submitEdit = this.submitEdit.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      // get the note with corresponding id from URL
      this.note = this.props.notes.filter(
        item => Number(item.id) === Number(this.props.match.params.id)
      );
      this.setState({ ...this.note[0] }); // set state variables to this.note.  ie title=this.note.title
    } else {
      alert('wrong note ID');
      this.props.history.push('/');
    }
  }

  submitEdit = () => {
    this.props.submitEdit(this.state);
    this.props.history.push(`/Notes/${this.state.id}`); // change the URL to display the edited note
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='editNote'>
        <h2>Edit Notes : </h2>
        <form onSubmit={this.submitEdit}>
          <input
            onChange={this.handleInputChange}
            placeholder='title'
            value={this.state.title}
            name='title'
            size='50'
          />
          <textarea
            onChange={this.handleInputChange}
            placeholder='textBody'
            value={this.state.textBody}
            name='textBody'
          />

          <button type='submit'>Save</button>
        </form>
      </div>
    );
  }
}

export default EditNote;
