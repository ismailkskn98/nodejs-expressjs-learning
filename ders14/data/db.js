import mysql from 'mysql2';
import { config } from './config.js';

//! Mysql Bağlantısı
const connection = mysql.createConnection(config.db);
connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Mysql bağlantısı yapıldı.');
});

export default connection.promise();
