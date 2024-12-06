import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        ...values,
        id: nanoid(),
      })
    );
    actions.resetForm();
  };

  const orderSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).max(50).required(),
  });
  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span> Name</span>
            <Field
              type="text"
              name="name"
              className={s.field}
              placeholder="Name"
            ></Field>
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>

          <label className={s.label}>
            <span>Number</span>
            <Field
              type="text"
              name="number"
              className={s.field}
              placeholder="XXX-XX-XX"
            ></Field>
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>

          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;