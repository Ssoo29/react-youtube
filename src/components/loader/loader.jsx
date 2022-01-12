import React from "react";
import styles from "./loader.module.css";
import Spinner from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={styles.container}>
      <Spinner type="Oval" color="#3498db"/>
    </div>
  );
};

export default Loader;
