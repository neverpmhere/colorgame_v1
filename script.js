let start = document.getElementById('color5');

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

let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');
let color6 = document.getElementById('color6');
let color7 = document.getElementById('color7');
let color8 = document.getElementById('color8');
let color9 = document.getElementById('color9');


let playimage = document.querySelector('img[src="play.png"]');
let buttonDisabled = false;

const blip1 = new Audio('blip1.wav');
const bell1 = new Audio('bell1.wav');

let sound1 = function () {
  blip1.play();
  setTimeout(function() {
  blip1.play();
  }, 1000);
  setTimeout(function() {
  blip1.play();
  }, 2000);
};

let sound2 = function () {
  setTimeout(function() {
  bell1.play();
  }, 3100);
};

function genRandomNumber() {
  const min = 1;
  const max = 9;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randomNumber === 5) {
    return genRandomNumber();
  }
  return randomNumber;
};

start.addEventListener("click", function() {
  if (!buttonDisabled) {
    buttonDisabled = true;
    start.disabled = true;
    sound1();
    sound2();
    const randomNumber = genRandomNumber();
    console.log(randomNumber);
    playimage.style.display = 'inline-block';
    playimage.style.opacity = "0.5";

    setTimeout(function() {
      playimage.style.display = 'inline-block';
      playimage.style.opacity = "0.5";
      start.disabled = false;
      buttonDisabled = false;
    }, 20000);
  }
});

function colorstart1() {
  setTimeout(function() {
  color2.style.display = 'none';
  color3.style.display = 'none';
  color4.style.display = 'none';
  color6.style.display = 'none';
  color7.style.display = 'none';
  color8.style.display = 'none';
  color9.style.display = 'none';
  }, 4100);

};

function colorstart2() {
  
}

function colorstart3() {
  
}

function colorstart4() {
  
}

function colorstart6() {
  
}

function colorstart7() {
  
}

function colorstart8() {
  
}

function colorstart9() {
  
}

if (genRandomNumber === 1) {
  colorstart1()
  showcolor1()
  console.log("Число равно - 1");
} else if (genRandomNumber === 2) {
  colorstart2()
  showcolor2()
  console.log("Число равно - 2");
} else if (genRandomNumber === 3) {
  colorstart3()
  showcolor3()
  console.log("Число равно - 3");
} else if (genRandomNumber === 4) {
  colorstart4()
  showcolor4()
  console.log("Число равно - 4");
} else if (genRandomNumber === 6) {
  colorstart6()
  showcolor6()
  console.log("Число равно - 6");
} else if (genRandomNumber === 7) {
  colorstart7()
  showcolor7()
  console.log("Число равно - 7");
} else if (genRandomNumber === 8) {
  colorstart8()
  showcolor8()
  console.log("Число равно - 8");
} else if (genRandomNumber === 9) {
  colorstart9()
  showcolor9()
  console.log("Число равно - 9");
}

let showcolor1
function showcolor1() {
  start.style.backgroundColor = "rgba(255, 0, 0, 0.65)";
}

let showcolor2
function showcolor2() {
  start.style.backgroundColor = "rgba(0, 128, 0, 0.65)";
}

let showcolor3
function showcolor3() {
  start.style.backgroundColor = "rgba(0, 0, 255, 0.65)";
}

let showcolor4
function showcolor4() {
  start.style.backgroundColor = "rgba(255, 255, 0, 0.65)";
}

let showcolor6
function showcolor6() {
  start.style.backgroundColor = "rgba(238, 130, 238, 0.65)";
}

let showcolor7
function showcolor7() {
  start.style.backgroundColor = "rgba(211, 211, 211, 0.65)";
}

let showcolor8
function showcolor8() {
  start.style.backgroundColor = "rgba(255, 105, 180, 0.65)";
}

let showcolor9
function showcolor9() {
  start.style.backgroundColor = "rgba(135, 206, 250, 0.65)";
}
