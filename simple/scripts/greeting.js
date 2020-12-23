'use strict'

// function customTag(tagName, fn) {
//     let tagName = document.getElementsByTagName(tagName)
//     Array.from(tagName).forEach(fn)
// }

// function greetingHandler(element) {
//     element.innerHTML = '你好，世界'
// }

// customTag('greeting', greetingHandler)

let elements = document.querySelectorAll('greeting')

greeting_elem = elements[0]
greeting_elem.innerText = '你好，世界'
