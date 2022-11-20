import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');


player.on('timeupdate', throttle(onTimeUpdateSave, 1000));
player.pause('timeupdate', pauseTimeUpdateSave);
player.setCurrentTime(timeUpdateFetch());

function timeUpdateFetch() {
    const timeSecond = JSON.parse(localStorage.getItem('videoplayer-current-time'));
    // console.log(timeSecond);
    return timeSecond;
}

function onTimeUpdateSave(timeObject) {
// console.log(timeObject.seconds);
localStorage.setItem('videoplayer-current-time', JSON.stringify(timeObject.seconds));
}

function pauseTimeUpdateSave(timeObject) {
// console.log(timeObject.seconds);
localStorage.setItem('videoplayer-current-time', JSON.stringify(timeObject.seconds));
}

