// const express = require('express');
// const router = express.Router();

const Users = require('../models/users');

module.exports = function(app) {
    app.get('/users', async (req, res) => {
        try {
            const user = await Users.find();
            res.json(user);
        } catch(error) {
            console.log(error)
        }
    })
};