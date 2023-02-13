import Section from './Section';
import NameInput from './NameInput';
const Phonebook = () => {
  return (
    <Section title="Phonebook" childrenClassName="phonebook">
      <NameInput title="Name"></NameInput>
      <h2>Number</h2>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="button" className="button-add">
        Add Contact
      </button>
    </Section>
  );
};
export default Phonebook;
