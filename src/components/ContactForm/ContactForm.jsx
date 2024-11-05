import css from './ContactForm.module.css';

import { Formik, Form, Field } from 'formik';

import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

const initial_values = {
  name: '',
  number: '',
  id: '',
};

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = ({ addContact }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initial_values}
        onSubmit={handleSubmit}
        validationSchema={ContactsSchema}
      >
        <Form className={css.form}>
          <label className={css.inputName} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          ></Field>
          <ErrorMessage
            className={css.err}
            name="name"
            component="span"
          ></ErrorMessage>

          <label className={css.inputName} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberFieldId}
          ></Field>
          <ErrorMessage
            className={css.err}
            name="number"
            component="span"
          ></ErrorMessage>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
