import ejs from 'ejs';
import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // projenin kullandığı template engine => özel olarak views klasörünün altında olmalı sayfalarımız (sayfa uzantılarımız .ejs olmalı).
// fakat views altından başlar aramaya yani views aldında users/ diye bir klasör altında sayfalarımız var ise res.render('users/userDetail'); şeklinde belirtmemiz gerek.

app.use('/products/:id', (req, res) => {
  // ProductDetail sayfasını kendi buluyor direkt
  res.render('productDetail');
});

app.use('/products', (req, res) => {
  // products sayfasını kendi buluyor direkt
  res.render('products');
});

app.use('/', (req, res) => {
  /// index sayfasını kendi buluyor direkt
  res.render('index');
});

app.listen(port, () => {
  console.log(`Express ile ilk sunucu bu port altında çalışıyor => ${port}`);
});
