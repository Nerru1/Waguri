const bgm = new Audio("css/pasilyo.mp3");
bgm.loop = true;
bgm.volume = 0.5;
let bgmplaying = false;

const playbtn = document.getElementById("song");
playbtn.onclick = function () {
    if (bgmplaying) {
        bgm.pause();
        playbtn.textContent = "Play";
        playbtn.classList.remove("on");
    } else {
        bgm.play();
        playbtn.textContent = "Off";
        playbtn.classList.add("on");
    } 
    bgmplaying = !bgmplaying;
}