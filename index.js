const Logger = require("./Logger");
const Shopper = require("./Shopper");
const Store = require("./Store");

const logger = new Logger().getInstance();
logger.log("Starting app...");

let alex = new Shopper("alex", 548);
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
