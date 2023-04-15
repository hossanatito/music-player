* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Outfit", lato, sans-serif;
  font-weight: 600;
  height: 100vh;
  width: 100%;
  background-color: #f2f1f1;
  color: #7f8c8d;
}

.hr hr {
  opacity: 0.3;
  color: #d35400;
  font-weight: 600;
  margin: 30px 0px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.381);
}

.xm hr {
  opacity: 0.1;
  color: #d35400;
  margin: 10px 0px;
}

.wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 60px auto 70px;
  grid-template-areas:
    "s s n n n n n n n n n n"
    "s s m m m m m m m m m m"
    "p p p p p p p p p p p p";
}

/* -------------------- Top Nav -------------------- */
.main-nav {
  height: 100%;
  padding: 10px 25px;
  width: 100%;
  z-index: 2;
  grid-area: n;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.068);
}

.main-nav ul {
  height: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-nav ul li a {
  font-weight: 600;
  color: #000;
  opacity: 0.3;
  font-size: 15px;
  transition: 0.5s ease-in-out;
}

.main-nav ul li a:hover {
  opacity: 1;
  color: #d35400;
}

.main-nav ul li:first-child div {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
}

.main-nav ul li:first-child div i {
  color: #d35400;
}

.main-nav ul li:first-child div h3 {
  color: #000;
}

.main-nav ul li a:nth-child(2) {
  padding-right: 10px;
}

.main-nav ul li:nth-child(1) {
  display: none;
}

.main-nav ul li span {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background-color: #fff;
  padding: 5px 15px;
  border-radius: 40px;
  border: 1px solid #e74d3ca8;
  transition: 0.5s ease-in-out;
}

.main-nav ul li span p {
  font-size: 14px;
}

.main-nav ul li span:hover {
  color: #d35400;
}

.main-nav ul li div {
  width: 35vw;
}

.main-nav ul li .input input {
  /* width: 600px; */
  padding: 8px 15px;
  border-radius: 40px;
  outline: none;
  border: 0px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.041);
  cursor: pointer;
  width: 100%;
}

.main-nav ul li .input input::placeholder {
  font-size: 10px;
  font-weight: 600;
  opacity: 0.3;
}

.main-nav ul li .input input:focus {
  border: 1px solid #e74d3ca8;
}

.main-nav img {
  width: 25px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.22);
}

/* --------------------Side Navigation-------------------- */
.side-nav {
  grid-area: s;
  background-color: #dedede;
  padding: 15px;
  column-gap: 50px;
  overflow-y: hidden;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  color: #000;
}

.logo i {
  color: #d35400;
}

.cat h5 {
  color: #9fa1a1;
  margin-bottom: 20px;
}

.cat ul {
  padding-bottom: 20px;
}

.cat ul li {
  color: #7f8c8d;
  list-style-type: none;
  margin-bottom: 7px;
  transition: 0.3s ease-in-out;
}

.cat ul li .active {
  border-radius: 10px;
  background-color: #fff;
  color: #d35400;
  padding: 8px 10px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
}

.cat ul li a {
  transition: 0.3s ease-in-out;
}

.cat ul li a:hover {
  border-radius: 10px;
  background-color: #fff;
  color: #d35400;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.05);
}

.cat ul li a {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  text-decoration: none;
  color: #000;
  padding: 8px 10px;
}

.plt {
  margin-bottom: 20px;
}
.plt h5 {
  color: #9fa1a1;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.plt ul li {
  list-style-type: none;
  margin-bottom: 7px;
}

/* .plt ul li a  */

.plt ul li a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  text-decoration: none;
  color: #000;
  padding: 8px 10px;
  transition: 0.5s ease-in-out;
}

.plt ul li a:hover {
  color: #d35400;
}

/* -------------------- Main Content Area -------------------- */

/* Tablet / Mobile Menu */
.main .menu-container {
  display: none;
}

.main .menu {
  display: flex;
  justify-content: end;
}

.main .menu ul {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
  position: fixed;
  padding: 20px 30px;
  background-color: #000;
  z-index: 5;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(149, 37, 37, 0.381);
}

.main .menu ul li {
  list-style-type: none;
  width: 100%;
  background-color: #d35400;
  border-radius: 5px;
}

.main .menu ul li:last-child {
  background-color: #fff;
}

.main .menu ul li:last-child a {
  color: #000;
}

.main .menu ul li a {
  font-size: 14px;
  color: #e8e8e8;
  padding: 5px 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Main Content */
.main {
  grid-area: m;
  padding: 0px 40px;
  overflow-y: auto;
  position: relative;
  height: 100%;
}

.main-wrapper {
  margin-bottom: 40px;
}

.main-wrapper ul {
  display: flex;
  margin-bottom: 20px;
  list-style-type: none;
  gap: 20px;
}

.main-wrapper ul li a {
  text-decoration: none;
  color: #d35400;
  font-size: 14px;
  transition: 0.5s ease-in-out;
}

.main-wrapper ul li a:hover {
  color: #000;
  font-size: 15px;
}

.main h3 {
  margin-bottom: 5px;
  font-size: 30px;
  color: #7f8c8d;
}

.song-cards {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 230px;
}

.card {
  position: relative;
}
.song-cards .card img {
  height: 150px;
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  margin-bottom: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.22);
  cursor: pointer;
}

.song-cards .card a {
  opacity: 0.5;
  text-decoration: none;
  font-size: 15px;
  background-color: #e8e8e8;
  border-radius: 50%;
  color: #7f8c8d;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: 0.3s ease-in-out;
}

.song-cards .card a:hover {
  opacity: 1;
  background-color: #000;
  color: #fff;
}

.card h4 {
  font-size: 15px;
  color: #454545;
  margin-bottom: 2px;
}

.card p {
  font-size: 12px;
  color: #acb0b0;
}

/* Artist Section */

.top-artist {
  margin-bottom: 10px;
  padding-top: 40px;
}

.top-artist h3 {
  color: #000;
  margin-bottom: 3px;
}

.top-artist h3 span {
  color: #d35400;
}

.top-artist p {
  text-transform: lowercase;
  margin-bottom: 30px;
}

.album {
  display: flex;
  gap: 10px;
  align-items: center;
  overflow: scroll;
  scrollbar-width: none;
}

.album::-webkit-scrollbar {
  display: none;
}

.album .album-each {
  min-width: 180px;
  height: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.album .album-each img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 5px solid #d3540059;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.22);
}

.album .album-each p {
  color: #000;
  font-size: 14px;
  text-transform: capitalize;
}

/* Top Tracks */
.top-tracks p {
  color: #d35400;
}

.song-list .track {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.08);
}

.song-list .track h4 {
  font-size: 18px;
}

.song-list .track p {
  font-size: 12px;
  color: #000;
}

.song-list .track span i {
  font-size: 30px;
  color: #d35400;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.22);
  border-radius: 50%;
}

/* -------------------- Player Section ----------------------- */

.player {
  grid-area: p;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.128);
  width: 100%;
  height: auto;
}

#progress {
  -webkit-appearance: none;
  width: 25vw;
  height: 3px;
  border-radius: 10px;
  background-color: #d35400;
  cursor: pointer;
}

#progress::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #d35400;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.22);
}

#progress::-moz-range-thumb {
  -webkit-appearance: none;
  background: #d35400;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.22);
}

.ranger {
  margin-top: -9px;
}

.song-info {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0px 10px;
}

.song-info span {
  width: auto;
}

.song-info h3 {
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
}

.song-info p {
  font-size: 12px;
  font-weight: 400;
}

.player-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0 15px;
  width: 100%;
  height: 100%;
}

.player-group img {
  height: 50px;
  width: 50px;
  border: 5px solid #e8e8e8;
  border-radius: 50%;
}

.ctrls {
  display: flex;
  align-items: center;
  gap: 15px;
}

.ctrls button {
  height: 50px;
  width: 50px;
  color: #7f8c8d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.ctrls button:nth-child(2) {
  height: 50px;
  width: 50px;
  background-color: #d35400;
  color: #fff;
  text-decoration: none;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.22);
}

.volume-sldr {
  display: flex;
  align-items: center;
  gap: 5px;
}

.volume-sldr i {
  cursor: pointer;
}

.volume {
  margin-top: -9px;
}

#volume {
  -webkit-appearance: none;
  width: 10vw;
  height: 3px;
  border-radius: 3px;
  background-color: #acb0b0;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.22);
}

#volume::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #acb0b0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.22);
}

#volume::-moz-range-thumb {
  -webkit-appearance: none;
  background: #acb0b0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.22);
}

/* Misc */
.ranger-m {
  display: none;
}

/* ------------------- Responsive Design --------------------- */

@media only screen and (max-width: 700px) {
  /* Tablet */
  .wrapper {
    grid-template-rows: 60px auto 65px;
    grid-template-areas:
      "n n n n n n n n n n n n"
      "m m m m m m m m m m m m"
      "p p p p p p p p p p p p";
  }

  .main-wrapper h3 {
    color: #000;
    font-size: 23px;
  }

  .main {
    padding: 0px 25px;
  }

  .main-nav ul li:nth-child(1) {
    display: block;
  }

  .main-nav ul li:nth-child(2) {
    display: none;
  }

  .side-nav {
    display: none;
  }

  .top-tracks h3 {
    color: #000;
    font-size: 23px;
  }

  .top-tracks p {
    font-size: 16px;
  }

  .top-artist h3 {
    font-size: 23px;
  }

  .top-artist p {
    font-size: 14px;
  }

  .album .album-each {
    min-width: 150px;
  }

  .album .album-each img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 5px solid #d3540012;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.22);
  }

  .player-group {
    width: 100vw;
    justify-content: space-between;
    gap: 0px;
  }

  .ctrls {
    justify-content: end;
  }

  .ranger {
    display: none;
  }

  .ranger-m {
    display: block;
    position: fixed;
    bottom: 60px;
  }

  #progress {
    width: 93vw;
  }

  .song-info h3 {
    font-size: 12px;
  }
}

@media only screen and (max-width: 430px) {
  /* mobile */
  .wrapper {
    grid-template-rows: 70px auto 65px;
    grid-template-areas:
      "n n n n n n n n n n n n"
      "m m m m m m m m m m m m"
      "p p p p p p p p p p p p";
  }

  .main-nav {
    background-color: #d1d1d1;
  }

  .wrapper .main-nav ul li .input {
    display: none;
  }

  .player-group .volume-sldr {
    display: none;
  }

  .song-cards {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    grid-auto-rows: 230px;
  }

  .player {
    position: fixed;
  }
}
