// a key map of allowed keys
var allowedKeys = {
    38: 'up',
    40: 'down',
    37: 'left',
    39: 'right',
    66: 'b',
    65: 'a'
  };
  
  var position = 0;
  const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  
  document.addEventListener('keydown', function(e)
  {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[position];
  
    if (key == requiredKey)
    {  
      position++;
  
      if (position == konamiCode.length) // Last Position Reached
      {
        var confettiSettings = {
          particleCount: 100,
          spread: 100,
          angle: 90
        }
        confetti(confettiSettings);
        position = 0;
      }
    }
    else
    {
      position = 0;
    }
  }); 
