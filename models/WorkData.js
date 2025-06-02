const {Schema, model} = require('mongoose');

const WorkData = new Schema({
    nameCompany: {type: String, required: true},
    workPhone: {type: String, required: true},
    workAddress: {type: String, required: true}
})

module.exports = model('WorkData', WorkData);