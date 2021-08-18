// const {UserRole} = require('../models/UserRole');
const db = require('../models');

class UserRoleController {
    static async index() {
        return await db.UserRole.findAll({include: ['users']});
    }
}

//
// db.sequelize.sync().then(() => {
//     UserRoleController.index().then(r => console.log(r))
// })
//

UserRoleController.index().then(r => console.log(r));
