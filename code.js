function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
}

function stop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "";
}

function checkCreds() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("1Name").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstname + " " + lastName;

    alert("Hello, " + fullName + ", have an exellent day!");
}
function betterBlastoffLoop() {
var currTime = 50
for(var i = 0; i < 51 ; i = i + 5) {
setTimeout(function() {
if (currTime == 0) {
    document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
} else if (currTime < 25) {
    document.getElementById("countdownTimer").innerHTML = "Warning Less than 1/2 way to launch, time left =" + currTime;
}
else {
    document.getElementById("countdownTimer").innerHTML = currTime;
} 
currTime = currTime - 5;
}, 1000*i);
}
}
function play() {
    var die1 =Math.ceil(Math.random()*6);
    var die2 =Math.ceil(Math.random()*6);
    var sum = die1 + die2
    document.write("Die 1 = " + die1 + "<br>")
    document.write("Die 2 = " + die2 + "<br>")
    document.write("Sum = " + sum + "<br>")
    if (sum == 7 || sum == 11)
    {
        document.write("Craps! - you lose")
    }
    else if (die1== die2 && die1%2 == 0)
    {
        document.write("Doubles! - you win")
    } else {
        document.write("Not a winner")
    }
}

function fork() {
    mySound = new sound("fork.mp3")
    mySound.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio")
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause;
    }
}