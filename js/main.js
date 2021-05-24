function get(elem) {
    return document.getElementById(elem)
  };

 
  get('button').onclick = function() {
    
    const wrap = document.getElementById('console');
    while (wrap.firstChild) {
        wrap.removeChild(wrap.lastChild);
    };

    get('console').innerHTML += 'Старт прогресса <br>';

    get('button').innerHTML = 'В процессе';
    
    setTimeout(function() {
      alert('Успешно');
      get('console').innerHTML += 'Окончание прогресса <br>';
      for (var i = 0; i < 16; i++) {
        get(i).style.transform = 'rotateX(0)';
        get(i).style.transition = '0s';
        get('button').innerHTML = 'start';
      }
    }, 2100);
    
    for (var i = 0; i < 16; i++) {
      get(i).style.transition = '0.5s';
      var t = i * 100;
      setTimeout(function(i) {
        get(i).style.transform = 'rotateX(180deg)';
        get('console').innerHTML += 'cell ' + (i + 1) + ' старт анимации ячейки <br>';
        setTimeout(function(i) {
          get('console').innerHTML += 'cell ' + (i + 1) + ' окончание анимации ячейки <br>';
        }, 500, i)
      }, t, i);
    }
    
    
  }