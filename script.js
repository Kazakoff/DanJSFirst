var board = document.getElementById('boardInner');

var display = 'block'


  var change = false
  var color = 'white'
  for (var i = 0; i < 64; ++i){
    var el = document.createElement('DIV')
    el.className = 'square'
    /*change = i % 8 === 0 || i % 8 === NaN
    color = change ? color : 
    color === 'white' ? 'black' : 'white'
    el.style.backgroundColor = color
    */
    board.appendChild(el)
    change = false
  }
