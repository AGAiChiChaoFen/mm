/*轮播图*/
var items = document.querySelectorAll(".item");
var points = document.querySelectorAll(".point");
var btnLeft = document.getElementById("leftBtn");
var btnRight = document.getElementById("rightBtn");
var index = 0;
var time = 0;
var lastindex = 0;
var clearActive = function(){
    items[lastindex].className = 'item';
    points[lastindex].className = 'point';
}
var goIndex = function(){
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point active';
}
var goLeft = function(){
   lastindex = index;
   if(index == 0) index = 2;
   else index--;
   goIndex();
}
var goRight = function(){
   lastindex = index;
    if(index == 2) index = 0;
    else index++;
    goIndex();
}
btnLeft.onclick = function(){
    goLeft();
    time = 0;
}
btnRight.onclick = function(){
    goRight();
    time = 0;
}
for(i = 0;i < points.length;i++){
    points[i].onclick = function(){
        var pointIndex = this.getAttribute("data-index");
        lastindex = index;
        index = pointIndex;
        goIndex();
        time = 0;
    }
}
var timer;
function play(){
    timer = setInterval(function(){
        time++;
        if(time == 20){
            goRight();
            time = 0;
        }
    },100)
}
play();

// 查看更多部分
var gengduo=document.getElementsByClassName("gengduo");
var shouhui=document.getElementsByClassName("shouhui");
var text=document.getElementsByClassName("text");
var text_all=document.getElementsByClassName("text_all");

for(var i=0;i<gengduo.length;i++){
    gengduo[i].index=i;
    gengduo[i].onclick=function(){
        text[this.index].style.display="none";
        text_all[this.index].style.display="block";
    }
}
for(var i=0;i<shouhui.length;i++){
    shouhui[i].index=i;
    shouhui[i].onclick=function(){
        text_all[this.index].style.display="none";
        text[this.index].style.display="block";
    }
}

// tips部分
var tip = document.getElementsByClassName("tips");

for (var i = 0; i < tip.length; i++) {
    tip[i].onclick=function () {
        if (this.style.color === "black" || this.style.color === ""){
            this.style.color = "#2A91EB";
        }
        else{
            this.style.color = "black";
        }
    };
}
// 分页部分
var content=document.getElementsByClassName("con");
var li=document.getElementsByClassName("fenye_li");

for(var i=0;i<li.length;i++){
    li[i].index=i;
    li[i].onclick=function(){
        for(var i=0;i<content.length;i++){
            content[i].style.display="none";
            //  li[i].removeAttribute("class");
        }
        content[this.index].style.display="block";
        // this.style.backgroundcolor="#fff"
    }
}