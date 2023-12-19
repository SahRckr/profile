import React from "react";

import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

import styles from "./hire-me.module.css";

const HireMe = () => (
  <Layout>
    <Head></Head>
    <div className={styles.hiremeContainer}>
      <h2>💼 Hire me:</h2>
      <span>
        I am looking for a new role and would appreciate your support. I am a
        front-end engineer by experience, I have over 6 years of experience
        building React apps, I have worked with GraphQL, AppSync, React-Native &
        Redux/Redux-Saga.
      </span>
      <iframe
        title="resume"
        src="./Sahil_Satishkumar_2023.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0"
        importance="low"
        loading="lazy"
        frameBorder="0"
      />
    </div>
  </Layout>
);

export default HireMe;
