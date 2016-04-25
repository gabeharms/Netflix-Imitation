require('babel-register')
require('babel-polyfill')

// Notes about polyfill:
// It was when I was writing Introducing HTML5 back in 2009. I was sat in a
// coffeeshop (as you do) thinking I wanted a word that meant "replicate an API
// using JavaScript (or Flash or whatever) if the browser doesn't have it natively".
//
// Shim, to me, meant a piece of code that you could add that would fix some
// functionality, but it would most often have it's own API. I wanted something you
// could drop in and it would silently work (remember the old shim.gif? that
// required you actually inserted the image to fix empty td cells - I wanted
// something that did that for me automatically).

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
