require('dotenv').config();

module.exports = {
  SECRET_KEY : 'secret1122',
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    define : {
      timestamps : true
    }
  }
}
// DB_HOST='127.0.0.1'
// DB_USERNAME='postgres'
// DB_PASSWORD='s3c73t-p4$$w07d'
// DB_NAME='decode_blog'
// PORT= 3005