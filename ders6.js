import ejs from 'ejs';
import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const data = [
  { id: 1, name: 'Iphone 12', price: '10000', isActive: true },
  { id: 2, name: 'Iphone 13', price: '15000', isActive: false },
  { id: 3, name: 'Iphone 14', price: '21000', isActive: true },
];

app.use('/products/:id', (req, res) => {
  res.render('productDetail');
});

app.use('/products', (req, res) => {
  // data'yı bu şekilde ikinci bir parametre olarak gönderebiliriz.
  // artık products.ejs data'ya ulaşabilir.
  res.render('products', {
    // obje olarak göndermemiz gerekiyor
    products: data,
  });
});

app.use('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Express ile ilk sunucu bu port altında çalışıyor => ${port}`);
});
