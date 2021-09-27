// *** Upgrade Functions ***

function upgradeHatchet() { //upgrade your Hatchet
    if (bank.money >= woodcutting.upgradeHatchet) {
      bank.money -= woodcutting.upgradeHatchet
      woodcutting.addWood += 1
      woodcutting.upgradeHatchet *= 2
      update("cashMade", bank.money + " coins")
      update("logsCut", woodcutting.wood + " logs")
      update("hatchetUpgrade", "Hatchet (Current LVL " + (woodcutting.addWood) + ") Cost: " + (woodcutting.upgradeHatchet) + " coins")
     }  else {
       //alert("Not enough coins!")
     }
  }
  
  function upgradePickaxe()  { //upgrade pickaxe
    if  (bank.money >= mining.rockPerClickCost)  {
      bank.money -= mining.rockPerClickCost
      mining.rockPerClick += 1
      mining.rockPerClickCost *= 2
      bank.money -= mining.rockPerClickCost
      update("cashMade", (bank.money) + " coins")
      update("rockMined", (mining.rock) + " ore")
      update("perClickUpgrade2", "Pickaxe (Current LVL " + (mining.rockPerClick) + ") Cost: " + (mining.rockPerClickCost) + " ore")
    } else  {
      //alert("Not enough ore!")
    }
  }
  
  function upgradeFishingPole()  { //upgrade fishing pole
    if  (bank.money >= fishing.fishPerClickCost)  {
      bank.money -= fishing.fishPerClickCost
      fishing.fishPerClick += 1
      fishing.fishPerClickCost *= 2
      update("cashMade", (bank.money) + " coins")
      update("fishCaught", fishing.fish + " fish")
      update("perClickUpgrade3", "Fishing Pole (Current LVL " + (fishing.fishPerClick) + ") Cost: " + (fishing.fishPerClickCost) + " fish")
    } else  {
      //alert("Not enough fish!")
    }
  }
  
  function upgradeThief() {
    if (bank.tp >= bank.tpUpgradecost) {
      bank.tp -= bank.tpUpgradecost
      bank.tp += 1
      bank.tpUpgradecost *= 2
      update("tp", bank.tp + " Theiving Points")
      update("tpUpgrade", "perClickUpgrade5", "tpUpgradecost", "THIEVIEING LEVEL: " + bank.tPoint + " (UPGRADE FOR: " + bank.tpUpgradecost + " T POINTS)")
    }
    else  {
      //alert("You don't have enough Thieving Experience for that!")
    }
  } 
  
  function buyCompCape()  {
    if (exchange.money >= exchange.compCapeCost) {
      exchange.money -= exchange.compCapeCost
      exchange.moneyPerClick += 7
      exchange.moneyPerClick *= 10
      update("cashMade", exchange.money + " $$$")
      update("perClickUpgrade4", "Completetionist Cape, YOU HAVE COME FAR MY FRIEND. TAKE A SCREENSHOT!")
      alert("YOU NOW GET 7$ per click & X10 money per tick! Congrats!!!");
    }
    else  {
      alert("YOU ARE NOT WORTHY! THIS CAPE IS FOR ONLY THE BEST THIEFS");
    }
  }
  
  function moneyPowerUp() {
    if(bank.money >= bank.powerUp1Cost) {
      bank.money -= bank.powerUp1Cost
      bank.moneyPerClick += 10
      bank.moneyPerClickCost *= 2
      update("cashMade", bank.money + " CASH")
      update("moneyPowerUp")
    }
  }
  
  function unlockFishing()  {
    if(bank.money >= bank.UGfishing)  {
      bank.money -= bank.UGfishing
    }
  }

  function buyBoat()  {
    alert("You cannot buy this item yet.")
  }

  function  buyBoat1()  {
    
  }