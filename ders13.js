import ejs from 'ejs';
import express from 'express';
import connection from './ders13/data/db.js';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('node_modules')); // artık node_modules altındaki herhangi bir klasöre public'deki gibi erişebiliyoruz.

app.set('view engine', 'ejs');

app.use('/products/:id', async (req, res) => {
  try {
    const [products] = await connection.execute('select * from products');
    const product = await products.find((p) => p.id == req.params.id);
    if (product) {
      res.render('productDetail', product);
    }
  } catch (error) {
    console.log(error);
  }
  // connection
  //   .execute('select * from products')
  //   .then((result) => {
  //     const product = result[0].find((p) => p.id == req.params.id);
  //     if (product) {
  //       res.render('productDetail', product);
  //     }
  //   })
  //   .catch((err) => console.log(err));
});

app.use('/products', async (req, res) => {
  try {
    const [products] = await connection.execute('select * from products');
    res.render('products', {
      products: products,
    });
  } catch (err) {
    console.log(err);
  }

  // connection
  //   .execute('select * from products')
  //   .then((result) => {
  //     res.render('products', {
  //       products: result[0],
  //     });
  //   })
  //   .catch((err) => console.log(err));
});

app.use('/', async (req, res) => {
  try {
    const [products] = await connection.execute('select * from products');
    res.render('index', {
      products,
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Express ile ilk sunucu bu port altında çalışıyor => ${port}`);
});
