const {Schema, model} = require('mongoose');

const DocumentData = new Schema({
    docSeries: {type: String, required: true},
    docNumber: {type: String, required: true},
    docDateOfIssue: {type: String, required: true}
})

module.exports = model('DocumentData', DocumentData);