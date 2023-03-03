// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!
    
console.log('music player script file');

//get a reference to all the audio tags on the page
let allDivs = document.querySelectorAll(".key");

window.addEventListener('keyup', findMatchingAudio);

function findMatchingAudio(event) {
    let audioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`),
        targetDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);

    //this means if the audioClip is not found, then return the operation and cancel
    if (!audioClip) { return; }

    //rewind audio clip so it doesn't wait to play the whole thing
    audioClip.currentTime = 0;

    //play current audio clip
    audioClip.play();

    //animate matching div 
    targetDiv.classList.add("playing");
}

function resetDivs() {
    let currentDiv = document.querySelector(`div[data-key="${this.dataset.key}"]`);

    currentDiv.classList.remove("playing");
}

allDivs.forEach(div => div.addEventListener ("transitionend", resetDivs));


    
