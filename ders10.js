import ejs from 'ejs';
import express from 'express';
import mysql from 'mysql2';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('node_modules')); // artık node_modules altındaki herhangi bir klasöre public'deki gibi erişebiliyoruz.

app.set('view engine', 'ejs');

//! Mysql Bağlantısı
let connection = mysql.createConnection({
  // veri tabanı kurulumunda hazırlamış olduğumuz bilgiler aslında
  // açık bir şekilde tabiki bunu böyle yapmıyoruz güvenli bir ortam içerisinden buraya çağırıyoruz.
  host: 'localhost', // projenizi yayınlayacağınız ortamda bize mysql adresi verilir
  user: 'root', // bu da bize verilecektir
  password: 'qrewink123',
  database: 'nodedb',
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Mysql bağlantısı yapıldı.');
});

const data = [
  { id: 1, name: 'Iphone 12', price: '10000', isActive: true, isHome: true, imgUrl: '2.jpeg' },
  { id: 2, name: 'Iphone 13', price: '15000', isActive: false, isHome: false, imgUrl: '2.jpeg' },
  { id: 3, name: 'Iphone 14', price: '21000', isActive: true, isHome: true, imgUrl: '3.jpeg' },
];

app.use('/products/:id', (req, res) => {
  const product = data.find((item) => item.id == req.params.id);
  if (product) res.render('productDetail', product);
});

app.use('/products', (req, res) => {
  res.render('products', {
    products: data,
  });
});

app.use('/', (req, res) => {
  res.render('index', {
    products: data,
  });
});

app.listen(port, () => {
  console.log(`Express ile ilk sunucu bu port altında çalışıyor => ${port}`);
});
