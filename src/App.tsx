import React from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import 'src/styles/styles.css'

import HomePage from 'src/pages/home-page'
import DetailsPage from 'src/pages/details-page'
import EditPage from 'src/pages/edit-page'

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
