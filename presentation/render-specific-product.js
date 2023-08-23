import { loadProducts } from "../usecases/load-products";

export const specificProduct = async (idProduct) => {
    const section = document.querySelector('section');
    const products = `https://fakestoreapi.com/products/${idProduct}`;
    const response = await fetch(products);
    const data = await response.json();
    section.innerHTML = `<article><p> <img src="${data.image}" width="200" height="200"> Description: ${data.description} Title: ${data.title}<br> Price: ${data.price}</p></article>`

}




