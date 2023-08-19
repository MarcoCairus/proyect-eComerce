import { Products } from "../models/products";

export const productModel = (product) => {

    const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    } = product;

    return new Products ({
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
    });

}