const logger = require("./Logger");
const Shopper = require("./Shopper");
const Store = require("./Store");
const scoutPrototype = require("./scout_prototype");

// logger is singleton due node module caching
//const logger = new Logger().getInstance();
logger.log("Starting app...");

let alex = new Shopper("alex");
let ski_shop = new Store("Steep and deep supplies", [
    {
        item: "item1",
        qty: 5,
        price: 758
    },
    {
        item: "item2",
        qty: 20,
        price: 5
    }
]);

logger.log("Finished config...");
console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`    ${log.message}`));

// prototype pattern
const mario = scoutPrototype.clone();
mario.name = "Mario";
mario.addItemToList("Mario's item");

const mary = scoutPrototype.clone();
mary.name = "Mary";
mary.addItemToList("Mary's item");

console.log(`${mario.name}'s list: ${mario.shoppingList}`);
console.log(`${mary.name}'s list: ${mary.shoppingList}`);
