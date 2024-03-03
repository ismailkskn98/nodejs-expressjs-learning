import express from 'express'; // express'i dahil ediyoruz
const app = express(); // express üzerinden bir uygulama oluşturuyoruz
const port = 3000; // bir port oluşturuyoruz

//? use => middleware oluşturalım

// bu şekilde çalıştırdığımızda yukarıdan aşağıya doğru bir sorgulama yapılır. /products'ı da çalırsak en başta '/' gördüğünden dolayı anaDizinin içeriği çalıştırılıyor. Yani eşleşen ilk kısma bakar sonrasını önemsemiyor.

app.use('/', (req, res) => {
  // url'den  ' / ' isteği geldiğinde bu fonksiyon çalışacak
  res.send('<h1>Home Page</h1>');
});

app.use('/products', (req, res) => {
  res.send('<h1>Products Page</h1>');
});

app.listen(port, () => {
  console.log(`Express ile ilk sunucu bu port altında çalışıyor => ${port}`);
});
