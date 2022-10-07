import { getStorageData } from "../utilities/fakedb"

export const productAndCartLoader = async () => {
    // get products
    const productData = await fetch('products.json')
    const products = await productData.json()
    //  get cart
    const storedCart = getStorageData()
    const savedData = []
    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = storedCart[id]
            addedProduct.quantity = quantity
            savedData.push(addedProduct)
        }
    }
    return { products, savedData }
} 