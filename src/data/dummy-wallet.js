const isValidName = require('../validation/isValidName');
const isValidQuantity = require('../validation/isValidQuantity');
const toFloatingPoint = require('../utils/toFloatingPoint');

const WALLET_LIMIT = 5;
const DUMMY_WALLET = [
    {
        name: "TwoDollars",
        quantity: 0,
        value: 2,
    },
    {
        name: "OneDollar",
        quantity: 0,
        value: 1,
    },
    {
        name: "Half",
        quantity: 0,
        value: 0.5,
    },
    {
        name: "TwentyCents",
        quantity: 0,
        value: 0.2,
    },
    {
        name: "Dime", 
        quantity: 0,
        value: 0.1,
    },
];

function getWallet() {
    return DUMMY_WALLET;
}

function getTotalBalance(){
    return DUMMY_WALLET.reduce((total, wallet) => {
        return toFloatingPoint(total + (wallet.value * wallet.quantity));
    },0);
}

function increaseQuantity(coinName, numberOfCoins){
    const walletItem = DUMMY_WALLET.filter(item => item.name == coinName);
    const totalBalance = getTotalBalance() + (numberOfCoins * walletItem[0].value);
   
    if (isValidQuantity(numberOfCoins) && isValidName(coinName) && totalBalance <= WALLET_LIMIT) {
        const qty = numberOfCoins ? numberOfCoins : 1
        if (walletItem) {
            walletItem.quantity += qty
        }

        return true;
    }
    return false;
}


exports.getWallet = getWallet;
exports.increaseQuantity = increaseQuantity;
exports.getTotalBalance = getTotalBalance;