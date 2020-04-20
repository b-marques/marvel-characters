import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

import { useQuery } from 'src/utils/hooks/useQuery'
import styles from './styles.module.css'
import logo from 'src/static/images/logo.svg'

type SearchBarProps = {
  doSearch: (character: string) => void
}

const SearchBar = (props: SearchBarProps) => {
  const { doSearch } = props
  const query = useQuery()
  const [searchString, setSearchString] = useState(
    query.get('search') !== null ? String(query.get('search')) : '',
  )

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key === 'Enter') doSearch(searchString)
  }

  return (
    <AppBar className={styles.searchBar}>
      <Toolbar className={styles.container}>
        <img className={styles.logo} src={logo} alt="Logo Marvel" />
        <div className={styles.searchContainer}>
          <InputBase
            className={styles.input}
            placeholder="Pesquisar personagem..."
            defaultValue={searchString}
            inputProps={{
              'aria-label': 'pesquisar personagem',
              onKeyPress: event => handleKeyPress(event),
            }}
            onChange={event => setSearchString(event.currentTarget.value)}
          />
          <IconButton
            aria-label="pesquisar personagem"
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
