var mongoose = require('mongoose'),

Schema = mongoose.Schema,

IqSchema = new Schema({
    var   		: { type : String, required : true},
    value	: { type : String, required : true }
});

module.exports = mongoose.model('Iq', IqSchema, 'iq'); 