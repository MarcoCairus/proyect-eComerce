import { loadProducts } from "./load-products"

export const filterFunction = async () => {
    const products = await loadProducts()
    // const filterProducts = products.map((e, i, a) => {
    //     console.log(e.price);

    // });
}