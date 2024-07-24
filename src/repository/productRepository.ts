//handle database
import { prisma } from "../database/database";
import { typeProductsData } from "../../data/typeProducts";
import { connect } from "http2";

const selectAllProducts = async () => {
  const products = await prisma.products.findMany();
  return products;
};

const selectProductById = async (id: string) => {
  const product = await prisma.products.findUnique({
    where: {
      id: id,
    },
  });
  return product;
};

const postProducts = async (productData: typeProductsData) => {
  const product = await prisma.products.create({
    data: {
      title: productData.title,
      price: productData.price,
      description: productData.description,
      image: productData.image,
    }
  })
  return product
}

const deleteProductById = async (id: string) => {
  await prisma.products.delete({
    where: {
      id: id,
    },
  });
};

const updateProductById = async (id: string, productData: typeProductsData) => {
  const product = await prisma.products.update({
    where: {
      id: id,
    },
    data: {
      title: productData.title,
      price: productData.price,
      description: productData.description,
      image: productData.image,
    },
  });
  return product;
};

const updateOneProductById = async (
  id: string,
  productData: typeProductsData
) => {
  const product = await prisma.products.update({
    where: {
      id: id,
    },
    data: {
      title: productData.title,
      price: productData.price,
      description: productData.description,
      image: productData.image,
    },
  });
  return product;
};

export {
  selectAllProducts,
  selectProductById,
  deleteProductById,
  updateProductById,
  updateOneProductById,
  postProducts
};
