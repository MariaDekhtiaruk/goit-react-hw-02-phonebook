import Section from './Section';
import NameInput from './NameInput';
import ContactItem from './ContactItem';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactPropType } from 'ContactPropType';

const isSubstringPresentInString = (string, substring) => {
  return string.toLowerCase().includes(substring.toLowerCase());
};

class Contacts extends Component {
  state = {
    filter: '',
  };

  onChangeHandler = evt => {
    console.log(evt.target.value);

    this.setState({ filter: evt.target.value });
  };

  render() {
    const { items, onDeleteContact } = this.props;
    const { filter } = this.state;

    return (
      <Section title="Contacts" childrenClassName="contacts">
        <NameInput
          title="Find contacts by name"
          onChange={this.onChangeHandler}
        ></NameInput>
        <ul className="list">
          {items
            .filter(item => isSubstringPresentInString(item.name, filter))
            .map(contactItem => {
              return (
                <ContactItem
                  contact={contactItem}
                  key={contactItem.id}
                  onDeleteContact={onDeleteContact}
                ></ContactItem>
              );
            })}
        </ul>
      </Section>
    );
  }
}

Contacts.propTypes = {
  items: PropTypes.arrayOf(ContactPropType),
  onDeleteContact: PropTypes.func,
};

export default Contacts;
