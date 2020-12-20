let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let songName = document.querySelector('#songName');
let volume = document.querySelector('#volume');
let volumeControl = document.querySelector('#volumeControl');
let slider = document.querySelector('#durationSlider');
let duration = document.querySelector('#duration');
let sliceImage = document.querySelector('#sliceImage');
let autoPlay = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let singerName = document.querySelector('#singerName');
let startBtn = document.getElementById(`start`)
let stopBtn = document.getElementById(`stop`)

let timer;
let autoplay = 0;
let loadTrack = 0;
let songPlaying = false;

let track = document.createElement('audio');
// ***** Songs Info ***** //
let song = [
  {
    name: "LAY '莲(Lit)'",
    path: "music/s1.mp3",
    img: "images/img01.jpg",
    singer: "LAY"
  },
  {
    name: "Agust D '대취타' ",
    path: "music/s2.mp3",
    img: "images/img02.jpg",
    singer: "Bt"
  },
  {
    name: "Papilo",
    path: "music/s3.mp3",
    img: "images/img03.jpg",
    singer: "G-O"
  },
  {
    name: "Phoxi",
    path: "music/s4.mp3",
    img: "images/img04.jpg",
    singer: "XS"
  },
  {
    name: "Bing-Bian",
    path: "music/s5.mp3",
    img: "images/img05.jpg",
    singer: "L-tit"
  }
];

function load_track(loadTrack) {
  track.src = song[loadTrack].path;
  songName.innerHTML = song[loadTrack].name;
  sliceImage.src = song[loadTrack].img;
  singerName.innerHTML = song[loadTrack].singer;
  track.load();

  // total.innnerHTML = song.length;
  // present.innerHTML = loadTrack + 1;
  // timer = setInterval(SilderRange, 1000);
}
// ***** Microphone Loading ***** //
let loadMicrophone = async function () {
  let audioChunks = []
  recordingNow(false)
  let stream = await navigator.mediaDevices.getUserMedia({ audio: true })

  let mediaRecorder = new MediaRecorder(stream)

  mediaRecorder.addEventListener("stop", function (event) {
    let audioBlob = new Blob(audioChunks)
    let audioUrl = URL.createObjectURL(audioBlob)
    audio.play()

    recordingNow(false)
  })

  mediaRecorder.addEventListener("dataavailable", function (event) {
    audioChunks.push(event.data)
  })

  //start recording
  startBtn.addEventListener(`click`, function (event) {
    mediaRecorder.start()
  })

  //stop recording
  stopBtn.addEventListener(`click`, function (event) {
    mediaRecorder.stop()
  })
}

let recordingNow = function (isRecording) {
  startBtn.disabled = isRecording
  stopBtn.disabled = !isRecording

  if (isRecording) {
    document.body.classList.add(`recording`)
  } else {
    document.body.classList.remove(`recording`)
  }
}

window.addEventListener(`load`, loadMicrophone)
load_track(loadTrack);

//right-middle_play section function
function justplay() {
  if (songPlaying == false) {
    playsong();
  }
  else {
    pausesong();
  }
}

//*play & pause*//
function playsong() {
  track.play();
  songPlaying = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

function pausesong() {
  track.pause();
  songPlaying = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

//*backward & forward*//
function backward() {
  if (loadTrack > 0) {
    loadTrack -= 1;
    load_track(loadTrack);
    playsong();
  }
  else {
    loadTrack = song.length;
    load_track(loadTrack);
    playsong();
  }
}

function forward() {
  if (loadTrack < song.length - 1) {
    loadTrack += 1;
    load_track(loadTrack);
    playsong();
  }
  else {
    loadTrack = 0;
    load_track(loadTrack);
    playsong();
  }
}

//*duration*//
function durationChange() {
  sliderPosition = track.duration * (slider.value / 100);
  track.currentTime = sliderPosition;
}

//*volume*//
function volumeChange() {
  volumeControl.innerHTML = volume.value;
  track.volume = volume.value / 100;
}

//*Mute*//
function muteSound() {
  track.volume = 0;
  volume.value = 0;
  volumeControl.innerHTML = 0;
}



