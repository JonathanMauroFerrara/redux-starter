import {compose, pipe} from 'lodash'


const trim = string => string.trim()
const toLower = string => string.toLowerCase()
const wrapper = string => `<div> ${string} </div>`

const result = wrapper(toLower(trim('Hello There')))

console.log(result)


