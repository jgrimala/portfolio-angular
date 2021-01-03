// Thanks to MIKAL for the audio Visualization -> https://codepen.io/michaelphipps/pen/vaaMLb
function makeWave(myAudioFile) {
  // Set up audio context
  //var currentUrl = window.location.href;
  var playing = false;
  var resolution = 128;
  var progress = 0;
  var fft = new Tone.FFT(resolution); // analyse frequency/amplitude of signal
  var waveform = new Tone.Waveform(resolution); // get waveform data of signal
  var player = new Tone.Player({
    url: myAudioFile,
    loop: true,
    autostart: playing,
  }).toMaster();
  //console.log("this is the url: " + currentUrl);


  // send audio signal to FFT and Wafeform analysers
  player.fan(fft, waveform);

  Tone.Buffer.on("progress", function (data) {
    progress = data;
  });

  var ctx = $("canvas").get(0).getContext("2d");

  function drawFrame(fftvalues, waveformvalues) {
    sizeCanvases();
    var fftvalue = 0;
    var waveformvalue = 0;

    ctx.translate(canvasWidth / 2, canvasHeight / 2);

    // show play triangle
    if (!playing && progress == 1) {
      var side = 75;
      var h = side * (Math.sqrt(3) / 2);
      ctx.save();
      ctx.translate(10, 0);
      ctx.rotate((90 * Math.PI) / 180);
      ctx.beginPath();
      ctx.moveTo(0, -h / 2);
      ctx.lineTo(-side / 2, h / 2);
      ctx.lineTo(side / 2, h / 2);
      ctx.lineTo(0, -h / 2);
      ctx.stroke();
      ctx.fillStyle = "rgba(148,154,160, 0.4)";
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
	if (playing) {
		ctx.fillStyle = "rgba(148,154,160, 0.4)";
		ctx.fillRect(-25,-35,20,70);
		ctx.fillRect(5,-35,20,70);
	}

    var arc = 360 / resolution;
    for (var i = 0, len = resolution; i < len; i++) {
      // Infinite values caused by silence will lock up the browser.
      // Detect and adjust.
      if (fftvalues && isFinite(fftvalues[i])) {
        fftvalue = fftvalues[i];
      } else {
        fftvalue = -105;
      }

      if (waveformvalues && isFinite(waveformvalues[i])) {
        waveformvalue = waveformvalues[i];
      } else {
        waveformvalue = -1;
      }

      var wendr = map(waveformvalue, -1, 1, 0, 10);
      var endr = map(fftvalue, -127, 127, -25, 200);
      var startr = 100 - endr / 2;

      endr = endr + startr + wendr;

      var angle = (arc * i * Math.PI) / 180;

      var startx = startr * Math.cos(angle);
      var starty = startr * Math.sin(angle);
      var endx = endr * Math.cos(angle);
      var endy = endr * Math.sin(angle);

      ctx.beginPath();

      if (arc * i < 360 * progress) {
        if (!playing) {
          ctx.strokeStyle = "rgba(255,255,255,1)";
        } else {
          ctx.strokeStyle = "rgba(255,255,255," + endr + ")";
        }
      } else {
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
      }

      ctx.lineCap = "round";
      ctx.moveTo(startx, starty);
      ctx.lineTo(endx, endy);
      ctx.lineWidth = wendr;
      ctx.shadowBlur = 20;
      ctx.shadowColor = "rgb(181, 215, 250)";
      ctx.stroke();
    }
  }

  //size the canvases
  var canvasWidth, canvasHeight;

  function sizeCanvases() {
    canvasWidth = $("#fft").width();
    canvasHeight = $("#fft").height();
    ctx.canvas.width = canvasWidth;
    ctx.canvas.height = canvasHeight;
  }

  // start the draw loop
  // see http://codetheory.in/controlling-the-frame-rate-with-requestanimationframe/ for details on how this works.
  var fps = 30;
  var now;
  var then = Date.now();
  var interval = 1000 / fps;
  var delta;

  function drawLoop() {
    requestAnimationFrame(drawLoop);

    now = Date.now();
    delta = now - then;

    if (delta > interval) {
      then = now - (delta % interval);

      // Draw a frame
      sizeCanvases();

      //get the fft data and draw it
      if (playing) {
        var fftValues = fft.getValue();
        var waveformValues = waveform.getValue();
      }
      drawFrame(fftValues, waveformValues);
    }
  }

  drawLoop();

  // User Interaction
  $("#fft").on("click", function () {
    if (!playing) {
      player.start();
      playing = true;
    } else {
      player.stop();
      playing = false;
    }
  });

  // Fonction pour arreter le player si click sur navigation (exit page)
  $("#mainNav").on("click", function () {
    if (playing) {
      player.stop();
      playing = false;
    }
  })

  // Map function borrowed and mangled from P5
  function map(n, start1, stop1, start2, stop2, withinBounds) {
    var newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    if (!withinBounds) {
      return newval;
    }
    if (start2 < stop2) {
      return constrain(newval, start2, stop2);
    } else {
      return constrain(newval, stop2, start2);
    }
  }

  // Constrain function borrowed and mangled from P5
  function constrain(n, low, high) {
    return Math.max(Math.min(n, high), low);
  }
}

/*###############################################################
	Function PULSE() pour les speakers d'audioListComponents 
###############################################################*/

var time;

function pulse() {
  const speakers = document.querySelectorAll(".myListGroupItem");

  function setProperty(duration) {
    for (i = 0; i < speakers.length; i++) {
      speakers[i].style.setProperty("--animation-time", duration + "s");
    }
  }

  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  function changeAnimationTime() {
    const random = getRandomFloat(0.3, 0.8);
    const animationDuration = random;
    console.log(animationDuration);
    setProperty(animationDuration);
  }

  time = setInterval(changeAnimationTime, 1000);
}

function stopPulse() {
  console.log("On est dans stopPulse()");
  clearInterval(time);
}
