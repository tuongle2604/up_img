var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
  }
})

var upload = multer({ storage: storage })

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('image'),function(req, res, next) {
  if (req.file) {
    res.json({
      status: true,
      data: req.protocol + '://' + req.get('host') + '/images/' + req.file.filename
    })
  }

  else {
    res.json({
      status: false,
      data: "some thing happend"
     })
  }

});

module.exports = router;
