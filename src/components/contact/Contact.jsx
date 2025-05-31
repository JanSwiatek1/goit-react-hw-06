import css from './contact.module.css';

export const Contact = ({ contact, onDelete }) => {
  return (

    <li className={css.item}>
      <ul className={css.data}>
        <li>
          {contact.name}
        </li>
        <li>
          {contact.number}
          </li>
        </ul>
      <button
        type="button"
        onClick={() => onDelete(contact.id)}
        className={css.button}
      >
        Delete
      </button>
      </li>
      
  );
};

export default Contact;