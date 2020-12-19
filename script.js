let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let songName = document.querySelector('#songName');
let volume= document.querySelector('#volume');
let volumeControl = document.querySelector('#volumeControl');
let slider = document.querySelector('#durationSlider');
let duration = document.querySelector('#duration');
let sliceImage = document.querySelector('#sliceImage');
let autoPlay = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let singerName = document.querySelector('#singerName');

let timer;
let autoplay = 0;
let loadTrack = 0;
let songPlaying = false;

let track = document.createElement('audio');

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
      name: "papilo",
      path: "music/s3.mp3",
      img: "imgages/img03.jpg",
      singer: "G-O"
    },
    {
      name: "Phoxi",
      path: "music/s4.mp3",
      img: "image/img04.jpg",
      singer: "XS"
    },
    {
      name: "Bing-Bian",
      path: "music/s5.mp3",
      img: "img/img05.jpg",
      singer: "L-tit"
    }
 ];

function load_track(loadTrack) {
    track.src = song[loadTrack].path;
	songName.innerHTML = song[loadTrack].name;	
	sliceImage.src = song[loadTrack].img;
    singerName.innerHTML = song[loadTrack].singer;
    track.load();
}

load_track(loadTrack);

//right-middle_play section function
function justplay() {
    if(songPlaying == false) {
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