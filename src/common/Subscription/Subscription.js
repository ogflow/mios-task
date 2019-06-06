import React from 'react'
import './Subscription.scss'
import Button from '../Button/Button'

const Subscription = () => (
  <div className='subscription-wrap'>
    <div className='subscription'>
      <h1>Subscribe to our newsletter</h1>
      <div className='subscribe-form'>

        <input className='subscription-input form-input' placeholder='E-mail'/>

        <div className='subscription-checkbox'>
          <CheckBox
            label={(
              <label>
                By ticking this box you agree to our<b><a href='?/terms'> Terms and Conditions</a></b>
              </label>
            )}
          />
        </div>
        
        <div className='subscription-button'>
          <Button title='SUBSCRIBE' type='clear' width={250}/>
        </div>

      </div>
    </div>
  </div>
)

const CheckBox = (props) => (
  <div className='form-check-wrap'>
    <input type='checkbox'/>
    <div className='form-check-mark'/>
    {props.label}
  </div>
)

export default Subscription