import { loadProducts } from "../usecases/load-products"

export const renderCategorys = async (cat) => {
    const categorys = await loadProducts();
    const section = document.querySelector('section')
    section.innerHTML = ''
    categorys.forEach(elem => {
        if (elem.category === cat) {
            section.innerHTML += `<article><p> <img src="${elem.image}" width="50" height="50"> Title: ${elem.title}<br> Price: ${elem.price}</p></article>`
        }
    });
}