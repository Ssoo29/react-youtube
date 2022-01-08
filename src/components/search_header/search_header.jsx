import React, { useRef } from "react";
import styles from "./search_header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    onSearch(inputRef.current.value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header} 
    onKeyPress={onKeyPress}>
      <div className={styles.logo}>
        <FontAwesomeIcon className={styles.img} icon={faYoutube} size="2x" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
      />
      <button
        className={styles.button}
        type="submit"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faSearch} className="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
