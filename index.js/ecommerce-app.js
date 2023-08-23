//import { categoryProducts, renderCategorys } from '../presentation/render-categorys';
import { renderNav } from '../presentation/render-nav';
import { renderProducts } from '../presentation/render-products';
import { filterFunction } from '../usecases/filter';
import { loadProducts } from '../usecases/load-products';





export const comerceApp = async element => {
    renderNav(element)
    renderProducts(element)
    filterFunction(element)
}