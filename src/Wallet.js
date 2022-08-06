const { increaseQuantity } = require("./data/dummy-wallet");
const { getDenominationByName } = require("./data/dummy-coin-bank");

// @params: string coinName to update by int numberOfCoins
// @validation: check if the coin denomination exist in the vending machine
// @returns: true if the deposit was successful and false otherwise
function addMoneyWallet(coinName, numberOfCoins){
    const checkDenomination = getDenominationByName(coinName);
   
    if (checkDenomination) {
        return increaseQuantity(coinName,numberOfCoins);
    }

    return false;
}

exports.addMoneyWallet = addMoneyWallet;