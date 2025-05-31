import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import css from "./contactForm.module.css";

export const ContactForm = ({onAdd}) => {

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short! Minimum 3 characters.")
      .max(50, "Too Long! Maximum 50 characters.").required("Required"),
    number: Yup.string()
      .min(9, "Too short! Minimum 3 characters.")
      .max(9, "Too long! Maximum 50 characters.").required("Required"),
});


  const initialValues = {
    name: '',
    number: ''
  };


  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
		onAdd(values);
		actions.resetForm();
	};


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}>
      <Form className={css.form}>
        <div className={css.label}>
          <label htmlFor={nameFieldId}>Username</label>
          <Field className={css.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" as="span" />
        </div>
        <div className={css.label}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field className={css.field} type="tel" name="number" id={numberFieldId} />
          <ErrorMessage name="number" as="span" />
        </div>
        <button className={css.btn} type="submit">Add contact</button>
			</Form>
    </Formik>
  );
};




