import { getStorageData } from "../utilities/fakedb"

export const productAndCartLoader = async () => {
    // get products
    const productData = await fetch('http://localhost:5000/products')
    const {products} = await productData.json()
    //  get cart
    const storedCart = getStorageData()
    const savedData = []
    for (const id in storedCart) {
        const addedProduct = products.find(product => product._id === id)
        if (addedProduct) {
            const quantity = storedCart[id]
            addedProduct.quantity = quantity
            savedData.push(addedProduct)
        }
    }
    return { products, savedData }
} 