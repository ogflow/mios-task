import React from 'react'
import { Route } from 'react-router-dom'
import { Footer, Header, Subscription } from '../common'

import {
  QuizLogin,
  QuizWelcome,
} from './screens'

const Quiz = () => (
  <>
    <Header/>
    <QuizRouter/>
    <Subscription/>
    <Footer/>
  </>
)

const QuizRouter = (props) => (
  <>
    <Route path='/quiz' exact component={QuizLogin}/>
    <Route path='/quiz/welcome' component={QuizWelcome}/>
  </>
)

export default Quiz