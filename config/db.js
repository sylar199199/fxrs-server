const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/fxrs';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('连接数据库成功');
  })
  .catch((error) => {
    console.log('连接数据库失败');
    console.log(error);
  });

module.exports = mongoose;
