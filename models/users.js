const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users_schema = new Schema({
    // id: String,
    user_id: String,
    name: String,
    username: String,
    password: String,
    type: String,
});

const Users = mongoose.model('Users', users_schema);

module.exports = Users;