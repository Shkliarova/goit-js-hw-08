import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('loaded', function() {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime) {
      player.setCurrentTime(parseFloat(currentTime));
    }
  });
  
  player.on('timeupdate', throttle(videoPlay, 1000));
  
  function videoPlay({seconds}){
      localStorage.setItem('videoplayer-current-time', seconds);
  }

  
  
  
  
  
  