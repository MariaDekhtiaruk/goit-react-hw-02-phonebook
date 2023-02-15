import PropTypes from 'prop-types';
const NumberInput = ({ title, number, onChange }) => {
  return (
    <>
      <h2>{title}</h2>
      <input
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onChange}
      />
    </>
  );
};

NumberInput.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string,
  onChange: PropTypes.func,
};
export default NumberInput;
