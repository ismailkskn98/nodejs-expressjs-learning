import express from 'express'; // express'i dahil ediyoruz
const app = express(); // express üzerinden bir uygulama oluşturuyoruz
const port = 3000; // bir port oluşturuyoruz

// oluşturduğumuz uygulama üzerinde route'larımızı (rotalarımızı) yazabiliyoruz
app.get('/', (req, res) => {
  res.send('Selam anasayfa');
});

// uygulamamızı bu port altında ayağa kaldırıyoruz
app.listen(port, () => {
  console.log(`Express ile ilk sunucu bu port altında çalışıyor => ${port}`);
});
