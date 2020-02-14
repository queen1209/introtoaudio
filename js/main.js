(()=>{
  //make a reference to all of the buttons
  const  playButtons = document.querySelectorAll('.playButton'),
         pauseButtons=document.querySelectorAll('.pauseButton'),
         rwButtons=document.querySelectorAll('.pauseButton'),
        audioElement = document.querySelector('audio');
        let globalpaused = false;
//play the song associated with the button (its data-trackerf attribute)
  function playTrack(){
    //try to fix pause play bug
    //a return statment kills you code execution here -dont go past this pointer
    if (globalPaused){
      console.log('paused')
      //if our audio is paused ,then just play the track and exit
      resumeTrack();
      return;
    }
    if(audioElement.paused){ console.log('paused')}
    //debugger;
    let audioSource = this.dataset.trackref;
    //set the audio Source
    audioElement.src =`audio/${audioSource}.mp3`;

    //load amd play it
    audioElement.load();

    audioElement.play();
    //playTrack():
  }
  function resumeTrack() {
    audioElement.pause();
    globalPaused = true;

  }
  function rwTrack(){
    audioElement.currentTime = 0
  }
  //process the playButton and add some event handling
  playbuttons.forEach(button => button.addEventListener("click",playTrack));
  pausebuttons.forEach(button => button.addEventListener("click",pauseTrack));
  rwbuttons.forEach(button => button.addEventListener("click",playTrack));

})();
