//tv image: https://www.pinpng.com/pngs/m/44-449095_great-flat-screen-tv-apple-interactive-flat-screen.png
//remote image: https://i5.walmartimages.com/asr/f9499f37-9a34-41b6-9137-13d71487f67e_1.a1b3773c918e96207e22555c9ed71d09.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff

var title=document.createElement("h1");
title.innerText="TELEVISION";
var hr1=document.createElement("hr");
var hr2=document.createElement("hr");
var links=[
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
]
var i=0;

var maindiv=document.createElement("div");
maindiv.setAttribute("class","container");

var row=document.createElement("div");
row.setAttribute("class","row");
var tvcol=document.createElement("div");
tvcol.setAttribute("class","col col-10");
var remcol=document.createElement("div");
remcol.setAttribute("class","col col-2")

var tvimg=document.createElement("img");
tvimg.src="tv.png";

var remimg=document.createElement("img");
remimg.setAttribute("id","remimg");
remimg.src="remote.jpeg";
//remimg.setAttribute("usemap","#image-map");
remimg.useMap="#image-map";


var video=document.createElement("VIDEO");
video.setAttribute("controls", "controls");
video.setAttribute("autoplay","true");
video.setAttribute("id","player");
video.setAttribute("src","http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");

tvcol.appendChild(tvimg);
remcol.appendChild(remimg);

var map=document.createElement("map");
map.setAttribute("name","image-map");

var volplusmap=document.createElement("area");
volplusmap.setAttribute("onclick","volplus()");
volplusmap.setAttribute("coords","115,234,72,312,162,315");
volplusmap.setAttribute("shape","poly");
map.appendChild(volplusmap);

var volminusmap=document.createElement("area");
volminusmap.setAttribute("onclick","volminus()");
volminusmap.setAttribute("coords","74,366,116,446,160,367");
volminusmap.setAttribute("shape","poly");
map.appendChild(volminusmap);

var chplusmap=document.createElement("area");
chplusmap.setAttribute("onclick","chplus()");
chplusmap.setAttribute("coords","223,234 181,314 269,316");
chplusmap.setAttribute("shape","poly");
map.appendChild(chplusmap);

var chminusmap=document.createElement("area");
chminusmap.setAttribute("onclick","chminus()");
chminusmap.setAttribute("coords","180,366 268,368 222,447");
chminusmap.setAttribute("shape","poly");
map.appendChild(chminusmap);


var volplus=()=>{
    console.log("hello1");
    let vol;
    let vid = <HTMLSelectElement>document.getElementById("player");
    if(vid.volume<1.0)
    vid.volume+=0.1;
}
var volminus=()=>{
    console.log("hello2");
    let vol;
    let vid = <HTMLSelectElement>document.getElementById("player");
    if(vid.volume>0.0)
    vid.volume-=0.1;
}
var chplus=()=>{
    console.log("hello3");
    if(i===links.length-1)
    i=0;
    else
    i++;

    let doc=document.getElementById("player");
    doc?.setAttribute("src",links[i]);

}
var chminus=()=>{
    console.log("hello4");
    if(i===0)
    i=links.length-1;
    else
    i--;

    let doc=document.getElementById("player");
    doc?.setAttribute("src",links[i]);
}

//<img src="remote.jpeg" usemap="#image-map">
/*row.innerHTML=`
<map name="image-map">
    <area onclick="volplus()" coords="115,234,72,312,162,315" shape="poly">
    <area onclick="volminus()" coords="74,366,116,446,160,367" shape="poly">
    <area onclick="chplus()" coords="225,235,176,318,273,317" shape="poly">
    <area onclick="chminus()" coords="267,368,179,367,220,444" shape="poly">
</map>`;*/




row.appendChild(tvimg);
row.appendChild(remimg);
row.appendChild(map);
row.appendChild(video);
document.body.appendChild(title);
document.body.appendChild(hr1);
document.body.appendChild(hr2);
document.body.appendChild(row);
//maindiv.appendChild(row);
//document.body.appendChild(maindiv);
