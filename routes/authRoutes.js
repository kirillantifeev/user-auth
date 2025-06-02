const Router = require('express');
const router = new Router();
const controller = require('../authController')
const {check} = require('express-validator');

router.post('/register', [
    check('fullName', 'Имя не может быть пустым').notEmpty(),
    check('birthdate', 'Дата рождения не может быть пустой').notEmpty(),
    check('phone', 'Телефон не может быть пустым').notEmpty(),
    check('docSeries', 'Данные документы не могут быть пусты').notEmpty(),
    check('docNumber', 'Данные документы не могут быть пусты').notEmpty(),
    check('docDateOfIssue', 'Данные документы не могут быть пусты').notEmpty(),
    check('nameCompany', 'Данные о компании не могут быть пусты').notEmpty(),
    check('workPhone', 'Данные о компании не могут быть пусты').notEmpty(),
    check('workAddress', 'Данные о компании не могут быть пусты').notEmpty(),
], controller.registration);
router.post('/login', [
    check('phone', 'Телефон не может быть пустым').notEmpty(),
], 
    controller.login);

module.exports = router;