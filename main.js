const list = [
    {
        songName: "Stereo Hearts",
        artistName: "Maroon 5",
        song: "maroon 5/stereo hearts.mp3"
    },
    {
        songName: "Beautiful Mistakes",
        artistName: "Maroon 5",
        song: "maroon 5/beautiful mistakes.mp3"
    },
    {
        songName: "Sugar",
        artistName: "Maroon 5",
        song: "maroon 5/sugar.mp3"
    },
    {
        songName: "Payphone",
        artistName: "Maroon 5",
        song: "maroon 5/payphone.mp3"
    },
    {
        songName: "Animals",
        artistName: "Maroon 5",
        song: "maroon 5/animals.mp3"
    },
    {
        songName: "7 Rings",
        artistName: "Ariana Grande",
        song: "ariana/rings.mp3"
    },
    {
        songName: "Into You",
        artistName: "Ariana Grande",
        song: "ariana/into.mp3"
    },
    {
        songName: "Love Me Harder",
        artistName: "Ariana Grande",
        song: "ariana/love.mp3"
    },
    {
        songName: "Positions",
        artistName: "Ariana Grande",
        song: "ariana/positions.mp3"
    }
];
// variables declared here
let index = 0;
let isplay = false;
let input = document.getElementsByClassName('input');
let label = document.getElementsByTagName('label');
let myAudio = document.getElementById("myAudio");
let artist = document.getElementById("artist");
let song = document.getElementById("song");
let listc = document.getElementById("list");
let playButton = document.getElementById('playButton');
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let range = document.getElementById('range');
let progress = document.getElementById('progress')

function toggle(){
    for (let i = 0; i < input.length; i++) {
        label[i].style.backgroundColor = "white";
        label[i].style.color = "black";
    }
    label[index].style.backgroundColor = "red";
    label[index].style.color = "white";
    song.innerHTML=list[index].songName;
    artist.innerHTML=list[index].artistName;
    myAudio.src = list[index].song
    myAudio.play();
    isplay = true;
    playButton.className = 'fa fa-pause-circle';
}

myFunction = () => {
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            index = i;
        }
    }
    toggle();
}

listc.onclick = () => {
    listc.style.background = "transparent";
    myFunction();
}

playButton.onclick = () => {
    if (isplay) {
        myAudio.pause();
        isplay = false;
        playButton.className = 'fa fa-play-circle';
    } else {
        myAudio.play();
        isplay = true;
        playButton.className = 'fa fa-pause-circle';
    }
}

forward.onclick =()=>{
    index++;
    if(index==list.length){
        index=0;
    }
    toggle();
}
backward.onclick=()=>{
    index--;
    if(index == -1){
        index = list.length -1;
    }
    toggle();
}

let interval = setInterval(() => {
    range.value = (myAudio.currentTime/myAudio.duration)*100;
    if(myAudio.ended){
        index++;
        if (index == list.length) {
            index = 0;
        }
        toggle();
    }
}, 100);

range.onchange = () =>{
    myAudio.currentTime = (range.value * myAudio.duration)/100;
}