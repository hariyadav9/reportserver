var mongoose = require('mongoose'),

Schema = mongoose.Schema,

FirstprojectSchema = new Schema({
    name   		: { type : String, required : true, max : 50 },
    description	: { type : String, required : true }
});

module.exports = mongoose.model('members', FirstprojectSchema);