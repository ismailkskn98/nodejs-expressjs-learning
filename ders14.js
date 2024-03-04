import ejs from 'ejs';
import express from 'express';
import { router as userRoutes } from './ders14/routes/users.js';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('node_modules')); // artık node_modules altındaki herhangi bir klasöre public'deki gibi erişebiliyoruz.
app.set('view engine', 'ejs');

app.use(userRoutes);

app.listen(port, () => {
  console.log(`Express ile ilk sunucu bu port altında çalışıyor => ${port}`);
});
