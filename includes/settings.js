var fs = require('fs');

//
module.exports = class cSettings {
    constructor() {
        this.m_Language = "English"; // hey Capt'n, oui donte love Spanish !
        this.m_BotVersion = "0.0.0";
        this.m_LogChanId = "800012813887602738";
        this.m_Prefix = "-";
        this.m_EventChanId = "810881326848540682";
        this.m_InitWallet = 100;
    }
}
