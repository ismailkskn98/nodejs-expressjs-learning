import express from 'express';
import connection from '../data/db.js';

export const router = express.Router();

router.use('/products/:id', async (req, res) => {
  try {
    const [products] = await connection.execute('select * from products');
    const product = await products.find((p) => p.id == req.params.id);
    if (product) {
      res.render('productDetail', product);
    }
  } catch (error) {
    console.log(error);
  }
});

router.use('/products', async (req, res) => {
  try {
    const [products] = await connection.execute('select * from products');
    res.render('products', {
      products: products,
    });
  } catch (err) {
    console.log(err);
  }
});

router.use('/', async (req, res) => {
  try {
    const [products] = await connection.execute('select * from products');
    res.render('index', {
      products,
    });
  } catch (err) {
    console.log(err);
  }
});
