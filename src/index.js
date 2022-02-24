import nav from './nav'
import { footer } from './footer'
import makeButton from './button'
import { makeColorStyle } from './button-styles'
import './base.css'
import './button.css'
import './footer.css'

const button = makeButton('Yay! A Button')
button.style = makeColorStyle('steelblue')
document.body.appendChild(button)
document.body.appendChild(footer)
