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

  //*backward & forward*//
  function backward() {
	if(loadTrack > 0){
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
	if(loadTrack < song.length - 1) {
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
 function volumeChange(){
	volumeControl.innerHTML = volume.value;
	track.volume = volume.value / 100;
}

 //*Mute*//
function muteSound() {
	track.volume = 0;
	volume.value = 0;
    volumeControl.innerHTML = 0;
}
