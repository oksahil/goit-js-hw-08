import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');


player.on('timeupdate', throttle(onTimeUpdateSave, 1000));
player.pause('timeupdate', pauseTimeUpdateSave);
player.setCurrentTime(timeUpdateFetch());

function timeUpdateFetch() {
    if (localStorage.getItem('videoplayer-current-time') !== null) {
    return JSON.parse(localStorage.getItem('videoplayer-current-time'));
        }
    
    return 0;
    }

function onTimeUpdateSave(timeObject) {
localStorage.setItem('videoplayer-current-time', JSON.stringify(timeObject.seconds));
}

function pauseTimeUpdateSave(timeObject) {
localStorage.setItem('videoplayer-current-time', JSON.stringify(timeObject.seconds));
}

