//request response 
import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  editProductById,
  editOneProductById,
  createProduct,
} from "../service/productService";
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await getProductById(productId);
  res.send(product);
});

router.post('/', async (req, res) => {
    const productData = req.body
    const product = await createProduct(productData)
    res.send({
      product,
      message: "add product success!"
    }) 
})

router.delete("/:id", async (req, res) => {
  const productId = req.params.id;
  await deleteProduct(productId);
  res.send("deleted products success");
});

router.put("/:id", async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  if (
    !(
      productData.title &&
      productData.price &&
      productData.description &&
      productData.image
    )
  ) {
    return res.status(400).send("some fields missing!");
  }

  const product = await editProductById(productId, productData);
  res.send({
    product,
    message: "berhasil edit semua product",
  });
});

router.patch("/:id", async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  const product = await editOneProductById(productId, productData);
  res.send({
    product,
    message: "berhasil edit product",
  });
});

module.exports = router;
