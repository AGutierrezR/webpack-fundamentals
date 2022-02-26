import nav from './nav'
import { footer } from './footer'
import makeButton from './button'
import { makeColorStyle } from './button-styles'
import makeImage from './images'
import Foo from './foo.ts'

const foo = new Foo()

console.log(foo.bar)

import './webpack-logo.jpeg'

import './base.css'
import './button.css'
import './footer.css'
import { compileSchema } from 'ajv/dist/compile'

const imageUrl =
  'https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png'
const image = makeImage(imageUrl)

const button = makeButton('Yay! A Button')
button.style = makeColorStyle('steelblue')
document.body.appendChild(button)
document.body.appendChild(footer)
document.body.appendChild(image)
