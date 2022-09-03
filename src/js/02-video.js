import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const PLAYED_TIME_KEY = 'videoplayer-current-time'
const player = new Player(iframe);
const startTime = getData(PLAYED_TIME_KEY);

if (startTime) {
    player.setCurrentTime(startTime, PLAYED_TIME_KEY);
}

player.on('timeupdate', throttle(currentTimeSave, 1000))

function currentTimeSave({ seconds }) {
    player.getCurrentTime().then((seconds) => {
        saveData(seconds, PLAYED_TIME_KEY);
    }).catch(
        function (error) {
            warn(`Щось пішло не так ${error}`);
        }
    )
}

function saveData(data, key) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error("Set state error: ", error.message);
    }
}

function getData(key) {
    try {
        const data = localStorage.getItem(key);
        return data === null ? undefined : JSON.parse(data);
    } catch (error) {
        console.error("Get state error: ", error.message);
    }
}