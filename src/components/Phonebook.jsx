import Section from './Section';
import NameInput from './NameInput';
import NumberInput from './NumberInput';
import { Component } from 'react';
import PropTypes from 'prop-types';
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
        <form className="phonebook-form">
          <NameInput
            title="Name"
            value={contactName}
            onChange={this.onChangeName}
          ></NameInput>
          <NumberInput
            title="Number"
            value={number}
            onChange={this.onChangePhone}
          />
          <button
            type="submit"
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
        </form>
      </Section>
    );
  }
}
Phonebook.propTypes = {
  onAddContact: PropTypes.func,
};
export default Phonebook;
