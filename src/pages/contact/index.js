import React from "react";

import Layout from "@theme/Layout";

import styles from "./contact.module.css";

const contacts = [
  {
    type: "E-mail (preferred)",
    text: "sahilsatishkumar [at] gmail [dot] com",
    href: "mailto:sahilsatishkumar@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/sahrckr",
    text: "in/sahrckr",
    type: "LinkedIn",
  },
  // {
  //   href: "https://twitter.com/sahrckr",
  //   text: "@sahrckr",
  //   type: "Twitter",
  // },
];

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contactContainer}>
        <h2>📣 Connect with me:</h2>
        <div>
          <table>
            <thead>
              <tr>
                {contacts.map((contact) => (
                  <th key={contact.type}>{contact.type}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {contacts.map((contact) => (
                  <td key={contact.type}>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.text}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
