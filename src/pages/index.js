import React from "react";
import Layout from "@theme/Layout";

import styles from "./home.module.css";

const socials = [
  { label: "GitHub", href: "https://github.com/SahRckr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sahrckr" },
  { label: "Email", href: "mailto:sahilsatishkumar@gmail.com" },
];

function Home() {
  return (
    <Layout wrapperClassName={styles.wrapper}>
      <main className={styles.main}>
        <ul className={styles.socials}>
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default Home;
