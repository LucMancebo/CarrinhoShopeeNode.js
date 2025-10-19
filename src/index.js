import * as cartServices from "./services/cart.js"
import { createItem } from "./services/item.js"

const myCart = []

console.log("Welcome to the your shopee cart!")

//criação de item
const item1 = await createItem("HotWeels", 19.99, 1)
const item2 = await createItem("pista de corrida", 299.99, 2)

//add item no carrinho
await cartServices.addItem(myCart, item1)
await cartServices.addItem(myCart, item2)


await cartServices.removeItem(myCart, item2)
await cartServices.displayCart(myCart)

await cartServices.calculateTotal(myCart)

// await cartServices.deleteItem(myCart, item1.name)
// await cartServices.calculateTotal(myCart)

