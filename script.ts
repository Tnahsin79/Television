var div=document.createElement("div");
div.setAttribute("class","maindiv");

var appname=document.createElement("h2");
appname.setAttribute("class","display-2");
appname.innerText="MOKKORI PLAYER";

var topbtn=document.createElement("button");
topbtn.setAttribute("class","btn btn-primary");
topbtn.innerText="TOP ARTISTS";
topbtn.setAttribute("onclick","topartist()");

var recbtn=document.createElement("button");
recbtn.setAttribute("class","btn btn-primary");
recbtn.innerText="RECOMMENDED FOR YOU";
recbtn.setAttribute("onclick","recommend()");

var song=document.createElement("input");
song.setAttribute("type","text");
song.setAttribute("class","w3-input");
song.setAttribute("id","name");
song.setAttribute("placeholder","SEARCH SONG");
song.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("search-btn").click();
    }
});

var btn=document.createElement("button");
btn.setAttribute("class","btn btn-primary");
btn.setAttribute("id","search-btn");
btn.innerText="SEARCH";
btn.setAttribute("onclick","search()");

var hr1=document.createElement("hr");

var bodydiv=document.createElement("div");
bodydiv.setAttribute("class","container");
bodydiv.setAttribute("id","bodydiv");

var load=document.createElement("h1");
load.innerText="LOADING...";
var load2=document.createElement("h3");
load2.innerText="THIS MAY TAKE A FEW SECONDS!";

var createcard=(result:object)=>{
    let data=result["tracks"];
    for(var i=0;i<data.length;i++)
    {
    if(data[i]["hub"]["actions"]===undefined)
    continue;
    
    var makecard=document.createElement("div");
    makecard.setAttribute("class","card");

    var row=document.createElement("div");
    row.setAttribute("class","row");
    var left=document.createElement("div");
    left.setAttribute("class","col-12 col-md-8");
    var right=document.createElement("div");
    right.setAttribute("class","col-12 col-md-4");
    
    var aud=document.createElement("audio");
    aud.setAttribute("controls","true");
    var source=document.createElement("source");
    source.setAttribute("src",`${data[i]["hub"]["actions"][1]["uri"]}`);
    aud.appendChild(source);

    var cardbody=document.createElement("div");
    cardbody.setAttribute("class","card-body");
    var pname=document.createElement("p");
    pname.innerText=data[i]["title"];

    var image=document.createElement("img");
    image.setAttribute("src",`${data[i]["images"]["coverart"]}`);

    makecard.appendChild(cardbody);
    left.appendChild(pname);
    left.appendChild(aud);
    right.appendChild(image);
    row.appendChild(left);
    row.appendChild(right);
    cardbody.appendChild(row);
    bodydiv.appendChild(makecard);
    }
}
var topsongdb;
var recsongdb;


var home=async()=>{
    try{
        bodydiv.appendChild(load);
        bodydiv.appendChild(load2);
        let data=await fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598", 
        {
	    "method": "GET",
        "headers":  
            {
		    "x-rapidapi-host": "shazam.p.rapidapi.com",
		    "x-rapidapi-key": "043071437cmshecef83baf67ac69p10da0bjsndf8db5e9f01d"
	        }
        });
        data=await data.json();
        //console.log(typeof(data),data);
        topsongdb=data;
        console.log("topdb done!")

        //createcard(topsongdb);

        data=await fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036", 
        {
	    "method": "GET",
        "headers":  
            {
		    "x-rapidapi-host": "shazam.p.rapidapi.com",
		    "x-rapidapi-key": "043071437cmshecef83baf67ac69p10da0bjsndf8db5e9f01d"
	        }
        });
        data=await data.json();
        recsongdb=data;
        console.log("recdb done!");

        const myNode = document.getElementById("bodydiv");
        myNode.innerHTML = '';
        createcard(topsongdb);

    }catch(error){
        console.log(error);
    }
    
}
home();

//var recommend=async()=>{
var recommend=()=>{
    const myNode = document.getElementById("bodydiv");
    myNode.innerHTML = '';
    createcard(recsongdb);
    /*try{
        const myNode = document.getElementById("bodydiv");
        myNode.innerHTML = '';
        let data=await fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036", 
        {
	    "method": "GET",
        "headers":  
            {
		    "x-rapidapi-host": "shazam.p.rapidapi.com",
		    "x-rapidapi-key": "043071437cmshecef83baf67ac69p10da0bjsndf8db5e9f01d"
	        }
        });
        data=await data.json();
        console.log(typeof(data),data);
        createcard(data);
    }catch(error){
        console.log(error);
    }*/
    
}

var topartist=()=>{
    const myNode = document.getElementById("bodydiv");
    myNode.innerHTML = '';
    //home();
    createcard(topsongdb);
}

var search=()=>{
    let data=topsongdb["tracks"];
    let flag=0;
    var songname=(<HTMLSelectElement>document.getElementById("name")).value;
    songname=songname.toUpperCase();
    for(var i=0;i<data.length;i++)
    {
        let temp=data[i]["title"];
        temp=temp.toUpperCase();
        if(temp===songname)
        { flag=1; break; }
    }
    const myNode = document.getElementById("bodydiv");
    myNode.innerHTML = '';
    
    if(flag===0)
    {
        var res=document.createElement("h1");
        res.innerText="SORRY! NO SONG(S) FOUND!!!!"
        bodydiv.appendChild(res);   
    }
    else
    {
    var makecard=document.createElement("div");
    makecard.setAttribute("class","card");

    var row=document.createElement("div");
    row.setAttribute("class","row");
    var left=document.createElement("div");
    left.setAttribute("class","col-6 col-md-8");
    var right=document.createElement("div");
    right.setAttribute("class","col-6 col-md-4");
    
    var aud=document.createElement("audio");
    aud.setAttribute("controls","true");
    var source=document.createElement("source");
    source.setAttribute("src",`${data[i]["hub"]["actions"][1]["uri"]}`);
    aud.appendChild(source);

    var cardbody=document.createElement("div");
    cardbody.setAttribute("class","card-body");
    var pname=document.createElement("p");
    pname.innerText=data[i]["title"];

    var image=document.createElement("img");
    image.setAttribute("src",`${data[i]["images"]["coverart"]}`);

    makecard.appendChild(cardbody);
    left.appendChild(pname);
    left.appendChild(aud);
    right.appendChild(image);
    row.appendChild(left);
    row.appendChild(right);
    cardbody.appendChild(row);
    bodydiv.appendChild(makecard);
    }
}


div.appendChild(appname);
div.appendChild(topbtn);
div.appendChild(recbtn);
div.appendChild(song);
div.appendChild(btn);
div.appendChild(hr1);
div.appendChild(bodydiv);
document.body.appendChild(div);