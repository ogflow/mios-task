import React from 'react'
import './Header.scss'

class Header extends React.Component {

  render () {
    const textLinks = this.renderTextLinks(headerTextLinks)

    return (
      <div className='header-wrap'>
        <div className='header-body'>
    
          <div className='header-top-bar'>
            <a href='?'>Customer Service</a>
            <a href='?' className='header-lang-wrap'>
              <img
                src={require('../../assets/img/Finland.svg')}
                className='header-language-img'
                alt='Language'/>
              <span>Suomeksi</span>
            </a>
          </div>
    
          <div className='header-menu-bar'>
    
            <IconButton
              src={require('../../assets/img/menu.svg')}
              alt='Menu.'
            />
    
            <ul className='header-text-links-wrap'>
              {textLinks}
            </ul>

            <div className='header-search-wrap'>
              <input
                className='header-search-input'
                type='search'
                placeholder='Search...'
              />
              <IconButton
                src={require('../../assets/img/search.svg')}
                alt='Shopping cart.'
              />
            </div>
    
            <div className='header-logo-wrap'>
              <img src={require('../../assets/img/logo.svg')} alt='Logo'/>
            </div>

            <IconButton
              src={require('../../assets/img/user.svg')}
              alt='User account.'
              style={{ marginRight: 16 }}
            />

            <IconButton
              src={require('../../assets/img/cart.svg')}
              alt='Shopping cart.'
            />
            
          </div>
    
        </div>
      </div>
    )
  }

  renderTextLinks = (textLinks) => (
    textLinks.map(link => (
      <a href={link.href} key={link.href}>
        <li className='header-text-link'>{link.title}</li>
      </a>
    ))
  )

}

const IconButton = (props) => (
  <div {...props} className='header-icon-button'>
    <img alt={props.alt} src={props.src}/>
  </div>
)

const headerTextLinks = [
  {
    title: 'Skincare',
    href: '?/skincare'
  },
  {
    title: 'Hair',
    href: '?/hair'
  },
  {
    title: 'Makeup',
    href: '?/makeup'
  },
  {
    title: 'Supplements',
    href: '?/supplements'
  },
  {
    title: 'Home',
    href: '?/home'
  },
  {
    title: 'Series',
    href: '?/series'
  },
]

export default Header