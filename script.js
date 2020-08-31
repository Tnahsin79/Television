var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var div = document.createElement("div");
div.setAttribute("class", "maindiv");
var appname = document.createElement("h2");
appname.setAttribute("class", "display-2");
appname.innerText = "MOKKORI PLAYER";
var topbtn = document.createElement("button");
topbtn.setAttribute("class", "btn btn-primary");
topbtn.innerText = "TOP ARTISTS";
topbtn.setAttribute("onclick", "topartist()");
var recbtn = document.createElement("button");
recbtn.setAttribute("class", "btn btn-primary");
recbtn.innerText = "RECOMMENDED FOR YOU";
recbtn.setAttribute("onclick", "recommend()");
var song = document.createElement("input");
song.setAttribute("type", "text");
song.setAttribute("class", "w3-input");
song.setAttribute("id", "name");
song.setAttribute("placeholder", "SEARCH SONG");
song.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("search-btn").click();
    }
});
var btn = document.createElement("button");
btn.setAttribute("class", "btn btn-primary");
btn.setAttribute("id", "search-btn");
btn.innerText = "SEARCH";
btn.setAttribute("onclick", "search()");
var hr1 = document.createElement("hr");
var bodydiv = document.createElement("div");
bodydiv.setAttribute("class", "container");
bodydiv.setAttribute("id", "bodydiv");
var load = document.createElement("h1");
load.innerText = "LOADING...";
var load2 = document.createElement("h3");
load2.innerText = "THIS MAY TAKE A FEW SECONDS!";
var createcard = function (result) {
    var data = result["tracks"];
    for (var i = 0; i < data.length; i++) {
        if (data[i]["hub"]["actions"] === undefined)
            continue;
        var makecard = document.createElement("div");
        makecard.setAttribute("class", "card");
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        var left = document.createElement("div");
        left.setAttribute("class", "col-12 col-md-8");
        var right = document.createElement("div");
        right.setAttribute("class", "col-12 col-md-4");
        var aud = document.createElement("audio");
        aud.setAttribute("controls", "true");
        var source = document.createElement("source");
        source.setAttribute("src", "" + data[i]["hub"]["actions"][1]["uri"]);
        aud.appendChild(source);
        var cardbody = document.createElement("div");
        cardbody.setAttribute("class", "card-body");
        var pname = document.createElement("p");
        pname.innerText = data[i]["title"];
        var image = document.createElement("img");
        image.setAttribute("src", "" + data[i]["images"]["coverart"]);
        makecard.appendChild(cardbody);
        left.appendChild(pname);
        left.appendChild(aud);
        right.appendChild(image);
        row.appendChild(left);
        row.appendChild(right);
        cardbody.appendChild(row);
        bodydiv.appendChild(makecard);
    }
};
var topsongdb;
var recsongdb;
var home = function () { return __awaiter(_this, void 0, void 0, function () {
    var data, myNode, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                bodydiv.appendChild(load);
                bodydiv.appendChild(load2);
                return [4 /*yield*/, fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598", {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": "shazam.p.rapidapi.com",
                            "x-rapidapi-key": "043071437cmshecef83baf67ac69p10da0bjsndf8db5e9f01d"
                        }
                    })];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                data = _a.sent();
                //console.log(typeof(data),data);
                topsongdb = data;
                console.log("topdb done!");
                return [4 /*yield*/, fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036", {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": "shazam.p.rapidapi.com",
                            "x-rapidapi-key": "043071437cmshecef83baf67ac69p10da0bjsndf8db5e9f01d"
                        }
                    })];
            case 3:
                //createcard(topsongdb);
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 4:
                data = _a.sent();
                recsongdb = data;
                console.log("recdb done!");
                myNode = document.getElementById("bodydiv");
                myNode.innerHTML = '';
                createcard(topsongdb);
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
home();
//var recommend=async()=>{
var recommend = function () {
    var myNode = document.getElementById("bodydiv");
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
};
var topartist = function () {
    var myNode = document.getElementById("bodydiv");
    myNode.innerHTML = '';
    //home();
    createcard(topsongdb);
};
var search = function () {
    var data = topsongdb["tracks"];
    var flag = 0;
    var songname = document.getElementById("name").value;
    songname = songname.toUpperCase();
    for (var i = 0; i < data.length; i++) {
        var temp = data[i]["title"];
        temp = temp.toUpperCase();
        if (temp === songname) {
            flag = 1;
            break;
        }
    }
    var myNode = document.getElementById("bodydiv");
    myNode.innerHTML = '';
    if (flag === 0) {
        var res = document.createElement("h1");
        res.innerText = "SORRY! NO SONG(S) FOUND!!!!";
        bodydiv.appendChild(res);
    }
    else {
        var makecard = document.createElement("div");
        makecard.setAttribute("class", "card");
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        var left = document.createElement("div");
        left.setAttribute("class", "col-6 col-md-8");
        var right = document.createElement("div");
        right.setAttribute("class", "col-6 col-md-4");
        var aud = document.createElement("audio");
        aud.setAttribute("controls", "true");
        var source = document.createElement("source");
        source.setAttribute("src", "" + data[i]["hub"]["actions"][1]["uri"]);
        aud.appendChild(source);
        var cardbody = document.createElement("div");
        cardbody.setAttribute("class", "card-body");
        var pname = document.createElement("p");
        pname.innerText = data[i]["title"];
        var image = document.createElement("img");
        image.setAttribute("src", "" + data[i]["images"]["coverart"]);
        makecard.appendChild(cardbody);
        left.appendChild(pname);
        left.appendChild(aud);
        right.appendChild(image);
        row.appendChild(left);
        row.appendChild(right);
        cardbody.appendChild(row);
        bodydiv.appendChild(makecard);
    }
};
div.appendChild(appname);
div.appendChild(topbtn);
div.appendChild(recbtn);
div.appendChild(song);
div.appendChild(btn);
div.appendChild(hr1);
div.appendChild(bodydiv);
document.body.appendChild(div);
//# sourceMappingURL=script.js.map