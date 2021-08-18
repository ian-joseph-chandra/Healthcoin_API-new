const db = require('../models')
    /*{UserRole} = require('../models/UserRole')*/;

class UserController {
    static async index() {
        return await db.User.findAll({
            include: ['role']
        });
    }
}

UserController.index().then(r => console.log(r))
