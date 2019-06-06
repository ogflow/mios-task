import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './home/Home'
import Quiz from './quiz/Quiz'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/quiz/' component={Quiz} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter