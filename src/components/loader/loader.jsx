import React from "react";
import styles from "./loader.module.css";
import { List } from "react-content-loader";

const Loader = () => {
  return (
    <div className={styles.container}>
      <List></List>
    </div>
  );
};

export default Loader;
