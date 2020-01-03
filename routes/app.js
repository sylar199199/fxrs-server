var express = require('express');
var router = express.Router();
const OneMune = require('../models/appModel');
const TwoMune = require('../models/appTwoModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/saveForm', (req, res) => {
    let appModel = new TwoMune({
        head: req.body.head,
        logo: req.body.logo,
        context: req.body.context,
        num: req.body.num,
    })
    appModel.save().then(() => {
        res.send({
            code: 1,
            msg: '添加成功'
        })
    }).catch(error => {
        console.log(error);
        res.send({
            code: -1,
            msg: '添加失败！'
        })
    })
})
router.get('/getOneMune', (req, res)=>{
    OneMune.find({}).then(data=>{
      res.send({
          code: 1,
          list: data,
      })
    }).catch(error => {
        res.send({
            code: -1,
            msg: '获取失败'
        });
    })
})
// 获取列表
router.post('/getTwoMune', (req, res)=>{
    let num = req.body.num;
    TwoMune.find({'num': num}).sort({_id: -1}).then(data=>{
        res.send({
            code: 1,
            list: data,
        })
    }).catch(error => {
        res.send({
            code: -1,
            msg: '获取失败'
        });
    })
})
// 根据id获取详情
router.post('/getDetailsByid', (req, res)=>{
    let id = req.body.id;
    TwoMune.find({_id: id}).then(data=>{
        res.send({
            code: 1,
            list: data[0],
        })
    }).catch(error => {
        res.send({
            code: -1,
            msg: '获取失败'
        });
    })
})
// 删除二级菜单
router.post('/deleteByid', (req, res) => {
    let id = req.body.id;
    TwoMune.deleteOne({
        _id: id,
    }).then(data => {
        if (data.deletedCount === 1) {
            res.send({
                code: 1,
                msg: '删除成功'
            });
        } else {
            res.send({
                code: -1,
                msg: '不存在此用户'
            });
        }
    }).catch(error => {
        console.log('删除失败');
        res.send({
            code: -1,
            msg: '删除失败'
        });
    })
});
// 编辑二级菜单
router.post('/updataForm', (req, res) => {
    let id = req.body.id;
    TwoMune.updateOne({
        _id: id,
    },{
        head: req.body.head,
        logo: req.body.logo,
        context: req.body.context,
        num: req.body.num,
    }).then(data => {
        if (data.nModified === 1) {
            res.send({
                code: 1,
                msg: '修改成功'
            });
        } else {
            res.send({
                code: -1,
                msg: '修改失败'
            });
        }
    }).catch(error => {
        console.log(error);
        res.send({
            code: -1,
            msg: '修改失败!'
        });
    })
});

module.exports = router;
