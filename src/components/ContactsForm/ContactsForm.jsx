import React, { Component } from 'react';
import { nanoid } from 'nanoid'

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isContactExists = this.props.addContact({id: nanoid(6), ...this.state});
    if(!isContactExists) {
        this.reset();
    }
    
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  reset = () => {
    this.setState({
        name: '',
        number: '',
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Name
        <input
        onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
        />
        </label>
        <label>
            Number
        <input
        onChange={this.handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
        />
        </label>
        <button type='submit'>Add Contact</button>
      </form>
    );
  }
}
