import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeEl = document.querySelector('#vimeo-player');
const vimeoPlayer = new Player(iframeEl);
const KEY = 'videoplayer-current-time';

vimeoPlayer.on('timeupdate', throttle(onPlay, 1000));
setTime();

function onPlay({ seconds, duration }) {
  localStorage.setItem(KEY, seconds);
  if (seconds === duration) {
    localStorage.removeItem(KEY);
  }
}

function setTime() {
  const currentTime = localStorage.getItem(KEY) || 0;
  vimeoPlayer.setCurrentTime(currentTime);
}
