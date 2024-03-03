import ejs from 'ejs';
import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public')); // static dosyaları kullanabilmemiz için dışarıya açmamız gerekiyor. Bu durumda public klasörü erişime açılıyor. Altındaki klasör isimleri ile başlayarak sayfalarımıza çağırabiliyoruz. 'images/1.jpg' gibi
app.set('view engine', 'ejs');

const data = [
  { id: 1, name: 'Iphone 12', price: '10000', isActive: true },
  { id: 2, name: 'Iphone 13', price: '15000', isActive: false, imgUrl: '2.jpeg' },
  { id: 3, name: 'Iphone 14', price: '21000', isActive: true, imgUrl: '3.jpeg' },
];

app.use('/products/:id', (req, res) => {
  const product = data.find((item) => item.id == req.params.id);
  if (product) res.render('productDetail', product); // product obje olduğu için direkt gönderebiliriz
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
