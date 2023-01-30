const express = require('express');
var controllerMenu = require('../controller/Cmenu');
const router = express();

// router.get('/admin', controllerMenu.admin_main);
router.post('/addMenu', controllerMenu.addMenu);
module.exports = router;
