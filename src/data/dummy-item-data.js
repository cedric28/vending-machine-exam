const DUMMY_ITEM_DATA = [
    { id: 1, name: 'Caramel', price: 2.50 },
    { id: 2, name: 'Hazelnut', price: 3.10 },
    { id: 3, name: 'Organic Raw', price: 2.00 },
];

function getAllItems() {
    return DUMMY_ITEM_DATA;
}

function getItemById(id) {
    return DUMMY_ITEM_DATA.find((item) => item.id === id);
}

exports.getAllItems = getAllItems;
exports.getItemById = getItemById;