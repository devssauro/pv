let today = new Date().getTime() + 1260000;

var countDownDate = today;

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  document.getElementById("timer").innerHTML = `00:${minutes}:${seconds}`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Oferta expirada!";
  }
}, 1000);
