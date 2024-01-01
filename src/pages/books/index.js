import React from "react";
import Layout from "@theme/Layout";

import { useScript } from "./_useScript.js";
import { widgets } from "./_goodread_constants.js";

import styles from "./books.module.css";

function Books() {
  useScript(widgets.CURRENTLY_READING, { removeOnUnmount: true });
  useScript(widgets.MUST_READ, { removeOnUnmount: true });
  useScript(widgets.READ, { defer: true, removeOnUnmount: true });

  return (
    <Layout title="Bookshelf">
      <div className={styles.bookshelf}>
        <h2>
          <a
            rel="nofollow"
            href="https://www.goodreads.com/review/list/73366453-sahil-satishkumar?shelf=currently-reading&utm_medium=api&utm_source=grid_widget"
          >
            Currently Reading:
          </a>
        </h2>
        <div id="gr_grid_widget_1587903274">
          <div className="gr_grid_container" />
        </div>
        <h2>
          <a
            rel="nofollow"
            href="https://www.goodreads.com/review/list/73366453-sahil-satishkumar?shelf=must-read&utm_medium=api&utm_source=grid_widget"
          >
            Recommended:
          </a>
        </h2>
        <div id="gr_grid_widget_1702986163">
          <div className="gr_grid_container" />
        </div>
        <h2>
          <a
            rel="nofollow"
            href="https://www.goodreads.com/review/list/73366453-sahil-satishkumar?shelf=read&utm_medium=api&utm_source=grid_widget"
          >
            Read:
          </a>
        </h2>
        <div id="gr_grid_widget_1587903573">
          <div className="gr_grid_container" />
        </div>
      </div>
      <div className="gr_grid_branding">
        <a
          className=""
          rel="nofollow"
          href="https://www.goodreads.com/user/show/73366453-sahil-satishkumar"
        >
          Sahil Satishkumar's favorite books »
        </a>
      </div>
    </Layout>
  );
}

export default Books;
