import { loadProducts } from "../usecases/load-products";



export const renderProducts = async element => {
    const principalSection = document.createElement('section');
    element.append(principalSection)
    const dataProducts = await loadProducts()
    dataProducts.forEach(index => {
        principalSection.innerHTML += `<article><p> <img src="${index.image}" width="50" height="50"> Title: ${index.title}<br> Price: ${index.price}</p></article>`
    });
} 