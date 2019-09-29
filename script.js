    var img = document.getElementsByClassName('im');
    cs = 0;
function prev(){
    img[cs].className = 'im';
    if(cs > 0){
        cs = cs - 1;
        img[cs].className = 'im active';
    }
    else{
        cs = 4;
        img[cs].className = 'im active';
    }
}
function next(){
    img[cs].className = 'im';
    if(cs < 4){
        cs = cs + 1;
        img[cs].className = 'im active';
    }
    else{
        cs = 0;
        img[cs].className = 'im active';
    }
}

function show(){
    var opacity = document.getElementById('a');
    opacity.style = 'opacity: 0.2;';
    var opacity = document.getElementById('b');
    opacity.style = 'opacity: 0.2;';
}
function hide(){
    var opacity = document.getElementById('b');
    opacity.style = 'opacity: 0;';
    var opacity = document.getElementById('a');
    opacity.style = 'opacity: 0;';
}