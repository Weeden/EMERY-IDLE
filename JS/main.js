// JavaScript Document

var saveGame = localStorage.getItem('goldMinerSave')
var saveGame2 = localStorage.getItem('rockMinerSave')
var saveGame3 = localStorage.getItem('fishCatchSave')
var saveGame5 = localStorage.getItem('moneyMadeSave')
var saveGame4 = localStorage.getItem('bankMoneySave')

function tab(tab) {
  // hide all your tabs, then shows the one the user selected.
  document.getElementById("shopMenu").style.display = "none"
  document.getElementById("boatShop").style.display = "none"
  document.getElementById("miscShop").style.display = "none"
  document.getElementById("backpackMenu").style.display = "none"
  document.getElementById("coinMenu").style.display = "none"
  document.getElementById("petShop").style.display = "none"
  document.getElementById("searchMenu").style.display = "none"
  document.getElementById("mapMenu").style.display = "none"
  document.getElementById("forest").style.display = "none"
  document.getElementById("mineMenu").style.display = "none"
  document.getElementById("seaMenu").style.display = "none"
  document.getElementById(tab).style.display = "inline-block"
}
// go to a tab for the first time, so not all show
tab("homeMenu")

function increaseWCLevel()  {
  if(woodcutting.currentwcXP >= woodcutting.levelCost)  {
    woodcutting.currentwcXP -= woodcutting.levelCost
    woodcutting.currentLevel += woodcutting.addLevel
    woodcutting.levelCost *= 2
    woodcutting.addWood += 1
    update(woodcutting.levelCost)
    update("wcp" + woodcutting.currentwcXP)
    update("wcLevel" + woodcutting.currentLevel);
  } else  {
    alert("You dont have enough wc experience yet idiot!")
  }
} 

function randomIntFromInterval(min, max) { // min and max included gives us a random number
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6) //between these two numbers

function update(id, content) {
  document.getElementById(id).innerHTML = content;
}

var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000); //how long the loading screen last 
}

function showPage() {    //shows loading screen (rotating circle) before game starts
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// *** functions for wc, mining, fishing, ect (main functions) ***

function stealCash() {          //theifing FUNCTION
  bank.money += bank.moneyPerClick
  bank.bankMoney -= bank.moneyPerClick
  bank.tp += bank.tPoint      //adds thieving points for levels
  update("cashMade", (bank.money) + " coins")
  update("money", (bank.money) + " coins")
  update("bankCashMade", (bank.bankMoney) + " bitcoin stolen!")
  update("tp", (bank.tp) + " TP EARNED")
}

function cutWood() {   //woodcutting function
  woodcutting.wood += woodcutting.addWood
  woodcutting.currentwcXP += woodcutting.wcxp
  update("wcp", (woodcutting.currentwcXP) + " WCP EARNED")
  update("logsCut", (woodcutting.wood) + " logs")
}

function mineRock() {   //mining function
  mining.rock += mining.rockPerClick
  mining.currentMP += mining.addMP
  update("mp", (mining.currentMP) + " MP EARNED")
  update("rockMined", (mining.rock) + " ore")
}

function catchFish()  {   //fishing function
  fishing.fish += fishing.fishPerClick
  fishing.currentFP += fishing.addFP
  update("fp", (fishing.currentFP) + " FP EARNED")
  update("fishCaught", (fishing.fish) + " fish")
}


//MAIN GAME LOOPS FOR EACH SKILL

/*
var woodcuttingGameLoop = window.setInterval(function() {
  diff = Date.now() - gameData.lastTick;
  gameData.lastTick = Date.now()
  gameData.gold += gameData.goldPerClick * (diff / 10000)
  update("goldMined", (gameData.gold) + " LOGS")
}, 10000)

var miningGameLoop = window.setInterval(function()   {
  diff = Date.now() - gameData2.lastTick;
  gameData2.lastTick = Date.now()
  gameData2.rock += gameData2.rockPerClick * (diff / 10000)
  update("rockMined", (gameData2.rock) + " ORE")
}, 10000) //10000 IS INTERVAL FOR AFK PROGRESS

 var fishingGameLoop = window.setInterval(function()  {
  diff = Date.now() - gameData3.lastTick;
  gameData3.lastTick = Date.now()
  gameData3.fish += gameData3.fishPerClick * (diff / 10000)
  update("fishCaught", (gameData3.fish) + " FISH")
}, 10000)
**/
var stocksGameLoop = window.setInterval(function() {
  diff = Date.now() - bank.lastTick;
  bank.lastTick = Date.now()
  bank.bankMoney += bank.bankMoneyPerClick * (diff / 10000)
  update("bankCashMade", (bank.bankMoney) + " coins")
}, 1000)
/*
var moneyGameLoop = window.setInterval(function() {
  diff = Date.now() - bank.lastTick;
  bank.lastTick = Date.now()
  bank.money += bank.moneyPerClick * (diff / 1000)
  update("cashMade", (bank.money) + " CASH")
}, 10000)
**/


//SKILL SAVEGAMES
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('goldMinerSave', JSON.stringify(woodcutting))
}, 10000) //15000 IS ANOTHER INTERVAL OF TIME

var saveGameLoop2 = window.setInterval(function() {
  localStorage.setItem('rockMinerSave', JSON.stringify(gameData2))
}, 10000)

var saveGameLoop3 = window.setInterval(function() {
 localStorage.setItem('fishCatchSave', JSON.stringify(gameData3))
}, 10000)

var saveGameLoop4 = window.setInterval(function() {
  localStorage.setItem('bankCashMade', JSON.stringify(bank))
}, 10000)

var saveGameLoop5 = window.setInterval(function*()  {
  localStorage.setItem('moneyMadeSave', JSON.stringify(bank))
}, 10000)

//BELOW IS WHAT GETS RID OF .000 AT END OF NUMBER (FORMAT)
function format(number, type) {
    let exponent = Math.floor(Math.log10(number))
    let mantissa = number / Math.pow(10, exponent)
    if (exponent < 3) return number.toFixed(1)
    if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
    if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}

if (typeof saveGame.gold !== "undefined") gameData.gold = saveGame.gold;
if (typeof saveGame.goldPerClick !== "undefined") gameData.goldPerClick = saveGame.goldPerClick;
if (typeof saveGame.goldPerClickCost !== "undefined") gameData.goldPerClickCost = saveGame.goldPerClickCost;
if (typeof saveGame.lastTick !== "undefined") gameData.lastTick = saveGame.lastTick;

if (typeof saveGame2.rock !== "undefined") gameData2.ore = saveGame2.rock;
if (typeof saveGame2.rockPerClick !== "undefined") gameData2.rockPerClick = saveGame2.rockPerClick;
if (typeof saveGame2.rockPerClickCost !== "undefined") gameData2.rockPerClickCost = saveGame2.rockPerClickCost;
if (typeof saveGame2.lastTick !== "undefined") gameData2.lastTick = saveGame2.lastTick;

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(document).ready(function(){    //Hover function
  $('[data-toggle="popover"]').popover();
});

