console.log("Welcome to Spotify");

async function getSongs(params) {
  let a = await fetch("http://127.0.0.1:5500/songs/");
  let response = await a.text();
  console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
  songs.push(element.href.replace("http://127.0.0.1:5500/songs/", ""));
}
  }
  return songs;
}
async function main() {
  //get the list of all the songs
  let songs = await getSongs();
  console.log(songs);

  let songUL = document
    .querySelector(".songlist")
    .getElementsByTagName("ul")[0];
  for (const song of songs) {
    songUL.innerHTML += `<li>${song.replaceAll("%20"," ")}</li>`;
  }
  //play the first song
  var audio = new Audio("http://127.0.0.1:5500/songs/" + songs[0]);
  // audio.play();

  audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    console.log(audio.duration, audio.currentSrc, audio.currentTime);
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
}
main();
