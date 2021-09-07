const Users = require('../models/users');

module.exports = function(app) {
    app.get('/users', async ( req, res ) => {
        try {
            const users = await Users.find();
            res.json(users);
        } catch(error) {
            console.log(error)
        }
    });

    
};