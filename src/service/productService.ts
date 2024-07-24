//business logic

import { typeProductsData } from "../../data/typeProducts";
import {
  selectAllProducts,
  selectProductById,
  deleteProductById,
  updateProductById,
  updateOneProductById,
  postProducts,
} from "../repository/productRepository";

const getProducts = async () => {
  const products = await selectAllProducts();
  return products;
};

const getProductById = async (id: string) => {
  const product = await selectProductById(id);
  return product;
};

const createProduct = async (productData: typeProductsData) => {
  const product = await postProducts(productData)
  return product
}

const deleteProduct = async (id: string) => {
  await deleteProductById(id);
};

const editProductById = async (id: string, productData: typeProductsData) => {
  const product = await updateProductById(id, productData);
  return product;
};

const editOneProductById = async (
  id: string,
  productData: typeProductsData
) => {
  const product = await updateOneProductById(id, productData);
  return product;
};

export {
  getProducts,
  getProductById,
  deleteProduct,
  editProductById,
  editOneProductById,
  createProduct
};
