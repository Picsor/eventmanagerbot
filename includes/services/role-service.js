
// const guildConfig = require('../database/models/guild-config.js');
const roles = require('../../database/models/role.js');

module.exports = class RoleService {

    
    constructor() {
    }
    
    async addRole(role) {
        await roles.create(role);

        return true;
    }

    async getRoleByName(roleName) {
        return await roles.findOne({where: {name: roleName}});
    }

}