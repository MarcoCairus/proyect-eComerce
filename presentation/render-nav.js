import { comerceApp } from "../index.js/ecommerce-app";
import { } from "../style.css";
import { loadCategories } from "../usecases/load-categories";
import { renderCategorys } from "./render-categorys";
import { renderProducts } from "./render-products";
export const renderNav = async (element) => {
    const title = document.createElement('h1')
    title.innerText = 'e-Commerce'
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const filterButton = document.createElement('button');
    const categoryButton = document.createElement('button');
    home.id = 'home'
    categoryButton.id = 'categoryButton'
    filterButton.id = 'filterButton'
    home.innerText = 'Home'
    categoryButton.innerText = 'Categories'
    filterButton.innerText = 'Filter'
    nav.append(home, categoryButton, filterButton);
    const ul = document.createElement('ul');
    ul.classList.add('invisible')
    nav.appendChild(ul)
    header.appendChild(title);
    header.appendChild(nav);
    element.append(header);
    const principalSection = document.createElement('section');
    element.append(principalSection)
    const arrayCategories = await loadCategories();

    arrayCategories.forEach(e => {

        ul.innerHTML += `<li><a id = "a1"  class = "${e}" href = "#">${e}</a></li> `
    })





    home.addEventListener('click', () => {
        renderProducts();
    })

    let count = 1;

    categoryButton.addEventListener('click', () => {
        if (count % 2 === 1) {
            ul.classList.remove('invisible')
            count++;
        }
        else {
            ul.classList.add('invisible');
            count++;
        }
    })

    document.querySelectorAll('li > a').forEach(elem => {
        elem.addEventListener('click', () => {
            let category = elem.classList.value;
            renderCategorys(category);
        })
    })



}






