const ContactItem = ({ contactName, phone, id, onDeleteContact }) => {
  return (
    <li>
      {contactName}: {phone}
      <button
        type="button"
        className="button-delete"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
