import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './styles/styles.css'

import HomePage from 'src/components/pages/home-page'
import DetailsPage from 'src/components/pages/details-page'
import EditPage from 'src/components/pages/edit-page'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/characters/:characterId/:characterName/details" component={DetailsPage} />
        <Route path="/characters/:characterId/:characterName/edit" component={EditPage} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
