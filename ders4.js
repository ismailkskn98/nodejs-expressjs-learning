import express from 'express'; // express'i dahil ediyoruz
const app = express(); // express üzerinden bir uygulama oluşturuyoruz
const port = 3000; // bir port oluşturuyoruz

//? use => middleware
// en özelini en üste getirmeliyiz yani => Yani eşleşen ilk kısma bakar sonrasını önemsemiyor.

app.use('/products/:id', (req, res) => {
  res.send(`<h1>Product Detail ${req.params.id}</h1>`);
});

app.use('/products', (req, res) => {
  res.send('<h1>Products Page</h1>');
});

app.use('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
});

app.listen(port, () => {
  console.log(`Express ile ilk sunucu bu port altında çalışıyor => ${port}`);
});
