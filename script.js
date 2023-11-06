const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['Cups', 'Sandstorm', 'See You'];

let songIndex = 0;


//initally load details

function loadSong(song){
  title.innerText=song;
  audio.src = `music/${song}.mp3`
  cover.src = `images/${song}.jpg`
}

loadSong(songs[songIndex])

function playSong(){
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
}
function pauseSong(){
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
}


playBtn.addEventListener('click', () =>{
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying){
    pauseSong();
  } else {
    playSong();
  }
})

nextBtn.addEventListener('click', nextSong)
prevBtn.addEventListener('click', prevSong)

progress.addEventListener(())

function nextSong(){
  songIndex--
  if (songIndex > song.length -1){
    songIndex= 0
  }
  loadSong(songs[songIndex]);
  playSong();
}


function prevSong(){
  songIndex--
  if (songIndex < 0){
    songIndex= songs.length-1
  }
  loadSong(songs[songIndex]);
  playSong();
}



// document.querySelector('input[type="file"]').onchange = function(e){
//   let reader = new FileReader();
//   reader.onload = function(e) {
//     let dv = new jDataView(this.result);
//     //"TAG" starts at byte -128 from EOF.
//     if (dv.getString(3, dv.byteLength -128)=='TAG'){
//       let title = dv.getString(30, dv.tell());
//       let artist = dv.getString(30, dv.tell());
//       let album = dv.getString(30, dv.tell());
//       let year = dv.getString(4, dv.tell());
//     } else {
//       console.log('No ID3v1 data found')
//     }
//   }
//   reader.readAsArrayBuffer(this.files[0])
// };
