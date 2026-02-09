console.log("Welcome to Spotify");

let currentSong = new Audio(); // ✅ GLOBAL

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}
async function getSongs() {
  let a = await fetch("http://127.0.0.1:5500/songs/");
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");
  let songs = [];

  for (let element of as) {
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.replace("http://127.0.0.1:5500/songs/", ""));
    }
  }
  return songs;
}

const playMusic = (songName) => {
  currentSong.src = "/songs/" + songName;
  currentSong.play();
  document.getElementById("Play").src = "img/pause.svg";
  document.querySelector(".songinfo").innerHTML = songName.replaceAll(
    "%20",
    " ",
  );
  document.querySelector(".songtime").innerHTML = "00:00/00:00";

  // Update duration when song metadata loads
  currentSong.addEventListener("loadedmetadata", () => {
    let minutes = Math.floor(currentSong.duration / 60);
    let seconds = Math.floor(currentSong.duration % 60);
    document.querySelector(".songtime").innerHTML =
      `00:00/${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  });
};

async function main() {
  let songs = await getSongs();

  let songUL = document.querySelector(".songlist ul");

  for (const song of songs) {
    songUL.innerHTML += `
      <li>
        <img class="invert" src="img/music.svg" alt="" />
        <div class="info">
          <div>${song.replaceAll("%20", " ")}</div>
          <div>Tanish</div>
        </div>
        <div class="playnow">
          <span>Play Now</span>
        </div>
      </li>`;
  }

  Array.from(document.querySelectorAll(".songlist li")).forEach((e) => {
    e.addEventListener("click", () => {
      let songName = e.querySelector(".info div").innerHTML.trim();
      playMusic(songName);
    });
  });

  // auto play first song
  // playMusic(songs[0]);  

  //Attach an event listener to Play, next and previous buttons
  const play = document.getElementById("Play");
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "img/pause.svg";
    } else {
      currentSong.pause();
      play.src = "img/play.svg";
    }
  });
  //Listen for time update event
  currentSong.addEventListener("timeupdate", () => {
    console.log(currentSong.currentTime, currentSong.duration);
    document.querySelector(".songtime").innerHTML =
      `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });
  // Add an event listener to seekbar
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });

  //Add an event listner to hamburger
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });
  //Add an event listner to close button
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%";
  });
  //Add an event listner to previous button
  Previous.addEventListener("click", () => {
    console.log("Previous Button Clicked");
    console.log(currentSong)
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if ((index - 1) >= 0) {
      playMusic(songs[index - 1]);
    }
  });
  //Add an event listner to next button
  Next.addEventListener("click", () => {
    console.log("Next Button Clicked");
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if ((index + 1) < songs.length) {
      playMusic(songs[index + 1]);
    }
  });
}

main();
