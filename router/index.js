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

    app.get('/users/:id', async ( req, res ) => {
        try {
            const userId = req.params.id;
            const users = await Users.find()
            const user = users.find( user => user.user_id === userId );
            if(user) {
                res.json(user);
            } else {
                res.json({
                    status: 404,
                    message: `User with ID ${userId} not found`
                });
            }
        } catch (error) {
            console.log(error)
        }
    })
};