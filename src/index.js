import nav from './nav'
import { top, bottom } from './footer'
import makeButton from './button'
import { makeColorStyle } from './button-styles'

const button = makeButton('Yay! A Button')
document.body.appendChild(button)
