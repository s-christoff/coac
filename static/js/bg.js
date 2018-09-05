// From https://uigradients.com
var dreamBGGradients = [
    [],
    ['#002b36', '#073642', '#586e75'], // Solarized Base
    ['#839496', '#93a1a1'], // Base 0 to Base 1 
    ['#fdf6e3', '#b58900'], // Base to Yellow
    ['#fdf6e3', '#dc322f'], // Base to Red
    ['#d33682', '#586e75'], // Sublime Light
    ['#93a1a1', '#2aa198'], // Sublime Vivid
    ['#859900', '#93a1a1'], // Bighead
  ]
  
  var dreamBody = $('body')
  var dreamFront = $('.flip-container .front')
  var dreamBack = $('.flip-container .back')
  
  var dreamPrevBgIndex = 0
  var dreamBodyBgSwitch = []
  var dreamBodyBgSwitchIndex = 0
  
  var dreamBg = dreamBGGradients[getRandomInt(0, dreamBGGradients.length)]
  dreamBodyBgSwitch.push(dreamBg)
  setBackground(dreamFront, dreamBg)
  
  setBackground(dreamBody, dreamBg)
  
  dreamBg = dreamBGGradients[getRandomInt(0, dreamBGGradients.length)]
  dreamBodyBgSwitch.push(dreamBg)
  setBackground(dreamBack, dreamBg)
  
  function connect(arr) {
    var str = ''
    for (var i = 0; i < arr.length; i++) {
      if (i !== arr.length - 1) {
        str += arr[i] + ', '
      } else {
        str += arr[i]
      }
    }
    return str
  }
  
  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    var random
    while (1) {
      random = Math.floor(Math.random() * (max - min)) + min
      if (random !== dreamPrevBgIndex) {
        dreamPrevBgIndex = random
        break
      }
    }
    return random
  }
  
  function setBackground(target, gradient) {
    target.css({
      background: gradient[0]
    })
    target.css({
      background: 'linear-gradient(to right, ' + connect(gradient) + ')'
    })
  }
  