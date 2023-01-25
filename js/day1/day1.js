
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  //key為任一變數即可
  window.addEventListener('keydown', playSound);

  //////////////////////////////////////////

  $('.key').click(function(obj){

    tar = obj.target;
    if(!tar.id){
      tar = tar.parentNode;
    }
    //如果tar的id為undefined則執行下tar選為父節點
    //!tar.id 這個違反轉undefined(一種falsy)= not falsy = true

    const audio = document.querySelector(`audio[data-key="${tar.id}"]`);
    const key = document.querySelector(`div[data-key="${tar.id}"]`);
    // if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  });

 

 



