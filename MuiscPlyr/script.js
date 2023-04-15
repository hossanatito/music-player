//  Mobile Menu Toggle
function toggleMenu() {
  let t = document.getElementById("toggle");
  if (t.style.display === "none") {
    t.style.display = "block";
  } else {
    t.style.display = "none";
  }
}

const albums = [
  {
    name: "Ready To Die",
    url: "./album/cover1.jpg",
    artist: "Notorious B.I.G",
  },

  {
    name: "808s & Heartbreak",
    url: "./album/cover2.jpg",
    artist: "Kanye West",
  },
  {
    name: "Nothing Was The Same",
    url: "./album/cover3.jpg",
    artist: "Drake",
  },
  {
    name: "Paul's Boutique",
    url: "./album/cover4.jpg",
    artist: "Beastie Boys",
  },
  { name: "The Score", url: "./album/cover5.jpg", artist: "The Fugees" },
  { name: "The Chronic", url: "./album/cover6.jpg", artist: "Dr. Dre" },
  {
    name: "The Marshall Mathers",
    url: "./album/cover7.jpg",
    artist: "Eminem",
  },
  {
    name: "Holy Grail",
    url: "./album/cover8.jpg",
    artist: "Jay Z",
  },

  { name: "Take Care", url: "./album/cover9.jpg", artist: "Drake" },

  { name: "Man On The Moon", url: "./album/cover10.jpg", artist: "Kid Cudi" },

  {
    name: "Death Certificate",
    url: "./album/cover11.jpg",
    artist: "Ice Cube",
  },

  {
    name: "Because the Internet",
    url: "./album/cover12.jpg",
    artist: "Childish Gambino",
  },

  {
    name: "Food And Liquor",
    url: "./album/cover13.jpg",
    artist: "Lupe Fiasco",
  },

  {
    name: "License To Ill",
    url: "./album/cover14.jpg",
    artist: "Beastie Boys",
  },

  {
    name: "The Miseducation",
    url: "./album/cover15.jpg",
    artist: "Lauryn Hill",
  },

  //   {
  //     name: "Bizarre Ride II",
  //     url: "./album/cover16.jpg",
  //     artist: "The Pharcyde",
  //   },
];

let albumContainer = document.getElementById("album-container");

for (let i = 0; i < albums.length; i++) {
  let albumDiv = document.createElement("div");
  albumDiv.classList.add("album-each");

  let albumImg = document.createElement("img");
  albumImg.src = albums[i].url;

  let albumTitle = document.createElement("p");
  albumTitle.classList.add("album-name");
  albumTitle.innerText = albums[i].name;

  albumDiv.appendChild(albumImg);
  albumDiv.appendChild(albumTitle);

  albumContainer.appendChild(albumDiv);
}

// ----- Songs ---- //
const songs = [
  {
    title: "Disturbing You",
    cover: "./covers/Disturbing_You.jpg",
    path: "./songs/Darkoo, Ayra Starr - Disturbing U.mp3",
    artist: "Darkoo, Ayra Starr",
  },
  {
    title: "2:30",
    cover: "./covers/Asake_230.jpg",
    path: "./songs/Asake - 2 30.mp3",
    artist: "Asake",
  },
  {
    title: "Kante",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido ft. Fave - KANTE.mp3",
    artist: "Davido ft Fave",
  },
  {
    title: "Picasso",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido ft. Logos Olori - PICASSO.mp3",
    artist: "Davido/Logos Olori",
  },
  {
    title: "In The Garden",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido ft. Morravey - IN THE GARDEN.mp3",
    artist: "Davido ft Morravey",
  },
  {
    title: "U (Juju)",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido ft. Skepta - U (JUJU).mp3",
    artist: "Davido ft Skepta",
  },
  {
    title: "Unavailable",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido ft. Musa Keys - UNAVAILABLE.mp3",
    artist: "Davido/Musa Keys",
  },
  {
    title: "Na Money",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido ft. The Cavemen. & Angélique Kidjo - NA MONEY.mp3",
    artist: "Davido/Cavemen",
  },
  {
    title: "Champion Sound",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido, Focalistic - Champion Sound.mp3",
    artist: "Davido/Focalistic",
  },
  {
    title: "Away",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido - AWAY.mp3",
    artist: "Davido",
  },
  {
    title: "E Pan Me",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido - E PAIN ME.mp3",
    artist: "Davido",
  },
  {
    title: "Feel",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido - FEEL.mp3",
    artist: "Davido",
  },
  {
    title: "For the Road",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido - FOR THE ROAD.mp3",
    artist: "Davido",
  },
  {
    title: "GodFather",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido - GODFATHER.mp3",
    artist: "Davido",
  },
  {
    title: "LCND",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido - LCND.mp3",
    artist: "Davido",
  },
  {
    title: "Over Dem",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido - OVER DEM.mp3",
    artist: "Davido",
  },
  {
    title: "Precision",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido - PRECISION.mp3",
    artist: "Davido",
  },
  {
    title: "No Competition",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido ft. Asake - NO COMPETITION.mp3",
    artist: "Davido ft Asake",
  },
  {
    title: "BOP",
    cover: "./covers/Timeless.jpg",
    path: "./songs/Davido ft. Dexta Daps - BOP.mp3",
    artist: "Davido ft Asake",
  },
];

// Populate Top Tracks
const cardContainer = document.getElementById("card-container");

for (let i = 0; i < songs.length; i++) {
  let cardParent = document.createElement("div");
  cardParent.classList.add("card");

  let cardImg = document.createElement("img");
  cardImg.src = songs[i].cover;

  let cardIcon = document.createElement("a");
  cardIcon.href = "#";
  cardIcon.innerHTML = `<i class="fa-solid fa-play"></i>`;

  let cardTitle = document.createElement("h4");
  cardTitle.innerText = songs[i].title;

  let cardArtist = document.createElement("p");
  cardArtist.innerText = songs[i].artist;

  cardParent.appendChild(cardImg);
  cardParent.appendChild(cardIcon);
  cardParent.appendChild(cardTitle);
  cardParent.appendChild(cardArtist);

  cardContainer.appendChild(cardParent);
}

// Populate Song List
const trackContainer = document.getElementById("trackContainer");

for (let i = 0; i < songs.length; i++) {
  let trackParent = document.createElement("div");
  trackParent.classList.add("track");

  trackSpan = document.createElement("span");

  trackH = document.createElement("h4");
  trackH.innerText = songs[i].title;

  trackP = document.createElement("p");
  trackP.innerText = songs[i].artist;

  trackS = document.createElement("span");
  trackS.innerHTML = `<i class="fa-solid fa-circle-play" onclick="onLoad()"></i>`;

  trackSpan.appendChild(trackH);
  trackSpan.appendChild(trackP);

  trackParent.appendChild(trackSpan);
  trackParent.appendChild(trackS);

  trackContainer.appendChild(trackParent);
}

// player
const musicContainer = document.getElementById("audio-container");
const playBtn = document.getElementById("playpause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const iconBtn = document.getElementById("iconBtn");
const volumeBtn = document.getElementById("volume");

let songIndex = 0;
let autoplay = 0;

function loadSong(songIndex) {
  title.innerText = songs[songIndex].title;
  artist.innerText = songs[songIndex].artist;
  audio.src = songs[songIndex].path;
  cover.src = songs[songIndex].cover;
  audio.load();
}

loadSong(songIndex);

// reset song slider
function reset_slider() {
  if ((audio.value = 0 || iconBtn.classList.contains("fa-play"))) {
    iconBtn.classList.add("fa-pause");
    iconBtn.classList.remove("fa-play");
    audio.play();
  } else {
    iconBtn.classList.remove("fa-pause");
    iconBtn.classList.add("fa-play");

    audio.pause();
  }
}

function playPause() {
  if (iconBtn.classList.contains("fa-pause")) {
    iconBtn.classList.remove("fa-pause");
    iconBtn.classList.add("fa-play");

    audio.pause();
  } else {
    iconBtn.classList.add("fa-pause");
    iconBtn.classList.remove("fa-play");
    audio.play();
  }
}

// function resetIcon() {
//   if (iconBtn.classList.contains("fa-play")) {

// }

function prevSong() {
  reset_slider();
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songIndex);
  playPause();
}

function nextSong() {
  reset_slider();
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songIndex);
  playPause();
}

// Update Progress Bar as Song is playing
if (audio.play) {
  setInterval(() => {
    progress.value = audio.currentTime;
  }, 500);
}

// Update Song while Seeking
progress.onchange = function () {
  audio.play();
  audio.currentTime = progress.value;
  iconBtn.classList.add("fa-pause");
  iconBtn.classList.remove("fa-play");
};

// Control Volume
function volumeChange() {
  audio.volume = volumeBtn.value / 100;
}

// Mute Audio
function muteSound() {
  audio.volume = 0;
  volume.value = 0;
}

/* Event Listeners */
audio.addEventListener("ended", nextSong);
