
// const guildConfig = require('../database/models/guild-config.js');
const compositions = require('../../database/models/composition.js');
const compositionRole = require('../../database/models/composition-role.js');

module.exports = class CompositionService {

    constructor() {

    }

    async addComposition(composition, idBuilder) {
        await compositions.create({
            id: composition.id,
            name: composition.name,
            guildId: composition.guildId,
        });
        
        let roles = composition.roles.map(role => {
            return {
                roleId: role.id,
                compositionId: composition.id
            }
        });

        await compositionRole.bulkCreate(roles);

        return true;
    }

}

