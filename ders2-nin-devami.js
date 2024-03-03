import express from 'express'; // express'i dahil ediyoruz
const app = express(); // express üzerinden bir uygulama oluşturuyoruz
const port = 3000; // bir port oluşturuyoruz

//? use => middleware
// Yerini değiştirmemiz gerekiyor yani '/products' ise products gelsin '/products' değilse daha sonra '/' baksın. İkiside '/' ile başladığı için ilk karşılaşılan kriter hemen geri gönderiliyor. Yani eşleşen ilk kısma bakar sonrasını önemsemiyor.

app.use('/products', (req, res) => {
  res.send('<h1>Products Page</h1>');
});

app.use('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
});

app.listen(port, () => {
  console.log(`Express ile ilk sunucu bu port altında çalışıyor => ${port}`);
});
