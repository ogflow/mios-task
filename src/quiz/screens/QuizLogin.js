import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Quiz.scss'
import { Button } from '../../common'

const QuizLogin = () => {
  const [name, setName] = useState('')
  return (
    <div className='quiz-wrap'>
      <div className='quiz-login-wrap'>
        
        <h1>Hello!<br/>What is your name?</h1>

        <input
          className='form-input'
          onChange={(e) => setName(e.target.value)}
        />

        <Link to={{
          pathname: "/quiz/welcome",
          state: { name }
        }}>
          <Button title='NEXT' type='clear' size={250}/>
        </Link>

      </div>
    </div>
  )
}

export default QuizLogin