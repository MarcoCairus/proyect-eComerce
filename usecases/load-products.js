import { productModel } from "../mappers/product-model";


export const loadProducts = async () => {
    const url = 'https://fakestoreapi.com/products';
    const response = await fetch(url)
    const data = await response.json();
    const productData = data.map(productModel);
    //console.log(productData);
    return productData;
}