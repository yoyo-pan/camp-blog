$(document).ready(function() {
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );
    $('#demo1').skdslider({
        'delay': 5000,
        'animationSpeed': 2000,
        'showNextPrev': true,
        'showPlayButton': true,
        'autoSlide': true,
        'animationType': 'fading'
    });

    $('#responsive').change(function() {
        $('#responsive_wrapper').width($(this).val());
    });
});

function getRandomColor () {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomId (ids) {
  var index = Math.floor(Math.random() * ids.length);

  return ids[index];
}

function showFixDetail (className) {
  var details = {
    'scratch': '培養基礎程式與邏輯力，建構學生表達能力',
    'arduino': '結合電腦程式與硬體，探索數位時代',
    '3d': '讓我們用3D列印打造自己的火箭，用電腦繪圖實現夢想吧',
    'javascript': '掌握網頁世界的核心運作',
    'app': '激發想像，用手機接軌世界'
  }

  document.querySelector('.fix-detail').innerHTML = details[className];

  var offset = {
    'scratch': 0,
    'arduino': 1,
    '3d': 2,
    'javascript': 3,
    'app': 4
  } 
  var classIcon = document.querySelectorAll('.class-icon')[offset[className]];
  var arrows = document.querySelectorAll('.arrow-icon');

  arrows[0].style.left = `${classIcon.x + classIcon.width / 4}px`
  arrows[1].style.left = `${classIcon.x + classIcon.width / 4}px`
}

setTimeout(function () {
  showFixDetail('scratch');
  showClassDetail('scratch');  
}, 200);

/*Game*/
var playing = false;
var score;
var rocketX;

function startPlaying() {
  playing = true;
  document.querySelector('.special').style.display = 'block';
  score = 0;
  rocketX = 50;
  fallingRocks();
}

function stopPlaying() {
  playing = false;
  document.querySelector('.special').style.display = 'none';
}

function rocketMove(offset) {
  //var offset = (direction === 'left') ? -10 : 10;
  var newX = rocketX + offset;
  if (newX > 90 || newX < 0 || firing || !playing) {
    return
  }
  rocketX = newX;
  document.querySelector('.rocket').style.left = rocketX + 'vw';
}

var firing = false;
function onFire() {
  if (firing || !playing) {
    return
  }
  firing = true
  var lazer = document.querySelector('.lazer');
  lazer.style.left = rocketX + 'vw';
  var opacity = 0.1;
  var int = setInterval(function () {
    opacity += 0.1;
    lazer.style.opacity = opacity;
    if (opacity >= 1.2) {
      clearInterval(int);
      lazer.style.opacity = 0;
      firing = false;
      removeRocks();
    }
  }, 100);
}

var rockArray = [];

function fallingRocks () {
  var gameInt = setInterval(function() {
    for (var i in rockArray) {
      rockArray[i].y += 10;
      if (rockArray[i].y > 70) {
        clearInterval(gameInt);
        playing = false;
        showResult();
      }
    }
    var x =Math.floor((Math.random() * 100) + 1)/ 10 * 10;
    x -= x%10;
    rockArray.push({x: x, y: 0 });
    refreshRocks();
  }, 1000);
}

function removeRocks() {
  var newRockArray = [];
  var count = 0;
  for (var i in rockArray) {
    if (rockArray[i].x === rocketX) {
      count++;
      continue
    }
    newRockArray.push(rockArray[i]);
  }
  score += calculate(count);
  rockArray = newRockArray
  refreshRocks();
}

function refreshRocks() {
  var html = '';
  for (var i in rockArray) {
    html+= `<img src='images/basic/rock.png' class='rock' style='position:fixed;\
    left:${rockArray[i].x}vw;top:${rockArray[i].y}vh'>`
  }
  var rocks = document.querySelector('.rocks');
  rocks.innerHTML = html;
}

function showResult() {
  document.querySelector('.result').style.display = 'block';
  document.querySelector('#score').innerHTML = score;
}