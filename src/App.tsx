import React from 'react'

import { Switch, Route } from 'react-router-dom'

import './styles/styles.css'

import HomePage from 'src/components/pages/home-page'
import DetailsPage from 'src/components/pages/details-page'
import EditPage from 'src/components/pages/edit-page'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" children={<HomePage />} />
        <Route path="/characters/:characterId/:characterName/details" component={DetailsPage} />
        <Route path="/characters/:characterId/:characterName/edit" component={EditPage} />
        <Route path="*" children={<HomePage />} />
      </Switch>
    </>
  )
}

export default App
