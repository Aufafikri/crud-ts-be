import express, { Express } from "express";

const app: Express = express();
const dotenv = require("dotenv").config();
const cors = require('cors')

const port = process.env.PORT;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send("testing deployments, go to /products on here")
})

app.use('/products', require('./controller/productController'))

app.listen(port, () => {
  console.log("server jalan");
});
