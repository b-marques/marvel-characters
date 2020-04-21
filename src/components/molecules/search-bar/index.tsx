import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

import styles from './styles.module.css'
import logo from 'src/static/images/logo.svg'

type SearchBarProps = {
  doSearch: (character: string) => void
  searchTerm: string
}

const SearchBar = (props: SearchBarProps) => {
  const { doSearch, searchTerm } = props
  const [searchString, setSearchString] = useState(searchTerm)

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key === 'Enter') doSearch(searchString)
  }

  return (
    <AppBar data-testid="search-bar" className={styles.searchBar}>
      <Toolbar className={styles.container}>
        <img className={styles.logo} src={logo} alt="Logo Marvel" />
        <div className={styles.searchContainer}>
          <InputBase
            className={styles.input}
            placeholder="Pesquisar personagem..."
            defaultValue={searchString}
            inputProps={{
              onKeyPress: event => handleKeyPress(event),
            }}
            onChange={event => setSearchString(event.currentTarget.value)}
          />
          <IconButton
            aria-label="pesquisar"
            data-testid="search-button"
            onClick={event => {
              event.preventDefault()
              doSearch(searchString)
            }}>
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default SearchBar
