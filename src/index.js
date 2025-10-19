import * as cartServices from "./services/cart.js"
import { createItem } from "./services/item.js"

const myCart = []

console.log("Welcome to the your shopee cart!")

const item1 = await createItem("HotWeels", 19.99, 1)
const item2 = await createItem("pista de corrida", 299.99, 2)

await cartServices.addItem(myCart, item1)
await cartServices.addItem(myCart, item2)


console.log("Shopee cart TOTAL IS:")
await cartServices.calculateTotal(myCart)