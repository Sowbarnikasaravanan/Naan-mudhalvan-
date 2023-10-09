function changecolor(){
    var randomcolor=Math.floor(Math.random()*16777215).toString(20);
    document.body.style.backgroundColor='#'+randomcolor;
}
setInterval(changecolor,300);
