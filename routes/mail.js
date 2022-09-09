
const e = require('express');
const {Router} = require('express');
const enviar = require('../controller/mail')

const router = Router();

router.post('/mail', enviar);


module.exports = router;