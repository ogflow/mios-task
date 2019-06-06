import React from 'react'
import './Footer.scss'

const Footer = () => (
  <div className='footer-wrap'>
    <div className='footer'>

      <div className='footer-menu'>
        <p className='hidden-phone'>
          Follow us on social media
        </p>
        <div className='footer-social'>
          <SocialMediaIcon
            src={require('../../assets/img/facebook.svg')}
            url={'https://facebook.com'}
          />
          <SocialMediaIcon
            src={require('../../assets/img/instagram.svg')}
            url={'https://instagram.com'}
          />
          <SocialMediaIcon
            src={require('../../assets/img/pinterest.svg')}
            url={'https://pinterest.com'}
          />
          <SocialMediaIcon
            src={require('../../assets/img/VK.svg')}
            url={'https://vk.com'}
          />
        </div>

        <div className='footer-links-wrap'>
          <div className='footer-links-title'>
            <span>Country and language</span>
            <img alt='Open footer links.'
              className='footer-links-title-arrow'
              src={require('../../assets/img/arrow-down.svg')}/>
          </div>
          <div className='footer-links-stack'>
            <a href='?' className='footer-lang-wrap'>
              <img
                src={require('../../assets/img/Finland.svg')}
                className='footer-language-img'
                alt='Language'/>
              <span>Suomeksi</span>
            </a>
          </div>
        </div>
        
      </div>

      <LinksStack
        title='Customer Service'
        links={linksCustomerService}
      />

      <LinksStack
        title='About Dermosil'
        links={linksAboutDermosil}
      />

      <LinksStack
        title='Payment and Delivery'
        links={linksPaymentAndDelivery}
      />

    </div>

    <div className='footer-copyright'>
      © DERMOSIL OY
    </div>
  </div>
)

const LinksStack = ({ links, title }) => (
  <div className='footer-links-wrap'>
    <div className='footer-links-title'>
      <span>{title}</span>
      <img alt='Open footer links.'
        className='footer-links-title-arrow'
        src={require('../../assets/img/arrow-down.svg')}/>
    </div>
    <ul className='footer-links-stack'>
      {
        links.map(lnk => (
          <a key={lnk.url}
            href={`?/${lnk.url}`}>
            <li className='footer-link'>
              {lnk.name}
            </li>
          </a>
        ))
      }
    </ul>
  </div>
)

const SocialMediaIcon = ({ url, src, alt }) => (
  <a href={url}
    className='footer-social-item'>
    <img src={src} alt={alt || 'Link to social media.'}/>
  </a>  
)

const linksCustomerService = [
  { name: 'Link to page', url: '/page' },
  { name: 'Agreeement', url: '/Agreeement' },
  { name: 'Service', url: '/Service' },
  { name: 'Need a help?', url: '/Need a help?' },
]
const linksAboutDermosil = [
  { name: 'Our team', url: '/page' },
  { name: 'About company', url: '/Agreeement' },
  { name: 'Service', url: '/Service' },
  { name: 'Need a help?', url: '/Need a help?' },
]
const linksPaymentAndDelivery = [
  { name: 'Delivery', url: '/page' },
  { name: 'Payment', url: '/Agreeement' },
  { name: 'Offer', url: '/Service' },
  { name: 'Need a help?', url: '/Need a help?' },
]

export default Footer