// Курсор
const cursor = document.querySelector(".cursor");

function cursorOnMove(e) {
  cursor.style.display = "block";
  if (!e.target) return;
  if (e.target.closest("a")) {
    cursor.classList.add("cursor_active");
  } else {
    cursor.classList.remove("cursor_active");
  }
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
}

document.onmousemove = (e) => {
  cursorOnMove(e);
};

// Убирает курсор когда курсор покидает страницу

document.addEventListener('mouseleave', () => {
  cursor.style.display = 'none';
});

document.addEventListener('mouseenter', () => {
  cursor.style.display = 'block';
});

// buttons

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color6 = document.getElementById("color6");
let color7 = document.getElementById("color7");
let color8 = document.getElementById("color8");
let color9 = document.getElementById("color9");

// audio

const blip1 = new Audio('blip1.wav');
const bell1 = new Audio('bell1.wav');

let sound1 = function() {
  blip1.play();
  setTimeout(function() {
  blip1.play();
  }, 1000);
  setTimeout(function() {
  blip1.play();
  }, 2000);
};

let sound2 = function() {
  setTimeout(function() {
  bell1.play();
  }, 3100);
};

// random number

function getRandomNumber() {
  const min = 1;
  const max = 9;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randomNumber === 5) {
    return getRandomNumber();
  }
  return randomNumber;
};

// start

let playimage = document.querySelector('img[src="play.png"]');
let isDisabled = false;
let start = document.getElementById("color5");

let play = playimage;

play.addEventListener('click', function() {
  if (!isDisabled) {
    sound1();
    sound2();
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    playimage.style.display = 'inline-block';
    playimage.style.opacity = "0";

    let showcolor1 = function() {
      start.style.backgroundColor = "rgba(255, 0, 0, 0.65)";
    }
    let showcolor2 = function() {
      start.style.backgroundColor = "rgba(0, 128, 0, 0.65)";
    }
    let showcolor3 = function() {
      start.style.backgroundColor = "rgba(0, 0, 255, 0.65)";
    }
    let showcolor4 = function() {
      start.style.backgroundColor = "rgba(255, 255, 0, 0.65)";
    }
    let showcolor6 = function() {
      start.style.backgroundColor = "rgba(238, 130, 238, 0.65)";
    }
    let showcolor7 = function() {
      start.style.backgroundColor = "rgba(211, 211, 211, 0.65)";
    }
    let showcolor8 = function() {
      start.style.backgroundColor = "rgba(255, 105, 180, 0.65)";
    }
    let showcolor9 = function() {
      start.style.backgroundColor = "rgba(135, 206, 250, 0.65)";
    }

    
    let hidecolors1 = function() {
        color1.style.backgroundColor = "rgba(255, 0, 0, 0)";
    }
    let hidecolors2 = function() {
        color2.style.backgroundColor = "rgba(0, 128, 0, 0)";
    }
    let hidecolors3 = function() {
        color3.style.backgroundColor = "rgba(0, 0, 255, 0)";
    }
    let hidecolors4 = function() {
        color4.style.backgroundColor = "rgba(255, 255, 0, 0)";
    }
    let hidecolors6 = function() {
        color6.style.backgroundColor = "rgba(238, 130, 238, 0)";
    }
    let hidecolors7 = function() {
        color7.style.backgroundColor = "rgba(211, 211, 211, 0)";
      }
    let hidecolors8 = function() {
        color8.style.backgroundColor = "rgba(255, 105, 180, 0)";
      }
    let hidecolors9 = function() {
        color9.style.backgroundColor = "rgba(135, 206, 250, 0)";
    }

    let recolor1 = function() {
        color1.style.backgroundColor = "rgba(255, 0, 0, 0.65)";
      }
      let recolor2 = function() {
        color2.style.backgroundColor = "rgba(0, 128, 0, 0.65)";
      }
      let recolor3 = function() {
        color3.style.backgroundColor = "rgba(0, 0, 255, 0.65)";
      }
      let recolor4 = function() {
        color4.style.backgroundColor = "rgba(255, 255, 0, 0.65)";
      }
      let recolor6 = function() {
        color6.style.backgroundColor = "rgba(238, 130, 238, 0.65)";
      }
      let recolor7 = function() {
        color7.style.backgroundColor = "rgba(211, 211, 211, 0.65)";
      }
      let recolor8 = function() {
        color8.style.backgroundColor = "rgba(255, 105, 180, 0.65)";
      }
      let recolor9 = function() {
        color9.style.backgroundColor = "rgba(135, 206, 250, 0.65)";
      }
  

    setTimeout(function() {
      if (randomNumber === 1) {
        showcolor1();
      } else if (randomNumber === 2) {
        showcolor2();
      } else if (randomNumber === 3) {
        showcolor3();
      } else if (randomNumber === 4) {
        showcolor4();
      } else if (randomNumber === 6) {
        showcolor6();
      } else if (randomNumber === 7) {
        showcolor7();
      } else if (randomNumber === 8) {
        showcolor8();
      } else if (randomNumber === 9) {
        showcolor9();
      }
    }, 3100);

setTimeout(function() {
        if (randomNumber === 1) {
          hidecolors2();
          hidecolors3();
          hidecolors4();
          hidecolors6();
          hidecolors7();
          hidecolors8();
          hidecolors9();
          hidestart();
        } else if (randomNumber === 2) {
          hidecolors1();
          hidecolors3();
          hidecolors4();
          hidecolors6();
          hidecolors7();
          hidecolors8();
          hidecolors9();
          hidestart();
        } else if (randomNumber === 3) {
          hidecolors1();
          hidecolors2();
          hidecolors4();
          hidecolors6();
          hidecolors7();
          hidecolors8();
          hidecolors9();
          hidestart();
        } else if (randomNumber === 4) {
          hidecolors1();
          hidecolors2();
          hidecolors3();
          hidecolors6();
          hidecolors7();
          hidecolors8();
          hidecolors9();
          hidestart();
        } else if (randomNumber === 6) {
          hidecolors1();
          hidecolors2();
          hidecolors3();
          hidecolors4();
          hidecolors7();
          hidecolors8();
          hidecolors9();
          hidestart();
        } else if (randomNumber === 7) {
          hidecolors1();
          hidecolors2();
          hidecolors3();
          hidecolors4();
          hidecolors6();
          hidecolors8();
          hidecolors9();
          hidestart();
        } else if (randomNumber === 8) {
          hidecolors1();
          hidecolors2();
          hidecolors3();
          hidecolors4();
          hidecolors6();
          hidecolors7();
          hidecolors9();
          hidestart();
        } else if (randomNumber === 9) {
          hidecolors1();
          hidecolors2();
          hidecolors3();
          hidecolors4();
          hidecolors6();
          hidecolors7();
          hidecolors8();
          hidestart();
        }
      }, 4100);

      setTimeout(function() {
        start.style.backgroundColor = "rgba(255, 255, 255, 0)";
      }, 4100);  

    setTimeout(function() {
      start.style.backgroundColor = "rgba(255, 255, 255, 0.65)";
      recolor1();
      recolor2();
      recolor3();
      recolor4();
      recolor6();
      recolor7();
      recolor8();
      recolor9();
    }, 6000);

    isDisabled = true;
    setTimeout(function() {
      isDisabled = false;
      playimage.style.display = 'inline-block';
      playimage.style.opacity = "1";
    }, 6000);
  }
});