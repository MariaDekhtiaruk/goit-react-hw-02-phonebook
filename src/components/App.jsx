import React, { Component } from 'react';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';

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
      contacts: [...this.state.contacts, { ...contact, id: `id-${nanoid()}` }],
    });
  };
  deleteContact = contactId => {
    this.setState(prevContacts => ({
      contacts: prevContacts.contacts.filter(
        contact => contact.id !== contactId
      ),
    }));
    console.log(contactId);
  };
  render() {
    const { contacts } = this.state;

    return (
      <div>
        <Phonebook onAddContact={contact => this.addContact(contact)} />
        <Contacts
          onDeleteContact={contact => this.deleteContact(contact)}
          items={contacts}
        />
      </div>
    );
  }
}
