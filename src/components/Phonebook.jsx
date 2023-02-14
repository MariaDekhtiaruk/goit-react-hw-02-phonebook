import Section from './Section';
import NameInput from './NameInput';
import { Component } from 'react';

class Phonebook extends Component {
  state = {
    contactName: '',
    number: '',
  };
  onChangeName = evt => {
    this.setState({ contactName: evt.target.value });
  };
  onChangePhone = evt => {
    this.setState({ number: evt.target.value });
  };

  render() {
    const { onAddContact } = this.props;
    const { contactName, number } = this.state;
    console.log(this.state);
    return (
      <Section title="Phonebook" childrenClassName="phonebook">
        <NameInput
          title="Name"
          value={contactName}
          onChange={this.onChangeName}
        ></NameInput>
        <input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onChangePhone}
        />
        <button
          type="button"
          className="button-add"
          onClick={() => {
            onAddContact({ name: contactName, number });
            this.setState({
              contactName: '',
              number: '',
            });
          }}
        >
          Add Contact
        </button>
      </Section>
    );
  }
}
export default Phonebook;
