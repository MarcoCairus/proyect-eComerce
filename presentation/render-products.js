import { productModel } from "../mappers/product-model";
import { loadProducts } from "../usecases/load-products";
import { specificProduct } from "./render-specific-product";



export const renderProducts = async () => {
    const section = document.querySelector('section')
    const dataProducts = await loadProducts();
    section.innerHTML = '';
    dataProducts.forEach(e => {
        section.innerHTML += `<article id="${e.id}"><p><img src="${e.image}" width="50" height="50"> Title: ${e.title}<br> Price: ${e.price}</p></article>`
    })

    document.querySelectorAll('article').forEach(async e => {
        e.addEventListener('click', async event => {
            event.stopPropagation();
            let id = event.currentTarget.id
            await specificProduct(id)
        })
    })
} 