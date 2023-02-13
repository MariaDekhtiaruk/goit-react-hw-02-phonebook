const ContactItem = ({ contactName, phone }) => {
  return (
    <li>
      {contactName}: {phone}
      <button type="button" className="button-delete">
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
