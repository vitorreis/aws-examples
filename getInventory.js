var faker = require('faker');

exports.handler = function (event, context, callback) {
    // return an array of 10 items in inventory
    // include product name, color, description
    // size, and price
    var inventory = [];
    for (var i = 0; i < 10; i++){
        var item = {};
        item.category = getFoodCategory();
        item.name = getFoodName(item.category);
        item.price = getFoodPrice();
        inventory.push(item);
    }
    callback(null, inventory);
};

function getFoodCategory() {
    var foodType = [
        "Pizza",
        "Sushi",
        "Nigiri",
        "Icecream",
        "Pasta"
    ];
    return foodType[getNum(0, foodType.length - 1)];
}

function getFoodName(foodCategory) {
    return faker.commerce.productAdjective() + " " + foodCategory;
}

function getFoodPrice() {
    return faker.commerce.price();
}

function getNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
