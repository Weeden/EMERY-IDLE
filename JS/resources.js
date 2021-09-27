var woodcutting = {
    currentwcXP: 0,
    wcxp: 1,
    currentLevel: 1,
    levelCost: 20,
    addLevel: 1,
    wood: 0,
    addWood: 1,
    upgradeHatchet: 100,
    lastTick: Date.now()
  }
  
  var mining = {   //mining
    rock: 0,
    rockPerClick: 1,
    rockPerClickCost: 100,
    currentMP: 0,
    addMP: 1,
    lastTick: Date.now()
  }
  
  var fishing = {       //fishing
    currentFP: 0,
    addFP: 1,
    fish: 0,
    fishPerClick: 1,
    fishPerClickCost: 100,
    fishCapeCost: 777,
    lastTick: Date.now()
  }
  
  var bank =  {   //thieving variables
    money: 0,
    bankMoney: 10000,
    moneyPerClick: 1,
    bankMoneyPerClick: 500,
    moneyPerClickCost: 100,
    bankMoneyPerClickCost: 100,
    CompCapeCost: 99999, 
  
    //level stuff below
    tp: 0,
    tPoint: 1,
    tpUpgradecost: 100,
    thiefCapeCost: 50000,
    powerUp1Cost: 1000,
    lastTick: Date.now() 
  }
  
  function stealBank()  {
    bank.money += bank.bankMoney
    bank.bankMoney -= bank.rndInt
    update("cashMade" + (bank.money))
    update("bankCashMade" + (bank.bankMoney))
  }
  