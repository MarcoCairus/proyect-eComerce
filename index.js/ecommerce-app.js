//import { categoryProducts, renderCategorys } from '../presentation/render-categorys';
import { renderNav } from '../presentation/render-nav';
import { renderProducts } from '../presentation/render-products';



export const comerceApp = async element => {
    renderNav(element)
    await renderProducts(element)
}