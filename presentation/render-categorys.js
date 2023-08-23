import { loadProducts } from "../usecases/load-products"
import { specificProduct } from "./render-specific-product";

export const renderCategorys = async (cat) => {
    const categorys = await loadProducts();
    const section = document.querySelector('section')
    section.innerHTML = ''
    categorys.forEach(elem => {
        if (elem.category === cat) {
            section.innerHTML += `<article id="${elem.id}"><p> <img src="${elem.image}" width="50" height="50"> Title: ${elem.title}<br> Price: ${elem.price}</p></article>`
        }
        document.querySelector('ul').classList.add('invisible');
    });

    document.querySelectorAll('article').forEach(async e => {
        e.addEventListener('click', async event => {
            event.stopPropagation();
            let id = event.currentTarget.id
            await specificProduct(id)
        })
    })
}