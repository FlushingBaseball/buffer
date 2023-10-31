const audio = document.getElementById('audio');
const pause = document.getElementById('pause');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-Time');
const volume = document.getElementById('volume');


play.addEventListener('click', ()=> audio.play());
pause.addEventListener('click', ()=> audio.pause());
stop.addEventListener('click', ()=> {
  audio.pause();
  audio.currentTime=0;
});

audio.addEventListener('timeupdate', () => {
  currentTime.innerText = audio.currentTime
})

volume.addEventListener('change', () => (audio.volume =  volume.value));