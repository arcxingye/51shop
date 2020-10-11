    function autoPlay(){
        play=setInterval(function(){
            index++;
            if(index>=imgs.length){
                index=0;
            }
            show(index);
        },3000);
    }

    autoPlay();


    box.onmouseover=function(){
        clearInterval(play);
    }
    box.onmouseover=function(){
        autoPlay();
    }
    for(i=0;i<btn.length;i++){
        btn[i].index=i;
        btn[i].onmouseover=function(){
            show(this.index);
            clearInterval(play);
        }
    }