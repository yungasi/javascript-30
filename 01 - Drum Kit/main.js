window.addEventListener("keydown", (event) => {

    // play sound
    const audio = document.querySelector(`audio[data-key=${event.key}]`);
    if (!audio) {
        return; // end function if no audio associated with event
    }
    audio.currentTime = 0; // rewind to beginning of audio clip
    audio.play();

    // css animation
    const button = document.querySelector(`div[data-key=${event.key}]`);
    button.classList.add("playing");
    setTimeout(() => { // animation length
        button.classList.remove("playing");
    }, 100);
});