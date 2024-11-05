import css from './Contact.module.css';

import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';

const Contact = ({ id, name, phone, onDelete }) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <li className={css.item}>
          <IoPerson />
          {name}
        </li>
        <li className={css.item}>
          <FaPhone />
          {phone}
        </li>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
