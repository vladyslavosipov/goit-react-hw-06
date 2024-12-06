import React from "react";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";

function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p className={s.text}>
          <FaUser /> {name}
        </p>
        <p className={s.text}>
          {" "}
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} className={s.button}>
        Delete
      </button>
    </div>
  );
}

export default Contact;