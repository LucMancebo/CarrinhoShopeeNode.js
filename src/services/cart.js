

// Adicionar item ✅
async function addItem(userCart, item) {
    userCart.push(item)
}

//deletar item
async function deleteItem(userCart, name) {
    
}

//remover item
async function removeItem(userCart, index) {
    
}

//calcular total ✅
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result)
}

export {
    addItem,
    removeItem,
    deleteItem, 
    calculateTotal,

}