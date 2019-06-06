import React from 'react'
import { Link } from 'react-router-dom'
import '../Quiz.scss'

const QuizWelcome = (props) => {
  const name = props.location.state.name
  return (
    <div className='quiz-wrap'>
      <h1>Welcome, {name}</h1>
      <img alt='Wave hand.'
        className='quiz-wave-hand'
        src={require('../../assets/img/quiz/emoji-wave-hand.png')}/>
    </div>
  )
}

export default QuizWelcome