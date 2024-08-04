const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const bar = document.querySelectorAll(`[id="bar"]`);
const body = document.getElementById("body");

const tracks = [
  {
    title: "O Maahi O Maahi",
    artist: "Arijit Singh",
    src: "./musics/OMaahi.mp3",
    url: "./images/image1.jpg",
  },
  {
    title: "Baby",
    artist: "Justin Bieber",
    src: "musics/Baby.mp3",
    url: "./images/image2.jpg",
  },
  {
    title: "Pehli Nazar Mein",
    artist: "Atif Aslam",
    src: "musics/Pehli-nazar-mein.mp3",
    url: "./images/image3.jpg",
  },
  {
    title: "Despacito",
    artist: "Luis Fonsi",
    src: "musics/Luis-Fonsi-Despacito.mp3",
    url: "./images/image4.jpg",
  },
];

let currentTrackIndex = 0;

function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.src;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  body.style.backgroundImage = `url(${track.url})`;
}

function playPauseTrack() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause";
    bar.forEach((element) => {
      element.classList.add("bar");
    });
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play";
    bar.forEach((element) => {
      element.classList.remove("bar");
    });
  }
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  playPauseTrack();
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
  playPauseTrack();
}

playPauseBtn.addEventListener("click", playPauseTrack);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

loadTrack(currentTrackIndex);
