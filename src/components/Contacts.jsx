import Section from './Section';
import NameInput from './NameInput';
import ContactItem from './ContactItem';

const mockContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const Contacts = () => {
  return (
    <Section title="Contacts" childrenClassName="contacts">
      <NameInput title="Find contacts by name"></NameInput>
      <ul>
        {mockContacts.map(contactItem => {
          return (
            <ContactItem
              key={contactItem.id}
              contactName={contactItem.name}
              phone={contactItem.number}
            ></ContactItem>
          );
        })}
      </ul>
    </Section>
  );
};
export default Contacts;
