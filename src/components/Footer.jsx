import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <p>Más formas de comprar: Encuentra un Apple Store o un distribuidor cerca. O llama al 000800 040 1966.</p>
        <img src="./logo.svg" alt="Apple Logo"/>
      </div>

      <hr/>
      <div className='links'>
        <p>Copyright © 2024 Apple Inc. Todos los derechos reservados.</p>

        <ul>
          {footerLinks.map(({link, label}) =>(
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer