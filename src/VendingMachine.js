const toFloatingPoint = require('./utils/toFloatingPoint');
const { getItemById } = require("./data/dummy-item-data");

// @params: int itemIndex, array of Coin payment
// @returns: [item, change] if purchase went through and false otherwise
function purchaseItem(itemId, payment){
    const checkItem = getItemById(itemId);
    if(!checkItem || payment === 0){
        return false;
    }
    
    const ItemPrice  = checkItem.price;
    if(ItemPrice <= payment) {
        const change = payment - ItemPrice;
        delete checkItem.id;
        return [checkItem, toFloatingPoint(change)];
    }

    return false;
}

exports.purchaseItem = purchaseItem;