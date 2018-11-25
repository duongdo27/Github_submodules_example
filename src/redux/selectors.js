export const getItems = store => store.items;

export const getTotalPrice = store => {
    return store.items.map((item, index) => {
        return item.quantity * item.unitPrice;
    }).reduce((currentPrice, price) => {
        return currentPrice + price;
    });
};

