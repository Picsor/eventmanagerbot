
// const guildConfig = require('../database/models/guild-config.js');
const compositions = require('../../database/models/composition.js');

module.exports = class CompositionService {

    constructor() {

    }

    

    async addComposition(composition) {
        await compositions.create(composition);

        return true;
    }

}

