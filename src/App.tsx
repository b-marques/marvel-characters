import React from 'react'

import { Switch, Route, useLocation, useHistory, Redirect } from 'react-router-dom'
import { CSSTransition as OriginalCSSTransition, TransitionGroup } from 'react-transition-group'

import './styles/styles.css'
import styles from './App.module.css'
import transition from 'src/styles/transitions/appear.module.css'

import HomePage from 'src/components/pages/home-page'
import DetailsPage from 'src/components/pages/details-page'

class CSSTransition extends OriginalCSSTransition {
  onEntered = () => {}
}

const App = () => {
  const location = useLocation()
  const history = useHistory()

  const background = location.state && (location.state as any).background
  let position = {}
  if (background) {
    position = (location.state as any).meta.from
  }

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/" children={<HomePage />} />
        <Route path="*" children={<HomePage />} />
      </Switch>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} timeout={200} classNames={transition}>
          <Switch location={location}>
            <Route
              path="/:character/details"
              render={() =>
                history.action === 'PUSH' ? (
                  <div className={styles.modal} style={position}>
                    <DetailsPage />
                  </div>
                ) : (
                  <Redirect to="/" />
                )
              }></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default App
