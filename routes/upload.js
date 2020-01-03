var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const multer  = require('multer');
const upload = multer({ dest: 'e:/tmp' });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 上传图片接口
router.post('/upload', upload.single('uploadImg'), (req, res) => {
    const newFileName = new Date().getTime() + '_' + req.file.originalname;
    const newFilePath = path.resolve(__dirname, '../public/images/', newFileName);
    const fileData = fs.readFileSync(req.file.path);
    fs.writeFileSync(newFilePath, fileData);
    res.send({
        code: 1,
        data: newFileName,
        msg: '添加成功'
    })
});
module.exports = router;
