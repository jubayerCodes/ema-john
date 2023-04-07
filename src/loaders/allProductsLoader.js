import { getShoppingCart } from "../utilities/fakedb"

const allProductsLoader = async() => {
    const res = await fetch('products.json')
    const loadedProducts = await res.json()
    

    const storedCart = getShoppingCart()
    const savedCart = []

    // step 1: get addedProduct by id
    for (const id in storedCart) {
        const addedProduct = loadedProducts.find(product => product['id'] === id);

        // step 2: get quantity from storeCart
        const quantity = storedCart[id]

        // step 3: set quantity to addedProduct
        if (addedProduct) {
            addedProduct.quantity = quantity

            // step 4: create an array of addedProducts
            savedCart.push(addedProduct)
        }
    }

    return {storedCart: savedCart, products: loadedProducts}
}

export default allProductsLoader;