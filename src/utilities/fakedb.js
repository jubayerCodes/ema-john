// use local storage to manage cart data
const addToDb = (id, inputedQuantity) => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];

    if(inputedQuantity >= 0){
        shoppingCart[id] = inputedQuantity;
    } else if (!quantity && !inputedQuantity) {
        shoppingCart[id] = 1;
    } else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }

    if(shoppingCart[id] === 0){
        delete shoppingCart[id]
    }

    console.log(shoppingCart);
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
