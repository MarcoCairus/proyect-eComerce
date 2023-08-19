import { } from "../style.css";
import { renderCategorys } from "./render-categorys";
export const renderNav = (element) => {
    const title = document.createElement('h1')
    title.innerText = 'e-Commerce'
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const categoryButton = document.createElement('button');
    const filterButton = document.createElement('button');
    categoryButton.id = 'categoryButton'
    filterButton.id = 'filterButton'
    categoryButton.innerText = 'Categorys'
    filterButton.innerText = 'Filter'
    nav.append(categoryButton, filterButton);
    const ul = document.createElement('ul');


    ul.innerHTML = `
    <li><a id = "a1"  class = "invisible " href = "render-categorys.js">Mens Clothing</a></li> 
    <li><a id = "a2"  class = "invisible " href = "*">Jewelery</a></li>
    <li><a id = "a3"  class = "invisible " href = "*">Electronics</a></li>
    <li><a id = "a4"  class = "invisible " href = "*">Women Clothing</a></li>
    `
    
        nav.appendChild(ul)
        header.appendChild(title);
        header.appendChild(nav);
        element.append(header);
    let count = 1;

    categoryButton.addEventListener('click', () => {
        if (count % 2 === 1) {
            for (let i = 0; i < 4; i++) {
    
                document.querySelector('.invisible').classList.remove('invisible')
            }
            count++
    
        }
        else {
            for (let i = 0; i < 4; i++) {
                document.querySelector('#a1').classList.add('invisible');
                document.querySelector('#a2').classList.add('invisible');
                document.querySelector('#a3').classList.add('invisible');
                document.querySelector('#a4').classList.add('invisible');
            }
            count++
        }
    })

    categoryButton.addEventListener('click', () => {
        renderCategorys(element)
    })

}






