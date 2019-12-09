window.onload = function(){
  setRem(720)
}

window.onresize = function(){
  setRem()
}

function setRem(rem){
  const html = document.querySelector('html')
  const clientWidth = document.documentElement.clientWidth || document.body.clientWidth
  html.style.fontSize = clientWidth / rem * 100 * 2 + 'px'  
}