const User = require('./models/User');
const DocumentData = require('./models/DocumentData');
const WorkData = require('./models/WorkData');
const keyGenerator = require('./utils/keyGenerator')
const {validationResult} = require('express-validator')

class authController {
    async registration (req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }

            const {fullName, birthdate, phone, docSeries, docNumber, docDateOfIssue, nameCompany, workPhone, workAddress} = req.body;
            const candidate = await User.findOne({phone});

            if (candidate) {
                return res.status(400).json({message: 'Пользователь с таким номером телефона уже существует'})
            }

            const authKey = keyGenerator();

            const document = new DocumentData({
                docSeries: docSeries,
                docNumber: docNumber,
                docDateOfIssue: docDateOfIssue
            })

            const work = new WorkData({
                nameCompany: nameCompany,
                workPhone: workPhone,
                workAddress: workAddress
            })

            await document.save();
            await work.save();

            const user = new User({
                fullName, 
                birthdate, 
                phone, 
                documentData: document,
                workData: work,
                authorizationKey: authKey
            })

            await user.save();

            return res.status(200).json({
                message: 'Пользователь успешно зарегистрирован',
                authorizationAuthKey: authKey
            })

        }
        catch (e) {
            console.log(e);
            res.status(400).json({error: error.message})
        }
    }

    async login (req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при входе", errors})
            }

            const {phone} = req.body;
            const user = await User.findOne({phone});

            if (!user) {
                res.status(403).json({message: 'Пользователь с таким номером телефона не зарегистрирован'})
            }

            const {authorizationKey} = user;

            return res.status(200).json({
                message: 'Авторизация прошла успешно',
                authorizationAuthKey: authorizationKey
            })
        }
        catch (e) {
            console.log(e);
            res.status(403).json({message: 'Пользователь не найден'})
        }
    }
}

module.exports = new authController();