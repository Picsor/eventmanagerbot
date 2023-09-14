
//
module.exports = class cIdBank {
    constructor() {
        this.m_Bank = {};
        this.init();
    }

    init() {
        // V14.22 - Channel updates
        this.Add("AUDIT_LOG", "931966332621180998");
        this.Add("APPLICATION_RECEIPTS", "1047569646372520006"); // Debug: 1051945900148277269 // Prod: 1047569646372520006
        this.Add("REQUEST_RECEIPTS", "1049358807106584656");


        //SETUP CHANNELS - MUST BE CHANGED ON SETUP
        this.Add("FeedbackChanId", "824756018058625095"); //chanId (opt: can be let as it is.)
        this.Add("FeedbackPublicChan", "829661579514609675") //chanId
        this.Add("ScheduleChanId", "828973117695066134");
        this.Add("c_ApplicationChanId", "865941443373170708") //ChanId
        this.Add("GuildInviteRequestsChannel", "820987781584257064") //channel id
        this.Add("BOT", "748664143971614792"); // user id
        this.Add("guild_BlackList", []) //Server used for emojis
        this.Add("guild_WhiteList", ["931965549137772554"])
        this.Add("guild", "798200443062583356"); // guild id (OPT)
        this.Add("guild2", "686298544763830294"); // guild id (OPT)
        this.Add("publiccommunity", "931966520035262486"); // role id
        this.Add("Insights", "862053194984456243"); // user id
        this.Add("ServerLogs", "931966332621180998") //chan id

        this.Add("GW2EMOJI", "GW2_logoasset");
        this.Add("RLEMOJI", "rl");
        this.Add("SEREMOJI", "serenity");
        this.Add("TWITCHEMOJI", "twitch");
        this.Add("MODEMOJI", "mod");

        this.Add("twitch_emojiId", "879306119342850078")
        this.Add("discord_emojiId", "879307627664904202")
        this.Add("youtube_emojiId", "879304536542543895")
        this.Add("behance_emojiId", "879304536718737448")
        this.Add("instagram_emojiId", "879304536802603018")
        this.Add("twitter_emojiId", "879304537066852392")

        //ROLES - SELFROLE
        this.Add("gw2role", "878686102762946620")
        this.Add("rlrole", "878686210053267526")

        //Notifications Roles Ids
        this.Add("StreamNotif_RoleId", "863378531321249802")
        this.Add("GiveawaysNotif_RoleId", "863378679378739240")
        this.Add("EventsNotif_RoleId", "863378733229277205")
        this.Add("TournamentsNotif_RoleId", "863378793413869609")
        this.Add("ApplicationsNotif_RoleId", "863378851027877918")
        this.Add("SerenityHostNotif_RoleId", "863378909127114752")

        //Number Emojies
        this.Add("1NumberEmoji", "<:1_NumbersEmoji:862323773126213632>");
        this.Add("2NumberEmoji", "<:2_NumbersEmoji:862323773230415882>");
        this.Add("3NumberEmoji", "<:3_NumbersEmoji:862323773495574528>");
        this.Add("4NumberEmoji", "<:4_NumbersEmoji:862323773373546516>");
        this.Add("5NumberEmoji", "<:5_NumbersEmoji:862323774145036328>");
        this.Add("6NumberEmoji", "<:6_NumbersEmoji:862323773947772938>");


        //Classes
        this.Add("chrono", "<:chrono:770626023569621012>");
        this.Add("tank", "<:tank:770626020171710484>");
        this.Add("fb", "<:fb:770626022693142568>");
        this.Add("renegade", "<:renegade:771029013086732319>");
        this.Add("war", "<:war:770626011585970176>");
        this.Add("heal", "<:heal:770626020797448192>");
        this.Add("dps", "<:dps:770626021971722260>");
        this.Add("sb", "<:sb:770626023745388544>");
        this.Add("weaver", "<:weaver:771029012990394410>");

        this.Add("raid", "<:raid:770626010684456960>");
        this.Add("wvw", "<:wvw:770626007153639446>");
        this.Add("guild", "<:guild:770626008394629120>");
        this.Add("event", "<:event:770626010190053398>");
        this.Add("fractal", "<:fractal:770626007694573568>");
        this.Add("StrikeMission", "<:StrikeMission:770626015617613896>");
        this.Add("hp", "<:hp:770626008025530419>");
        this.Add("rp", "<:rp:770626013029335040>");
        this.Add("pvp", "<:pvp:770626010700841002>");
        this.Add("boss", "<:boss:770626015780143125>");
        this.Add("Story", "<:Story:770626013725327384>");
        this.Add("wb", "<:wb:770909581181583400>");
        this.Add("dungeon", "<:dungeon:770626010587856916>");
        this.Add("greywaypoint", "<:greywaypoint:770626013062234122>");
        this.Add("prime", "<:prime:770626010739769384>");
        this.Add("stream", "<:stream:770626020255465472>");
        this.Add("explo", "<:explo:770626019333373963>");
        this.Add("minerals", "<:minerals:770626007434395669>");
        this.Add("sp", "<:sp:770626007182213151>");

        this.Add("bookmark", "<:bookmark:770626012849111051>");
        this.Add("checkmarks", "<:checkmarks:770626007313023028>");

        //Star Rating Emojis
        this.Add("1star", "<:1starv4:824930485300887552>")
        this.Add("2stars", "<:2starv4:824930485300887552>")
        this.Add("3stars", "<:3starv4:824930485300887552>")
        this.Add("4stars", "<:4starv4:824930485300887552>")
        this.Add("5stars", "<:5starv4:824930485300887552>")

        //Authentification
        this.Add("AuthRole", "800113624957452360") //Role id
        this.Add("AcceptAuthEmojiName", "insights_accept") //Emoji Name 
        this.Add("AcceptAuthEmojiID", "819162831933014046") //Emoji Id

        // cancel event
        this.Add("emojiEventCancel", "800491897708740680"); // emoji id
        this.Add("Archange", "380101538384707587"); // user id

        // join event
        this.Add("emojiEventJoin", "800817599201411123"); // emoji id
        this.Add("CMDRRoleId", "830446751210536990"); //RoleId
        this.Add("LieutRoleId", "830446751210536990")

        this.Add("Necro", "<:Necro:771028916281278464>");
        this.Add("Ranger", "<:Ranger:771028916160167936>");
        this.Add("War", "<:War:771028916131201035>");
        this.Add("Elementalist", "<:Elementalist:771028909567377439>");
        this.Add("Thief", "<:Thief:771028916109574216>");
        this.Add("Rev", "<:Rev:771028914591498281>");
        this.Add("Mesmer", "<:Mesmer:771028914390171688>");
        this.Add("Ingenieur", "<:Ingenieur:771028910686863411>");
        this.Add("Guard", "<:Guard:771028910242529311>");
        this.Add("bot_cross_name", "bot_cross");
        this.Add("bot_cross", "<:bot_cross:770626007593123870>");
        this.Add("bot_crossId", "770626007593123870")
        this.Add("Scourge", "<:Scourge:771029015057137705>");
        this.Add("Reaper", "<:Reaper:771028961387479050>");
        this.Add("Catacliste", "<:Catacliste:771028955964506142>");
        this.Add("Mirage", "<:Mirage:771029013267218443>");
        this.Add("Chronomancer", "<:Chronomancer:771028957147562045>");
        this.Add("Druid", "<:Druid:771028961181302794>");
        this.Add("Sniper", "<:Sniper:771029014495887390>");
        this.Add("Fracasseur", "<:Fracasseur:771028961169244180>");
        this.Add("Meca", "<:Meca:771028961421295616>");
        this.Add("Holosmith", "<:Holosmith:771029010356240386>");
        this.Add("Spellbreaker", "<:Brisesort:771029007238955058>");
        this.Add("Berzerker", "<:Berzerker:771028952705794128>");
        this.Add("Heraut", "<:Heraut:771028961202274314>");
        this.Add("Firebrand", "<:Firebrand:771029008019750912>");
        this.Add("DH", "<:DH:771028960569851946>");

        this.Add("Reserve", "<:iconreserve:829417840096051220>");

        this.Add("StarEmoji1", "<:1starv4:824930485300887552>")
        this.Add("Multiclass", "<:iconmulticlassv3:829380306942427136>") //EMOJI ID

        this.Add("SUPPORT", "771818498506752020");
        this.Add("Picsor", "108325248365010944"); // user id
        this.Add("loadingGW2", "<a:loadingGW2:799263034806763561>");

        this.Add("SupervisedUserRoleId", "828202630522208276") //ROLE ID


        //StaffApp
        this.Add("StaffApplicationEmojiName", "mod_icon")
        this.Add("StaffApplicationEmojiID", "865931065280692224")

        //Applications
        this.Add("ApplicationEmojiName", "iconemote_bleue") //Emoji Name
        this.Add("ApplicationEmojiID", "819262548616413194") //Emoji ID

        this.Add("ApproveEmojiId", "865942308818255873")
        this.Add("DenyEmojiIdd", "865942320410132511")
        this.Add("MemberRoleId", "800113719405051964") //RoleId
        this.Add("OnAppDescActiveRoleId", "819598337979187231") //ROLE ID
        this.Add("clipboard_default", "📋") //EMoji
        this.Add("ModRoleId", "857641206019784735")



        //Events
        this.Add("Event_Category", "830457364380516436"); //Category ID
        this.Add("Event_Brewing_Category", "830457455384199248"); //Category ID

        /*
        this.Add("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxx");
        this.Add("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxx");
        this.Add("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxx");
        this.Add("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxx");
        this.Add("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxx");
        this.Add("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxx");
        this.Add("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxx");
        this.Add("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxx");
        this.Add("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxx");
        this.Add("xxxxxxxxxx", "xxxxxxxxxxxxxxxxxxxxxxxxx");
*/
    }

    Add(id, discord_id) {
        this.m_Bank[id.toLowerCase()] = discord_id;
    }


    GetId(_id) {
        let id = _id.toLowerCase();
        if (id in this.m_Bank)
            return this.m_Bank[id];

        return `Discord ID "${_id}" is missing`;
    }
}
