//const { EmbedBuilder } = require('discord.js');

module.exports = class embedManager {
    constructor(client) {
        this.init();
        
        this.m_Client = client;
        this.m_Embeds = {};
    }
    
    init() {
        // const embStartEventAsk = new EmbedBuilder()
        //     .setTitle(process.env.event_embed_titles_start)
        //     .setDescription('These are the current saved settings for your event:')
        //     .addFields(
        //     // (            
        //     //     { name: '\u200B', value: "`1` <:raid:770626010684456960> Raid\n`2` <:wvw:770626007153639446> WvW Raid\n`3` <:guild:770626008394629120> Guild Mission\n`4` <:event:770626010190053398> Event\n`5` <:fractal:770626007694573568> Fractal", inline: true},
        //     //     { name: '\u200B', value: "\u200B", inline: true},
        //     //     { name: '\u200B', value: "`6` <:StrikeMission:770626015617613896> Strike Mission\n`7` <:hp:770626008025530419> Hero-point Run\n`8` <:rp:770626013029335040> Role-Play\n`9` <:pvp:770626010700841002> PvP\n`10` <:boss:770626015780143125> Meta-Event", inline: true},
        //     //     { name: '\u200B', value: "`11` <:Story:770626013725327384> Story - Chronicles\n`12` <:wb:770909581181583400> World Bosses\n`13` <:dungeon:770626010587856916> Dungeon\n`14` <:greywaypoint:770626013062234122> Festivals\n`15` <:prime:770626010739769384> Primes\n", inline: true},
        //     //     { name: '\u200B', value: "\u200B", inline: true},
        //     //     { name: '\u200B', value: "`16` <:stream:770626020255465472> Streaming\n`17` <:explo:770626019333373963> World Exploration\n`18` <:minerals:770626007434395669> Gathering\n`19` <:sp:770626007182213151> Achievements", inline: true},
        //     //     { name: '\u200B', value: client.GetId("loadingGW2")+client.GetText("msgEventTypeQst_TOP")},
        //     )
        //     .setColor(this.client.GetColor("success"));

        //this.Add("startEventAsk", []);
    }

    Add(name, embed) {
        this.embeds[name] = embed;
    }

    GetEmbed(name) {
        if (name in this.embeds)
            return this.embeds[name];
        
        return `Embed "${name}" is missing`;
    }
}