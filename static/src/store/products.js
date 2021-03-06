function getProducts(array) {
    var products = []
    for (var i = 0; i < array.length; i++) {
        products.push({
            id: i+1,
            name: array[i],
            deltaClass: null,
            trades: [], // { change, class, price, side, size, time, trade_id }
            best_ask: null,
            best_bid: null,
            high_24h: null,
            low_24h: null,
            open_24h: null,
            price: null,
            product_id: array[i].split('/').join('-'),
            priceDelta24h: 0.00,
            sequence: null,
            trade_id: null,
            volume_24h: null,
            volume_30d: null
        })
    }
    return products
}

export { getProducts }