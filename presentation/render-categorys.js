import { loadProducts } from "../usecases/load-products"

export const renderCategorys = async (element) => {
    const categorys = await loadProducts();
    categorys.forEach(elem => {
        if (elem.category === "electronics") {
            element.innerHTML += `<article><p> <img src="${elem.image}" width="50" height="50"> Title: ${elem.title}<br> Price: ${elem.price}</p></article>`
        }
    });
}