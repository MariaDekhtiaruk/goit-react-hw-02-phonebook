import React, { Component } from 'react';
import Phonebook from './Phonebook';
import Contacts from './Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  addContact = contact => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { ...contact, id: `id-${this.state.contacts.length + 1}` },
      ],
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Phonebook onAddContact={contact => this.addContact(contact)} />
        <Contacts items={contacts} />
      </div>
    );
  }
}
