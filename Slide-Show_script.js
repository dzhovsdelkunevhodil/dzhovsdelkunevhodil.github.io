// Массив url для перехода
var urls = [];
  
for (let i = 1; i != 194; i++) {
  urls.push("img/и" + i + ".jpg")
}

// Переход по ссылкам
function openUrl(url) {
  window.open(url, "_blank");
}

function start() {
  document.getElementById("button_id").hidden=true 
  new Audio("music/background_Music.mp3").play()
  add_images()
}

function add_images() {
  let div = document.getElementById("img_container")
  for (let i = 1; i != 194; i++) {
    let a = document.createElement('a')
    a.href = "javascript:openUrl(urls[" + (i - 1) + "])"
    let img = document.createElement('img')
    img.src = "img/и" + i + ".jpg"
    img.alt = i
    a.appendChild(img)
    div.appendChild(a)
  }
  var images = document.getElementsByTagName("img");
  var currentImage = 0;

  function changeImage() {
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    images[currentImage].style.display = "block";
    currentImage = (currentImage + 1) % images.length;
  }

  setInterval(changeImage, 300);
}

  document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("button_id")
    button.onclick = start
  })
