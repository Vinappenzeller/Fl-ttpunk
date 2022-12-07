var Inputfield = document.getElementById("Inputfield");
var playbutton = document.getElementById("Play");
var giveupbutton = document.getElementById("Giveup");
var Input = document.getElementById("Userinput");
var restartbutton = document.getElementById("restartbutton");
var Tlettre;
var Score = 0;
var startminutes = 1.5;
let time = startminutes * 60;
var stoptimer = false;
var exit = false;

restartbutton.addEventListener("click", restart);

const Timer = document.getElementById("Timer");
const AnswersA = [
  "audi",
  "airways",
  "alfa romeo",
  "alpina",
  "alpine",
  "aston martin",
];
const AnswersB = [
  "bentley",
  "bmw",
  "borgward",
  "brabus",
  "brilliance",
  "bugatti",
  "buick",
  "byd",
];
const AnswersC = [
  "cadillac",
  "caterham",
  "chevrolet",
  "chrysler",
  "citroen",
  "corvette",
  "cupra",
];
const AnswersD = ["dacia", "daihatsu", "dodge", "ds"];
const AnswersF = ["ferrari", "fiat", "fisker", "ford"];
const AnswersG = ["genesis", "great wall motor", "gumpert"];
const AnswersH = ["honda", "hummer", "hyundai"];
const AnswersI = ["infiniti", "ioniq", "isuzu"];
const AnswersJ = ["jaguar", "jeep"];
const AnswersK = ["kia", "koenigsegg"];
const AnswersL = [
  "lada",
  "lambnorghini",
  "lancia",
  "land rover",
  "lexus",
  "lincoln",
  "lotus",
  "lucid motors",
  "lynk and co",
];
const AnswersM = [
  "maserati",
  "mayback",
  "mazda",
  "mclaren",
  "mercedes",
  "mg",
  "mini",
  "mitsubishi",
  "morgan",
];
const AnswersN = ["nevs", "nio", "nissan", "nsu", "opel", "ora"];
const AnswersO = ["ora", "opel"];
const AnswersP = ["pagani", "peugeot", "polestar", "porsche"];
const AnswersR = ["rimac", "range rover", "renault", "rivian", "rolls-royce"];
const AnswersS = [
  "saab",
  "seat",
  "shelby",
  "skoda",
  "smart",
  "ssangyong",
  "subaru",
  "suzuki",
];
const AnswersT = ["tesla", "toyota", "trabant"];
const AnswersV = ["vinfast", "volvo", "vw"];
const AnswersW = ["wey", "wiesmann"];

var loc = 1;
var locr = loc.toString();
var locatione = document.getElementById(locr);

Inputfield.style.display = "none";
giveupbutton.style.display = "none";
restartbutton.style.display = "none";

function start() {
  exit = false;
  loc = 1;
  locr = loc.toString();
  locatione = document.getElementById(locr);
  Score = 0;
  document.getElementById("Score").innerHTML = "Score: " + Score + "";
  startminutes = 1.5;
  time = startminutes * 60;
  stoptimer = false;
  playbutton.style.display = "none";
  Inputfield.style.display = "block";
  giveupbutton.style.display = "block";
  setInterval(updateTimer, 1000);
  
}

function end() {
  if (exit) {
    stoptimer = true;
    alert("time is out");
  }
  stoptimer = true;
  Inputfield.style.display = "none";
  restartbutton.style.display = "block";
  giveupbutton.style.display = "none";
  document.getElementById("Score").innerHTML = "Score: " + Score + "";
}

function updateTimer() {
  if (stoptimer) {
    return;
  }
  if (time == -1) {
exit = true;
end();
    return;
  }
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  Timer.innerHTML = `${minutes}:${seconds}`;
  time--;
  console.log(time);
  
}

function restart() {
  document.getElementById("Timer").innerHTML = "1:30";
  playbutton.style.display = "block";
  restartbutton.style.display = "none";
  document.getElementById("Score").innerHTML = "Score: " + Score + "";
  loc = 1;
  for (var i = 0; i < 20; i++) {
    locatione = document.getElementById(loc);
    locatione.innerHTML = "";
    loc++;
  }
}

Input.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    Tlettre = Input.value.toLowerCase();
    if (Tlettre != "") {
      if (locatione.innerHTML == "") {
        Input.value = "";
        locatione.innerHTML = Tlettre;
        console.log(Tlettre);
        CheckAnswr();
      } else if (locatione.innerHTML != "" && loc != 21) {
        loc++;
        locr = loc.toString();
        locatione = document.getElementById(locr);
        Input.value = "";
        locatione.innerHTML = Tlettre;
        console.log(Tlettre);
        CheckAnswr();
      }
    }
  }
});

async function CheckAnswr() {
  var check;

  switch (locr) {
    case "1":
      check = AnswersA.includes(Tlettre);
      break;
    case "2":
      check = AnswersB.includes(Tlettre);
      break;
    case "3":
      check = AnswersC.includes(Tlettre);
      break;
    case "4":
      check = AnswersD.includes(Tlettre);
      break;
    case "5":
      check = AnswersF.includes(Tlettre);
      break;
    case "6":
      check = AnswersG.includes(Tlettre);
      break;
    case "7":
      check = AnswersH.includes(Tlettre);
      break;
    case "8":
      check = AnswersI.includes(Tlettre);
      break;
    case "8":
      check = AnswersI.includes(Tlettre);
      break;
    case "9":
      check = AnswersJ.includes(Tlettre);
      break;
    case "10":
      check = AnswersK.includes(Tlettre);
      break;
    case "11":
      check = AnswersL.includes(Tlettre);
      break;
    case "12":
      check = AnswersM.includes(Tlettre);
      break;
    case "13":
      check = AnswersN.includes(Tlettre);
      break;
    case "14":
      check = AnswersO.includes(Tlettre);
      break;
    case "15":
      check = AnswersP.includes(Tlettre);
      break;
    case "16":
      check = AnswersR.includes(Tlettre);
      break;
    case "17":
      check = AnswersS.includes(Tlettre);
      break;
    case "18":
      check = AnswersT.includes(Tlettre);
      break;
    case "19":
      check = AnswersV.includes(Tlettre);
      break;
    case "20":
      check = AnswersW.includes(Tlettre);
      break;
  }

  if (check) {
    locatione.style.color = "#AAFF00";
    Score++;
  } else if (!check) {
    locatione.style.color = "#FF0000";
  }
}
