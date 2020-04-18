import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./styles.module.css";
import logo from "src/static/images/logo.svg";

type SearchBarProps = {
  search: (character: string) => void;
};

const SearchBar = (props: SearchBarProps) => {
  const { search } = props;
  const [searchString, setSearchString] = useState("");

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") search(searchString);
    event.preventDefault();
  };

  return (
    <AppBar className={styles.searchBar}>
      <Toolbar className={styles.container}>
        <img className={styles.logo} src={logo} alt="Logo Marvel" />
        <div className={styles.searchContainer}>
          <InputBase
            className={styles.input}
            placeholder="Pesquisar personagem..."
            inputProps={{
              "aria-label": "pesquisar personagem",
              onKeyPress: (event) => handleKeyPress(event),
            }}
            onChange={(event) => setSearchString(event.currentTarget.value)}
          />
          <IconButton
            aria-label="pesquisar personagem"
            onClick={(event) => {
              event.preventDefault();
              search(searchString);
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;
