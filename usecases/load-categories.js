import { productModel } from "../mappers/product-model";


export const loadCategories = async () => {
    const url = 'https://fakestoreapi.com/products/categories';
    const response = await fetch(url)
    const categoryData = await response.json();
    return categoryData;
}