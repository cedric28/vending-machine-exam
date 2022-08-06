const DUMMY_COIN_BANK = [
    { name: 'TwoDollars', value: 2.0 },
    { name: 'OneDollar', value: 1.0 },
    { name: 'Half', value: 0.50 },
    { name: 'TwentyCents', value: 0.20 },
    { name: 'Dime', value: 0.1 },
];


function getAllDenomination() {
    return DUMMY_COIN_BANK;
}

function getDenominationByName(name) {
    return DUMMY_COIN_BANK.find((denom) => denom.name === name);
}

exports.getAllDenomination = getAllDenomination;
exports.getDenominationByName = getDenominationByName;