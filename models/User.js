const {Schema, model} = require('mongoose');

const User = new Schema({
    fullName: {type: String, required: true},
    birthdate: {type: String, required: true},
    phone: {type: String, required: true, unique: true},
    documentData: {type: String, ref: 'DocumentData'},
    workData: {type: String, ref: 'WorkData'},
    authorizationKey: {type: String, required: true}

})

module.exports = model('User', User);