function browserTest() {
    if (navigator.userAgent.search("Chrome") != -1)
        return "這是Chorome";
    else if (navigator.userAgent.search("Firefox") != -1)
        return "這是Firefox";
    else if (navigator.userAgent.search("Opera") != -1)
        return "這是Opera";
    else
        return "可能是IE";
}
    
    
    
    var player = document.getElementById("player");
    // var play = document.getElementById("play");
    // var pause = document.getElementById("pause");
    // var stop = document.getElementById("stop");
    // var forward = document.getElementById("forward");
    // var back = document.getElementById("back");
    var volume = document.getElementById("volume");
    var volumeView = document.getElementById("volumeView");
    var ControlPanel = document.getElementById("ControlPanel");
    var MusicList = document.getElementById("List");
    var dur = document.getElementById("dur");
    var info = document.getElementById("info");
    var info2 = document.getElementById("info2");
    var durChange = document.getElementById("durChange");
    var progress = document.getElementById("progress");
    var settime = document.getElementById("settime");
    var Sbook = document.getElementById("Sbook");
    var Tbook = document.getElementById("Tbook");
    var btnUpdateMusic = document.getElementById("btnUpdateMusic");
    var book = document.getElementById("book");




    
    // play.addEventListener("click",playMusic);
    // pause.addEventListener("click",pauseMusic);
    // stop.addEventListener("click",stopMusic);
    // forward.addEventListener("click",forwardMusic);
    // back.addEventListener("click",backMusic);
    // volume.addEventListener("click",volumeMusic);
    ControlPanel.addEventListener("click",control);
    MusicList.addEventListener("change",function (){changeMusic(-1)});
    durChange.addEventListener("input",durUpdate);
    settime.addEventListener("click",setTimeBar);
    Sbook.addEventListener("dragstart",drag);
    Tbook.addEventListener("dragstart",drag);

    Tbook.addEventListener("dragover",allowDrop);
    Tbook.addEventListener("drop",drop);

    Sbook.addEventListener("dragover",allowDrop);
    Sbook.addEventListener("drop",drop);

    btnUpdateMusic.addEventListener("click",updateMusic)

    DefaultSong();


    function durUpdate(){
        durChange.max=player.duration;
        // durChange.value=player.currentTime;
        player.currentTime=durChange.value;
        timeUpdate();
    }


    function control(evt){
        id = evt.target.id ;
        switch (id){
            case "play":
            playMusic(evt.target);
            break;
            case "pause":
            pauseMusic(evt.target);
            break;
            case "stop":
            stopMusic(evt.target);
            break;
            case "forward":
            forwardMusic();
            break;
            case "back":
            backMusic();
            break;
            case "volume":
            volumeMusic();
            break;
            // case "List":
            // changeMusic(evt.target);
            // break;
            case "preSong":
            if (MusicList.selectedIndex==0){
                changeMusic(MusicList.length-1);
            }
            else {
                changeMusic(MusicList.selectedIndex-1);
            }
            break;
            case "nextSong":
            cnt(0);
            break;
            case "muted":
                SetMuted();
                break;
            case "loop":
            chkClick(evt.target);
            info2.innerText="單曲循環";
            random.className="";
            allLoop.className="";
            break;
            case "random":
            chkClick(evt.target);
            info2.innerText="隨機播放";
            loop.className="";
            allLoop.className="";
            break;
            case "allLoop":
            chkClick(evt.target);
            info2.innerText="全曲循環";
            loop.className="";
            random.className="";
            break;
            case settime:
                setTimeBar();
                break;
            case "songbook":
                displayBook();
                break;
        }
    }

    function cnt (status){
        if(status==0){
          if (MusicList.selectedIndex==MusicList.length-1){
                changeMusic(0);
            }
            else {
                changeMusic(MusicList.selectedIndex+1);
            }  
        }
        else if (status==1){
            changeMusic(Math.floor(Math.random()*(MusicList.length)));
            // Math.floor(Math.random()*(MusicList.length))  //0~2
        }
        else {
            changeMusic(MusicList.selectedIndex);
        }
    }


    function drag(evt){
        evt.dataTransfer.setData("text",evt.target.id);
        console.log(evt.target.id);

    }
    function allowDrop(evt) {
        evt.preventDefault();
    }
    function drop(evt) {
        evt.preventDefault();
        var data = evt.dataTransfer.getData("text");
        evt.target.appendChild(document.getElementById(data));
        console.log(data);
    }

    function updateMusic(){
        for(i=MusicList.children.length-1;i>=0;i--){
            MusicList.removeChild(MusicList.children[i]);    // MusicList.children == MusicList.options
        }
        for (i=0;i<Tbook.children.length;i++){
        var option = document.createElement("option") ; //"option"=標籤屬性 也可填入createElement("div") or "span"
        var Tnode = Tbook.children[i]
        option.value=Tnode.title;
        option.innerText=Tnode.innerText;

        MusicList.appendChild(option);
    }
    }


    function DefaultSong(){
        for (i=0;i<Sbook.children.length;i++){
        var option = document.createElement("option") ; //"option"=標籤屬性 也可填入createElement("div") or "span"
        var Snode = Sbook.children[i]
        option.value=Snode.title;
        option.innerText=Snode.innerText;

        Snode.draggable=true;
        MusicList.appendChild(option);
        Snode.id="No"+[i];
    }
    changeMusic(0);
    }
    
    
    function timeup() {
        if (player.ended == true) {
            if (info2.innerText=="單曲循環"){
                cnt(2);
            }
            else if (info2.innerText=="隨機播放"){
                cnt(1);
            }
            else{cnt(0);}
        
        }
        timeUpdate();
        setTimeout(timeup, 1000);

    }
    timeup();

    function timeUpdate(){
        var total = Math.round(player.duration);
        var curr = Math.round(player.currentTime);
        durChange.max=total;
        durChange.value=curr;
        progress.style.width = ((curr/total)*100)+"%";
        dur.innerText= countTime(curr) + " / " + countTime(total) ;
    }


    function countTime(time){
        let result=0;
        let a = 0;
        let i = 0;
        for(i=1; i<3 ; i++){
        a= time%60 ;
        time= Math.floor(time/60) ;
        a= a<10 ? "0"+ a : a;
        time= time<10 ? "0"+ time : time;
        result = time + " : " +a ;
        i++;
        }
        if(i == 3){
            if (time/60 >1){
                a= time%60 ;
                time= time/60 ;
                result = time + " : " +a;
            }
            else{
                result = "00" + " : " +result;
            }
        }
        return result;

    }

    function showInfo (status){
        switch (status){
            case 1:
                info.innerText= player.title+"播放中~~~";
            break;
            case 2:
                info.innerText="暫停中~~~";
            break;
            case 3:
                info.innerText="停止中~~~";
            break;
        }
    }

    function playMusic(obj){
        obj.innerText=";";
        obj.id="pause";
        player.play();
        showInfo(1);
    }
    function pauseMusic(obj){
        obj.innerText="4";
        obj.id="play";
        player.pause();
        showInfo(2);
    }
    function stopMusic(obj){
        pauseMusic(obj.previousElementSibling);
        player.currentTime=0;
        showInfo(3);
    }
    function forwardMusic(){
        // let time = player.currentTime;
        // player.currentTime=time+5;
        player.currentTime+=5;
    }
    function backMusic(){
        // let time = player.currentTime;
        // player.currentTime=time-5;
        player.currentTime-=5;
    }
    function volumeMusic(){
        player.volume=volume.value/100;
        volumeView.innerText="音量"+volume.value;
    }

    function changeMusic(index){
        durChange.value=0;
        obj =MusicList.options[index];
        if (index ==-1){
            obj =MusicList.options[MusicList.selectedIndex];
            console.log(obj);
        }
        player.title=obj.innerText;
        obj.selected=true;
        player.src= obj.value;
        player.load();

        if (MusicList.nextElementSibling.nextElementSibling.innerText==4){
            pauseMusic(MusicList.nextElementSibling.nextElementSibling);
        }
        else{
            playMusic(MusicList.nextElementSibling.nextElementSibling);
        }
        
        
    }

    function SetMuted(){
        if (player.muted==true){
            player.muted=false;
            muted.className="";
            console.log(muted);
        }
        else{
            player.muted=true;
            muted.className="lineThrough";
            console.log(muted);
        }
    }

    // function changeList(evt){
        
    //     changeMusic(evt.target);
    //     console.log(evt.target);
    // }

    function chkClick(obj){
        if (obj.className=="clicked"){
            obj.className="";
        }
        else{
            obj.className="clicked";

        }
    }

   
    function setTimeBar(evt){
         player.currentTime=((evt.offsetX) / (ControlPanel.clientWidth-10)) * player.duration;
         progress.style.width= (player.currentTime/player.duration*100)+"%";
         timeUpdate();    
        }

    function displayBook(){
        if(book.className=="hidden"){
            book.className="";
        }
        else{
            book.className="hidden";
        }
    }
