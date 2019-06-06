import React, { useState } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import { Button, Footer, Header, Subscription } from '../common'

const Home = () => (
  <>
    <Header/>
    <HomeScreen/>
    <Subscription/>
    <Footer/>
  </>
)

const HomeScreen = () => {
  const [fact, setFact] = useState(0)
  const description = doYouKnowData[fact]

  if (!description) {
    setFact(0)
  }

  return (
    <div className='home-wrap'>
      
      <div className='home-hero-wrap'>
        <div className='home-hero-left'>
          <div className='home-hero-quiz-wrap'>
            <h1 className='home-hero-title'>
              Want to know more about your hair? So do we.
            </h1>
            <p className='home-hero-text'>Take our hair professional quiz to find out and discover the hair product that's right for you.</p>
            <img alt='Arrow'
              className='home-hero-arrow'
              src={require('../assets/img/long-arrow-down.svg')}
            />
            <Link to='/quiz'>
              <Button title='TAKE THE QUIZ'/>
            </Link>
          </div>
        </div>
        <div className='home-hero-right'>
          <img 
            className='home-img-fluid'
            src={require('../assets/img/home/picture-1.jpg')}
            alt='Take a quiz.'/>
        </div>
      </div>
  
      <HomeScreenSection
        imageSrc={require('../assets/img/home/picture-2.jpg')}
        title='Discover our hair products'
        description="Keep in mind that you can also affect your hair's well-being with healthy lifestyle and eating habits. The Health Series Halt and Nails supplement enhances hair and promotes normal hair growth. It contains, among other things, essential silicic acid, amino acids and vitamin B5 for hair."
        descriptionClassName='home-section-text hidden-phone'
        bottomElement={
          <Button title='DISCOVER' type='clear' width={250} />
        }
      />
  
      <HomeScreenSection
        imageSrc={require('../assets/img/home/pircture-3.jpg')}
        title='Do you know ... ?'
        description={description}
        bottomElement={
          <div className='home-controls-wrap'>
            <div
              className='home-control-arrow'
              onClick={() => setFact(fact - 1)}>
              <img src={require('../assets/img/left-arrow.svg')} alt='Left'/>
            </div>
            <div
              className='home-control-arrow'
              onClick={() => setFact(fact + 1)}>
              <img src={require('../assets/img/right-arrow.svg')} alt='Right'/>
            </div>
          </div>
        }
        isReversed={true}
      />
  
    </div>
  )
}

const HomeScreenSection = (props) => (
  <div className='home-section-wrap'>
    <div className={
      `home-section ${props.isReversed ? 'reversed' : ''}`
    }>
      <div className='home-section-img-wrap'>
        <div className='home-section-img'>
          <img alt='Discover products.'
            src={props.imageSrc}/>
        </div>
      </div>

      <div className='home-section-textbox-wrap'>
        <div className={
          `home-section-textbox ${!props.isReversed ? 'reversed' : ''}`
        }>
          <h2 className='home-section-title'>
            {props.title}
          </h2>
          <p className={
            props.descriptionClassName || 'home-section-text'
          }>
            {props.description}
          </p>
          {
            props.bottomElement
          }
        </div>
      </div>
    </div>
  </div>
)

const doYouKnowData = [
  "Keep in mind that you can also affect your hair's well-being with healthy lifestyle and eating habits. The Health Series Halt and Nails supplement enhances hair and promotes normal hair growth. It contains, among other things, essential silicic acid, amino acids and vitamin B5 for hair.",

  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis molestie quam.",

  "Vestibulum hendrerit mattis felis. Nunc lobortis eu ante non rutrum. Maecenas sed aliquam magna, at lacinia enim. Fusce nec pellentesque neque.",

  "Nam congue, urna ut dictum laoreet, quam ipsum tempus enim, ut aliquam eros diam sed erat."
]

export default Home