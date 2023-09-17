module.exports = class cTextBank {
    constructor(lang, prefix) {
        this.m_Languages = {
            "fr": 0,
            "en": 1,
            "es": 2
        }; // hey Capt'n, oui donte love Spanish !

        this.m_Bank = {};
        this.SetPrefix(prefix);
        this.SetLanguage(lang);
        this.init();
    }

    SetLanguage(lang)
    {
        this.m_CurrLanguage = this.m_Languages[lang];
    }

    SetPrefix(prefix) {
        this.m_Prefix = prefix;
    }

    init() {
        this.Add("chrono", ["Chrono", "Chrono", "errLANG"]);
        this.Add("tank", ["Tank", "Tank", "errLANG"]);
        this.Add("fb", ["FB", "FB", "errLANG"]);
        this.Add("Renegade", ["Renégat", "Renegade", "errLANG"]);
        this.Add("heal", ["Soigneur", "heal", "errLANG"]);
        this.Add("dps", ["DPS", "DPS", "errLANG"]);
        this.Add("sb", ["Animorphe", "Soulbeast", "errLANG"]);
        this.Add("weaver", ["Tisse-sort", "Weaver", "errLANG"]);
        this.Add("Feedback", ["Feedback", "Feedback", "errLANG"]);

        this.Add("r_dps", ["DPS (Réserve)", "DPS (Reserve)", "errLANG"]);
        this.Add("r_Feedback", ["Feedback (Réserve)", "Feedback (Reserve)", "errLANG"]);
        this.Add("r_tank", ["Tank (Réserve)", "Tank (Reserve)", "errLANG"]);
        this.Add("r_chrono-tank", ["Chrono-Tank (Réserve)", "Chrono-Tank (Reserve)", "errLANG"]);
        this.Add("r_hfb", ["Heal-Firebrand (Réserve)", "Heal-Firebrand (Reserve)", "errLANG"]);
        this.Add("r_Quickness", ["Célérité (Réserve)", "Quickness (Reserve)", "errLANG"]);
        this.Add("r_ChronoBoon", ["Chrono-Boon (Réserve)", "Chrono-Boon (Reserve)", "errLANG"]);
        this.Add("r_Kitter", ["Kitter (Réserve)", "Kitter (Reserve)", "errLANG"]);
        this.Add("r_HK", ["Hand-Kitter (Réserve)", "Hand-Kitter (Reserve)", "errLANG"]);
        this.Add("r_Pylons", ["Pylon (Réserve)", "Pylon (Reserve)", "errLANG"]);
        this.Add("r_BS", ["Bannerslave (Réserve)", "Bannerslave (Reserve)", "errLANG"]);
        this.Add("r_CDPS", ["CDPS (Réserve)", "CDPS (Reserve)", "errLANG"]);
        this.Add("r_PDPS", ["PDPS (Réserve)", "PDPS (Reserve)", "errLANG"]);
        this.Add("r_Epi", ["Epidemie (Réserve)", "Epidemic (Reserve)", "errLANG"]);
        this.Add("r_Lamp", ["Lampe (Réserve)", "Lamp (Reserve)", "errLANG"]);
        this.Add("r_BT", ["Boon-Thief (Réserve)", "Boon-Thief (Reserve)", "errLANG"]);
        this.Add("r_Alac", ["Alacrité (Réserve)", "Alacrity (Reserve)", "errLANG"]);
        this.Add("r_HealAlac", ["Heal-Alac (Réserve)", "Heal-Alac (Reserve)", "errLANG"]);
        this.Add("r_Druid", ["Druide (Réserve)", "Druid (Reserve)", "errLANG"]);
        this.Add("r_RR", ["Righteous Rebel (CondiRen)", "Righteous Rebel(CondiRen)", "errLANG"]);
        this.Add("r_SPB", ["Brisesort (Dôme) (Réserve)", "SpellBreaker (Dome) (Reserve)", "errLANG"]);

        this.Add("raid", ["errLANG", "errLANG", "errLANG"]);
        this.Add("wvw", ["errLANG", "errLANG", "errLANG"]);
        this.Add("guild", ["errLANG", "errLANG", "errLANG"]);
        this.Add("event", ["errLANG", "errLANG", "errLANG"]);
        this.Add("fractal", ["errLANG", "errLANG", "errLANG"]);
        this.Add("StrikeMission", ["errLANG", "errLANG", "errLANG"]);
        this.Add("hp", ["errLANG", "errLANG", "errLANG"]);
        this.Add("rp", ["errLANG", "errLANG", "errLANG"]);
        this.Add("pvp", ["errLANG", "errLANG", "errLANG"]);
        this.Add("boss", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Story", ["errLANG", "errLANG", "errLANG"]);
        this.Add("wb", ["errLANG", "errLANG", "errLANG"]);
        this.Add("dungeon", ["errLANG", "errLANG", "errLANG"]);
        this.Add("greywaypoint", ["errLANG", "errLANG", "errLANG"]);
        this.Add("bounty", ["errLANG", "errLANG", "errLANG"]);
        this.Add("stream", ["errLANG", "errLANG", "errLANG"]);
        this.Add("explo", ["errLANG", "errLANG", "errLANG"]);
        this.Add("minerals", ["errLANG", "errLANG", "errLANG"]);
        this.Add("ap", ["errLANG", "errLANG", "errLANG"]);

        this.Add("bookmark", ["errLANG", "errLANG", "errLANG"]);
        this.Add("checkmarks", ["errLANG", "errLANG", "errLANG"]);

        this.Add("necro", ["Necromancer", "Necromancer", "Necromancer"]);
        this.Add("ranger", ["errLANG", "errLANG", "errLANG"]);
        this.Add("war", ["errLANG", "errLANG", "errLANG"]);
        this.Add("elementalist", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Thief", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Rev", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Mesmer", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Ingenieur", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Guard", ["errLANG", "errLANG", "errLANG"]);
        this.Add("bot_cross", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Scourge", ["Scourge", "Scourge", "Scourge"]);
        this.Add("Reaper", ["Reaper", "Reaper", "Reaper"]);
        this.Add("Catacliste", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Mirage", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Chronomancer", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Druid", ["Druide", "Druid", "errLANG"]);
        this.Add("Sniper", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Fracasseur", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Meca", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Holosmith", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Spellbreaker", ["Brisesort", "Spellbreaker", "el Spellbreakor"]);
        this.Add("Berzerker", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Heraut", ["errLANG", "errLANG", "errLANG"]);
        this.Add("Firebrand", ["errLANG", "errLANG", "errLANG"]);
        this.Add("DH", ["errLANG", "errLANG", "errLANG"]);

        this.Add("chrono-tank", ["Chrono-Tank", "Chrono-Tank", "errLANG"]);
        this.Add("hfb", ["Heal-Firebrand", "Heal-Firebrand", "errLANG"]);
        this.Add("Quickness", ["Célérité", "Quickness", "errLANG"]);
        this.Add("ChronoBoon", ["Chrono-Boon", "Chrono-Boon", "errLANG"]);
        this.Add("Kitter", ["Kitter", "Kitter", "errLANG"]);
        this.Add("HK", ["Hand-Kitter", "Hand-Kitter", "errLANG"]);
        this.Add("Pylons", ["Pylon", "Pylon", "errLANG"]);
        this.Add("BS", ["Bannerslave", "Bannerslave", "errLANG"]);
        this.Add("CDPS", ["CDPS", "CDPS", "errLANG"]);
        this.Add("PDPS", ["PDPS", "PDPS", "errLANG"]);
        this.Add("Epi", ["Epidemie", "Epidemic", "errLANG"]);
        this.Add("Lamp", ["Lampe", "Lamp", "errLANG"]);
        this.Add("BT", ["Boon-Thief", "Boon-Thief", "errLANG"]);
        this.Add("Alac", ["Alacrité", "Alacrity", "errLANG"]);
        this.Add("RR", ["Righteous Rebel (CondiRen)", "Righteous Rebel(CondiRen)", "errLANG"]);
        this.Add("SPB", ["Brisesort (Dôme)", "SpellBreaker (Dome)", "errLANG"]);
        this.Add("HealAlac", ["Heal-Alac", "Heal-Alac", "errLANG"]);
        this.Add("r_Multiclass", ["Multi-Rôle (Réserve)", "Multi-Role (Reserve)", "errLANG"]);

        this.Add("SUPPORT", ["errLANG", "errLANG", "errLANG"]);

        this.Add("loadingGW2", ["errLANG", "errLANG", "errLANG"]);
        this.Add("messageSpecChoose", ["Select your specialization by entering the corresponding number.",
            "Select your specialization by entering the corresponding number.",
            "Select your specialization by entering the corresponding number."]);

        this.Add("e_Title_General_Missing_Permission", ["Permissions Manquantes", "Missing Permissions", "errLANG"]);
        this.Add("e_Desc_General_Missing_Permission", ["Vous n'avez pas les permissions requises pour éxécuter cette commande.", "You don't have the required permission to perform this command.", "errLANG"]);


		//Event Inscription-
        this.Add("msgJoinEventTitle", ["Inscription- Evénements", "Inscription- Evénements", "Inscription- Evénements"]);
        this.Add("msgJoinEventAllreadyIn", ["Vous êtes déjà inscrit à cet événement.", "Vous êtes déjà inscrit à cet événement.", "Vous êtes déjà inscrit à cet événement."]);
        this.Add("msgJoinEventNotIn", ["Vous n'êtes pas inscrit à cet événement.", "Vous n'êtes pas inscrit à cet événement.", "Vous n'êtes pas inscrit à cet événement."]);
        this.Add("msgJoinMemberNotFound", ["Seul les membres approuvés sur le discord peuvent rejoindre nos événements. Rejoignez nous en faisant votre demande via le salon <#818417446200410122>.","Only members can join our events. Join us now by starting your application in <#818417446200410122>.", "errLANG"])
		this.Add("msgJoinMaxMemberReached", ["Le nombre maximum de personnes inscrites a été atteint.", "Max member amount reached.", "errLANG"])
        this.Add("msgev_MaxMemberReachedERR", ["Il n'y a plus de place pour ce rôle, veuillez en choisir un autre ou annuler votre demande en tapant `cancel`.", "There is no more room for this role, please chose another one or cancel your request by typing `cancel`", "errLANG"])
        this.Add("msgev_CancelDM", ["Inscription annulée avec succès !","Subscription successfully canceled.","errLANG"])
        this.Add("e_SubTitle", ["Inscription","Subscription","errLANG"])
        this.Add("msgev_WrongEntryERR", ["**Veuillez entrer un nombre valide.**","**Please provide a valid number.**","errLANG"])
        this.Add("e_Desc_EventSubscription", ["<a:loadingGW2:799263034806763561> Choisissez le rôle que vous souhaitez jouer lors de cet événement en entrant le chiffre correspondant. *(Vous pouvez entrer `cancel` à tout instant pour annuler l'inscription)*","<a:loadingGW2:799263034806763561> Select the class that you want to play on this event by entering the corresponding number. *(You can type `cancel` at any type to cancel the subscription)*","errLANG"])
        this.Add("", ["","","errLANG"])
        this.Add("", ["","","errLANG"])
        this.Add("", ["","","errLANG"])
        
        //Setup
        this.Add("setupEventCreateCategory", ["Séléctionnez la catégorie de création d'évènement, ce sera utilisé pour l'affichage des évènements en attente de publication.","Select the event creation category. It will be used to display event that are awaiting to be published.", "Selecciona la categoria de creación de eventos. Se usará para mostrar los eventos que están esperando ser publicados."]);
        this.Add("setupEventCreateCategoryPlaceholder", ["Catégorie de création d'évènement","Event creation category","Categoria de creación de eventos"]);
        this.Add("setupEventAvailableCategory", ["Séléctionnez la catégorie d'évènement disponible, ce sera utilisé pour l'affichage des évènements publiés.","Select the available event category. It will be used to display available events.", "Selecciona la categoria de eventos disponibles. Se usará para mostrar los eventos disponibles."]);
        this.Add("setupEventAvailableCategoryPlaceholder", ["Catégorie d'évènement disponible","Available event category","Categoria de eventos disponibles"]);
        this.Add("setupLang", ["Séléctionnez la langue du bot.","Select the bot language.","Selecciona el idioma del bot."]);
        this.Add("setupLangSelectPlaceholder", ["Langue","Language","Idioma"]);

        this.Add("setupCompleteMsg1", ["Configuration terminée ! Les salons suivants seront utilisés.\n\nCatégorie de création d'évènement: <#","Setup complete! The following channels will be used.\n\nEvent creation category: <#","Configuración completa! Los siguientes canales se utilizarán.\n\nCategoría de creación de eventos: <#"]);
        this.Add("setupCompleteMsg2", [">\nSalon de planification: <#",">\nEvent planning channel: <#",">\nSalón de planificación: <#"]);
        this.Add("setupCompleteMsg3", [">\nCatégorie d'évènement disponible: <#",">\nEvent available category: <#",">\nCategoria de eventos disponibles: <#"]);
        this.Add("setupCompleteMsg4", [">\nLangue: ",">\nLanguage: ",">\nIdioma: "]);
        
        this.Add("setupPreviousConfCompleteMsg1", ["Voici votre configuration précédente, elle sera remplacée par celle qui suit.\n\nCatégorie de création d'évènement: <#","Here is your previous configuration, it will be replaced by the following one.\n\nEvent creation category: <#","Aquí está su configuración anterior, será reemplazada.\n\nCategoría de creación de eventos: <#"]);

        this.Add("setupNotDone", ["Votre serveur n'est pas configuré, veuillez lancer la commande `/setup` pour le configurer.","Your server is not configured, please run `/setup` to configure it.","Tu servidor no está configurado, por favor ejecuta `/setup` para configurarlo."]);


		//Event Settings
		this.Add("msgEventCurrentSettings", ["Voici les paramètres actuellement sauvegardé pour votre événement :", "These are the current saved settings for your event:", "errLANG"])
        this.Add("msgEventEmbedTitle", ["Initialisation d'Evénement...", "Starting Event...", "errLANG"])
        this.Add("msgEventYourEvent", ["Options :", "Your event:", "errLANG"])
        this.Add("msgEventType", ["Type :", "Type:", "errLANG"])
        this.Add("msgEventName", ["Nom :", "Name:", "errLANG"])
        this.Add("msgEventDesc", ["Description :", "Description:", "errLANG"])
        this.Add("msgEventStartDate", ["Date de début :", "Starting Date:", "errLANG"])
        this.Add("msgEventDuration", ["Durée :", "Duration:", "errLANG"])
        this.Add("msgEventMaxMembers", ["Nombre de membres maximum :", "Maximum amount of members", "errLANG"])
        this.Add("msgEventSubType", ["Type d'inscription :", "Subscription type:", "errLANG"])
        this.Add("msgEventLeader", ["Commandant :", "Commander:", "errLANG"])
        this.Add("msgEventComposition", ["Composition :", "Composition:", "errLANG"])

        //Feedback
        this.Add("e_QstFeedback1", ["Dites-nous ce que vous pensez de l'événement ","Tell us what you tought about the event ","errLANG"]);
        this.Add("e_QstFeedback2", [" ! Si vous n'avez rien à dire, entrez `-`. **Vos retours sont anonymes.**","! If you don't have anything to say, enter `-`.","errLANG"]);
        this.Add("e_FeedbackMSG_EvIds", ["Identifiants:\n`","Ids:\n`","errLANG"]);
        this.Add("e_FeedbackMSG_EvName", ["Nom de l'événement :\n`","Event name:`","errLANG"]);
        this.Add("e_FeedbackMSG_FeedbackTxt", ["Message :","Feedback:","errLANG"]);
        this.Add("FBMSG_NotFoundERR", ["Aucun feedbackMSG n'est en cours dans ce salon.","There's no feedbackMSG going in this channel.","errLANG"]);
        this.Add("FBMSG_NotFoundEventERR", ["Il n'y a pas d'événement en cours dans ce salon.","There is no event going in this channel.","errLANG"]);
        this.Add("e_FeedbackTitle", ["Votre avis nous intéresse !","Your opinion interests us!",""]);
        this.Add("e_FeedbackDesc", ["Donnez-nous votre avis **anonymement** sur l'événement d'aujourd'hui en le notant en réagissant sur une des étoiles. La plus à droite étant 5/5.\n\nVous receverez ensuite un message privé vous permettant de donner un avis plus précis sur notre système !","Rate today's event by reacting with the emojis 1/5 from the left to the right. You wil then receive a DM to give a more detailed opinion about our runs!",""]);
        this.Add("FBMSG_WrongArgs", ["Veuillez donner un paramètre valide: ``on``, ``off``.","Please, provide a valid parameter: ``on``, ``off``.","errLANG"]);
        this.Add('e_FeedbackValidateMSG', ["Votre message ainsi que votre note ont bien été transmises ! Merci d'avoir participé à notre événement, nous espérons vous revoir bientôt ! \n\n- L'équipe d'Insights","Your feedback has been successfully sent! Thank you for participating, we hope to see you again!","errLANG"])

        this.Add("e_Public_FeedbackDesc", ["Ce formulaire est anonyme et peut être rempli autant de fois que vous le souhaitez.\n• Donner des retours sur nos événements,\n• Noter votre expérience avec nous et indiquer ce que vous aimé ou aimé pas,\n• Dire ce que vous pensez qu'on devrait faire de plus ou de moins,\n• Donner des encouragements/retours à nos commandants,\n• Ou tout ce que vous pouvez imaginer.\n\nRéagissez sur lémoji pour nous donner une note !", "Not translated YET", "errLANG"])

        //Event Timer Reminder
        this.Add("e_TimeReminderMainTxT1", ["L'événement ","The event ","errLANG"])
        this.Add("e_TimeReminderMainTxT2", [" va débuter dans "," will start in ","errLANG"])
        this.Add("e_TimeReminderMainTxT3", [" minutes. Vous receverez une commande du type ``/sqjoin <Commandant>`` environ 10 minutes avant le début."," minutes. You will receive a ``/sqjoin <Commander>`` command about 10 minutes before the event starts.","errLANG"])

        //Average Rating
        this.Add("msgAvRate_EventsNotFoundERR", ["Ce commandant n'a dirigé aucun événement sous notre système.","This commander did not lead any event with our bot.","errLANG"]);
        this.Add("msgAvRate_FeedbacksNotFoundERR", ["Ce commandant n'a reçu aucun feedback.","This commander did not receive any feedback.","errLANG"]);
        this.Add("e_msgAvRate_Desc", ["Ce commandant a une moyenne de **`","This commander has an average rating of **`",""]);
        this.Add("msgAvRate_UserNotFoundERR", ["Cet utilisateur n'est pas valide.","Cet utilisateur n'est pas valide.",""]);

        //Event stop
        this.Add("msgStopEmbed1", ["Bonjour, l'événement **","Hello, the event **","errLANg"])
        this.Add("msgStopEmbed2", ["** a été annulé par ``","** has been canceled by ``","errLANg"])
        this.Add("msgStopEmbed3", ["``. Si aucune raison n'a été donnée, vous pouvez demander au commandant pourquoi ou si il est répoussé à une autre date.","``. If no reason was provided, feel free to ask to the commander why or if it has been moved to another date.","errLANg"])
        this.Add("msgStopInvalidIdERR", ["Veuillez entrer un identifiant valide.","Please provide a valid id.","errLANg"])
        this.Add("msgStopInvalidFormatERR", ["Veuillez respecter le format: `-evs [Identifiant]`","Please respect the following format: `-evs [EventId]`.","errLANg"])
        this.Add("", ["","","errLANg"])
        this.Add("", ["","","errLANg"])
        this.Add("", ["","","errLANg"])
		
		//EVENT CREATE (errMSG)
		this.Add("msgERRTopTitle", ["Une erreur est survenue, voici la liste des problèmes rencontrés lors de la saisie de votre commande:","An error occured, here is the list of the encountered problems while executing this command.","errLANG"])
		this.Add("msgEventCreateInvalidType", ["- ERR: Type d'événement invalide.","- ERR: Invalid event type","errLANG"])
		this.Add("msgEventCreateInvalidName", ["- ERR: Nom de longueur trop élevée. (255 char MAX.)","- ERR: Name length. (255 char MAX)","errLANG"])
		this.Add("msgEventCreateInvalidDurationMoment", ["- ERR: Durée Invalide. Format: `HH`h`mm`m","- ERR: Invalid duration. (24h MAX)","errLANG"])
		this.Add("msgEventCreateInvalidDurationInt", ["- ERR: La durée mentionnée n'est pas valide. (NaN)","- ERR: Provided duration is not a number. (NaN)","errLANG"])
		this.Add("msgEventCreateInvalidDate", ["- ERR: La date donnée n'est pas reconnue comme date, format : DD/MM ``HH``h``mm``m. (moment().isValid() == false)","- ERR: Provided date is not a date. (moment().isValid() == false)","errLANG"])
		this.Add("msgEventCreateInvalidMaxMembers", ["- ERR: Le nombre de membre données n'est pas un entier.","- ERR: Given amount of allowed subscribers is not an integer.","errLANG"])
		this.Add("msgEventCreateInvalidSubType", ["- ERR: Ce type d'inscription n'existe pas. (1-2)","- ERR: Provided inscription type does not exist. (1-2)","errLANG"])
		this.Add("msgEventCreateInvalidLeader", ["- ERR: Ce commandant n'a pas été reconnue. Vérifiez que le membre se trouve bien sur le serveur discord.","- ERR: This commander haven't been recognized. Please verify he is in the discord server.","errLANG"])
		this.Add("msgEventCreateInvalidComposition", ["- ERR: Composition invalide, non trouvé dans la base de donnée.","- ERR: Invalid composition, not found in database.","errLANG"])
		this.Add("", ["","","errLANG"])


		

        //Event Creation

        //QuickCreateHelp
        this.Add('msgEventQuickCreate_HELP', ["```\nType\nNom(/Titre)\nDescription\nDate de début\nDurée\nLeader (Mention ou Discord:uId)\nComposition (Nom)\n```", "```\nType\Name(/Title)\nDescription\nStarting Date\nDuration\nLeader (Mention or Discord:uId)\nComposition (Name)\n```", ""])
        //Historic
        this.Add("msgEventHistoric_Creation", ["a créé l'événement.","created the event.","errLANG"]);
        this.Add("msgEventHistoric_Title", ["Historique","Historic","errLANG"]);
        this.Add("msgEventHistoric_AddMember", ["s'est inscrit à l'événement en tant que", "subscribed to the event as", "errLANG"]);
        this.Add("msgEventHistoric_RemoveMember", ["s'est désinscrit de l'événement.", "unsubscribed from the event.", "errLANG"]);
        this.Add("msgEventHistoric_UploadLogs", ["a uploadé les logs."," uploaded the logs.","errLANG"]);
        this.Add("msgEventHistoric_InviteUsers1", ["a ajouté","added","errLANG"]);
        this.Add("msgEventHistoric_InviteUsers2", ["à l'événement.","to the event.","errLANG"]);
        this.Add("msgEventHistoric_RemoveUsers1", ["a retiré","removed","errLANG"]);
        this.Add("msgEventHistoric_RemoveUsers2", ["de l'événement.","from the event.","errLANG"]);

        //EventList
		this.Add("msgEventList_NoEventERR", ["Il n'y a pas d'événement en cours pour le moment.","There is no event currently running.","errLANG"])

		//ERR
        this.Add("msgEventDateERR", ["Veuillez entrer une date valide (exemple : 20/03/2020 20:00 CET)","Please provide a valide date (e.g: 20/03/2020 20:00 CET)"])
		this.Add("msgEventCancel", ["La création de l'événement a bien été annulée.","Event creation has been successfully canceled.","errLANG"])
		
        //Event Publish Cmd
        this.Add("msgEventPublish_ERREventNotFoundChannel", ["Il n'y a pas d'événement disponible dans ce salon.", "Sorry, there is not any event running in this channel.", "errLANG"]);
		this.Add("msgEventPublish_ERREventNotFoundID", ["Il n'y a pas d'événement disponible avec cet identifiant.", "Sorry, there is not any event running with this id.", "errLANG"]);
		this.Add("msgEventPublish_WrongUsage", ["Format invalide.", "Invalid usage.", "errLANG"]);

		//Questions
		this.Add("msgEventTypeQst_TOP", ["Entrez le numéro correspondant au type d'événement que vous souhaitez créer.", "Enter the number corresponding to the type of event you want.", "errLANG"])
		this.Add("msgEventTypeQst", ["Quel type d'événement souhaitez-vous démarrer ? (1 à 19)","What type of event do you want to start? (1-19)","errLANG"])
		this.Add("msgEventNameQst", ["Quel nom souhaitez-vous donner à votre événement ?","Please enter a name for your event.","errLANG"])
		this.Add("msgEventCompQst", ["Quelle composition souhaitez-vous utiliser ?","What Composition do you want to use?","errLANG"])
		this.Add("msgEventLeadQst", ["Quel est le commandant de cet événement, mentionnez ou utilisez l'identifiant discord du commandant.","Who is leading this event, provide an id or mention the discord user.","errLANG"])
		this.Add("", ["","","errLANG"])
		this.Add("", ["","","errLANG"])

        //Recap
        this.Add("ev_RecapYourEvent",["Votre événement :","Your event:",""]);
        this.Add("",["","",""]);
        this.Add("",["","",""]);
        this.Add("",["","",""]);
        this.Add("",["","",""]);
        this.Add("",["","",""]);
        this.Add("",["","",""]);
        this.Add("",["","",""]);
		
        //Event broadcast
        this.Add("msgEventBroadcast_EventNotFoundERR", ["Il n'y pas d'événemet en cours dans ce salon.","There is not any event running in this channel.","errLANG"])
		this.Add("msgEventBroadcast_NoEntriesFoundERR", ["Personne n'est inscrit à cet événement.","Nobody is subscribed to this event.","errLANG"])
        this.Add("msgEventBroadcast_NoMsgProvidedERR", ["Message invalide.","Invalid message.","errLANG"])
        this.Add("msgEventBroadcast_EmbedTitle", ["Message de ","Broadcast by ","errLANG"])
        
        //Event Create Channels
        this.Add("msgEventCreateChannels_EventNotFoundERR", ["Il n'y a pas d'événement en cours dans ce salon.","There is not any event running in this channel.","errLANG"])
        
        //Event Upload Logs.
        this.Add("msgEventUploadLogs_NoArgsFoundERR", ["Veuillez rentrer l'identifiant d'un événement ou les liens dps.report.","Please provide an event id or dps.report links.","errLANG"])
        this.Add("msgEventUploadLogs_eDesc1", ["L'événement ","The event ","errLANG"])
        this.Add("msgEventUploadLogs_eDesc2", [" est terminé. Les logs ont été uploadés."," is now over. Logs have been uploaded.","errLANG"])
        this.Add("msgEventUploadLogs_NoEventFoundERR", ["Il n'y a pas d'événement en cours dans ce salon.","There is not any event in this channel.","errLANG"])
        this.Add("", ["","","errLANG"])
        this.Add("", ["","","errLANG"])
        this.Add("", ["","","errLANG"])

        //Create Composition:
        this.Add("msgCreateCompo_ClassNotFoundERR", [" n'a pas été trouvé dans notre base de donnée. Voici la liste des rôles disponibles : \n"," is not in our database.","errLANG"])
        this.Add("msgCreateCompo_ArgsNotFoundERR", ["Veuillez respecter le format suivant : `-event_MakeNewComposition <nom> <Id>:<Max>,<Id>:<Max>...`","Please, respect the following format: `-event_MakeNewComposition <nom> <Id>:<Max>,<Id>:<Max>...`","errLANG"])
        this.Add("msgCreateCompo_CompAlrdyExistsERR", ["Une composition avec ce nom existe déjà.","A composition with this name already exists.","errLANG"])
        this.Add("msgCreateCompo_CategoryDoesNotExist", ["La category utilisée n'existe pas.","This category does not exist.","errLANG"])
        
        //CompCat
        //add
        this.Add("msgCreateCompCat_WrongSyntax", ["Veuillez donner un nom à votre categorie.","Please provide a name to your category","errLANG"])
        this.Add("msgCreateCompCat_AlrdyExist", ["Une categorie avec ce nom existe déjà.","A category with this name already exists.","errLANG"])
        //remove
        this.Add("msgRemoveCompCat_WrongSyntax", ["Veuillez donner un nom de catégorie à supprimer.","Please provide a category to delete.","errLANG"])
        this.Add("msgRemoveCompCat_DoesNotExist", ["Cette catégorie n'existe pas.","This category does not exist.","errLANG"])
        //set
        this.Add("msgSetCompCat_WrongSyntax", ["Veuillez préciser une catégorie et une composition.","Please provide a category & a composition.","errLANG"])
        this.Add("msgSetCompCat_CatDoesNotExist", ["Cette catégorie n'existe pas.","This category does not exist.","errLANG"])
        this.Add("msgSetCompCat_CompDoesNotExist", ["Cette composition n'existe pas.","This composition does not exist.","errLANG"])

        //Embed
        this.Add("e_evLeader", ["Commandant :","Commander:","errLANG"])
        this.Add("e_evBeginning", ["Début :","Beginning:","errLANG"])
        this.Add("e_evDuration", ["Durée :","Duration:","errLANG"])
        this.Add("e_evMembers", ["Membres ","Members ","errLANG"])
        this.Add("e_evJoin", ["Rejoignez cet événement en cliquant sur l'émoji vert ci-dessous.","Join this event by clicking on the green emoji below.","errLANG"])
        this.Add("e_evReserve", ["Réserve ","Reserve ","errLANG"])
        this.Add("e_AvailableCompFields", ["__**Compositions :**__","__**Compositions:**__","errLANG"])
        this.Add("e_evFooterDesc", ["Rejoignez cet événement en cliquant sur l'émoji vert ci-dessous.","Join this event by clicking on the green emoji below.","errLANG"])
        this.Add("e_evFooter", ["Commandé par ","Leaded by ","errLANG"])
        this.Add("e_JoinEventCUSTOMDMTitle", ["Inscription", "Event Subscription"]);
        this.Add("", ["","","errLANG"])
        

        //AddMembers
		this.Add("msgEventAddMembers_ERRNoUsers", ["Veuillez mentionner ou donner l'identifiant d'au moins un utilisateur.","Please mention or provide the id of at least one user.","errLANG"])
        this.Add("msgEventAddMembers_ERRNoChannel", ["Il n'y a pas d'événement en cours dans ce salon.","There is event running in this channel.","errLANG"])
        this.Add("msgEventAddMembers_InvalidUserId1", ["L'identifiant ","The user number ","errLANG"])
		this.Add("msgEventAddMembers_InvalidUserId2", [" n'est pas valide."," is not valid.","errLANG"])

        //RemoveMembers
		this.Add("msgEventRemoveMembers_ERRNoUsers", ["Veuillez mentionner ou donner l'identifiant d'au moins un utilisateur.","Please mention or provide the id of at least one user.","errLANG"])
        this.Add("msgEventRemoveMembers_ERRNoChannel", ["Il n'y a pas d'événement en cours dans ce salon.","There is event running in this channel.","errLANG"])
        this.Add("msgEventRemoveMembers_InvalidUserId1", ["L'identifiant ","The user number ","errLANG"])
		this.Add("msgEventRemoveMembers_InvalidUserId2", [" n'est pas valide."," is not valid.","errLANG"])



        //Translate
        this.Add("trERRmsg", ["S'il vous plaît BLALBALBLABLAL","Please provide the langage your message is wrote in. [en, es, fr...]", "errLANG"])
        
        //Help CMD
        this.Add('e_HELPTitle', ["Centre d'aide d'Insights","Insight's Help Center","errLANG"])
        this.Add('', ["","",""])
		this.Add('', ["","",""])
		this.Add('', ["","",""])
		this.Add('', ["","",""])
		this.Add('', ["","",""])
		this.Add('', ["","",""])
		
        //AddFirstKills
        this.Add('msgFirstKills_Numbers1', ['Il y a actuellement ``', 'There is currently ``', 'errLANG'])
        this.Add('msgFirstKills_Numbers2', ['`` firstkills enregistrés dans notre base de donnée.', '`` firstkills saved in our databse.', 'errLANG'])
        this.Add('msgFirstKills_errUsers', ['est invalide.', 'is invalid.', 'errLANG'])

        //Settings:
        //  SetLang:
        this.Add("setLangERRmsg", ["Veuillez préciser une nouvelle langue valide.", "Please provide a valid language.", "errLANG"])
        this.Add("setLangERRnotFoundmsg", ["Veuillez renseigner une langue disponible: FR, EN, ES", "Please provide a supported language: FR, EN, ES", "errLANG"])
        this.Add("setLangSuccessmsg", ["Changement de langue réalisé avec succès !", "Language changed successfully!", "errLANG"]);
        
        //  SetPrefix:
        this.Add("setPrefixERRmsg", ["Veuillez préciser un nouveau préfixe.", "Please provide a prefix.", "errLANG"])
        this.Add("setPrefixERRnotFoundmsg", ["Veuillez renseigner un préfixe disponible.", "Please provide a supported prefix.", "errLANG"])
        this.Add("setPrefixSuccessmsg", ["Changement de préfixe réalisé avec succès !", "Prefix changed successfully!", "errLANG"]);
        
        //  Version:
        this.Add("setVersionSuccessmsg", ["Changement de version réalisé avec succès !", "Version updated successfully!", "errLANG"])
        this.Add("setVersionERRmsg", ["Veuillez donner une version valide. [x.x.x]", "Please provide a valid version.``[x.x.x]``", "errLANG"])
        this.Add("setVersionERRformatmsg", ["Veuillez donner une version valide. [x.x.x]", "Please provide a valid version.``[x.x.x]``", "errLANG"])
        this.Add("getVersionSuccessmsg", ["Le bot est actuellement à la version ", "The bot is currently on version ", "errLANG"])
        
        //Setup Authentification cmd
        this.Add("setAuth_ChanQst", ["Dans quel salon souhaitez-vous que l'authentification se fasse ?","In what channel you want the verification message to be? (ID)","errLANG"])
        this.Add("setAuth_ChanERR", ["L'identifiant donné n'est pas valide. Veuillez relancer la commande.","This id isn't valid. Please re-run the command.","errLANG"])
        this.Add("setAuth_msgQst", ["Sur quel message souhaitez-vous placer la réaction ?","To what message do you want to apply the reaction ?","errLANG"])
        this.Add("setAuth_msgERR", ["L'identifiant donné n'est pas valide. Veuillez relancer la commande.","This id isn't valid. Please re-run the command.","errLANG"])
        
        //Setup GuildInviteMSG cmd
        this.Add("setGuildInviteMSG_ChanQst", ["Dans quel salon souhaitez-vous que l'authentification se fasse ?","In what channel you want the verification message to be? (ID)","errLANG"])
        this.Add("setGuildInviteMSG_ChanERR", ["L'identifiant donné n'est pas valide. Veuillez relancer la commande.","This id isn't valid. Please re-run the command.","errLANG"])
        this.Add("setGuildInviteMSG_msgQst", ["Sur quel message souhaitez-vous placer la réaction ?","To what message do you want to apply the reaction ?","errLANG"])
        this.Add("setGuildInviteMSG_msgERR", ["L'identifiant donné n'est pas valide. Veuillez relancer la commande.","This id isn't valid. Please re-run the command.","errLANG"])
                
        //Setup Application cmd
        this.Add("setApp_ChanQst", ["Dans quel salon souhaitez-vous que l'application se fasse ?","In what channel you want the application message to be? (ID)","errLANG"])
        this.Add("setApp_ChanERR", ["L'identifiant donné n'est pas valide. Veuillez relancer la commande.","This id isn't valid. Please re-run the command.","errLANG"])
        this.Add("setApp_msgQst", ["Sur quel message souhaitez-vous placer la réaction ?","To what message do you want to apply the reaction ?","errLANG"])
        this.Add("setApp_msgERR", ["L'identifiant donné n'est pas valide. Veuillez relancer la commande.","This id isn't valid. Please re-run the command.","errLANG"])
        
        //Start AddGuildInvite MSG's
        this.Add("AddGuildInvite_DMVerificationMSG", ["Votre demande d'invitation à notre guilde a bien été prise en compte. Vous recevrez un message privé dès que vous aurez été invité.e. Merci de votre patience.","Your request joining our guild has been sent to our officer. You will be notified in DM once you've been invited to our in-game guilde. Thank you for your patience.","errLANG"])
        this.Add("AddGuildInvite_MemberNotFoundERR", ["Vous n'êtes pas enregistré comme membre. Vous ne pouvez donc pas faire une demande d'invitation pour la guilde. Vous pouvez dès maintenant faire votre demande dans le salon textuel <#818417446200410122>.","You are not registered as a member. You then can't request a guild invite. You can start your application now in <#818417446200410122>.","errLANG"])
        this.Add("AddGuildInvite_ChanDesc1", ["Demande d'invitation de ","Invite request from ","errLANG"])
        this.Add("AddGuildInvite_Accepted", ["Vous venez de recevoir une invitation à la guilde.","You just received an invitation to the in-game guild.","errLANG"])

        //Start Application DM's
        this.Add("msgStart1", ["Commençons dès maintenant avec la procédure de demande d'inscription. Nous allons vous demander votre nom de compte puis vous poser quelque questions.","Let's start with the application process. You will be asked for your in-game name and some details about yourself.","errLANG"])
        this.Add("msgStart2", ["Nous utilisons les noms de compte Guild Wars 2 pour plus facilement vous inviter lors des événements avec nous. Les questions auxquelles vous aller répondre nous servent à savoir qui nous rejoint et pourquoi. Les données sont sécurisées et peuvent être supprimées à tout moment en envoyant un message directe à un officier.","We use your guild wars 2 account name to help you get into squads with us. The questions you will reply to helps us knowing who is joining raid and for what reason. All the datas are stored securely and can't be deleted at any time by sending a direct message to an officer.","errLANG"])
        this.Add("msgStart3", ["Une fois que la procédure décrite est terminée, vous pourrez commencer à rejoindre nos événements. La question en cours a toujours une bande verte sur le côté gauche, vous pouvez annuler à tout moment en tappant 'cancel', toutes les questions sont obligatoires. Bonne chance !","Once the application process is complete, you can start joining our events. The current question always has a green line on the left edge, you can cancel this process anytime by typing 'cancel', you can't skip any question. Good luck!","errLANG"])
        this.Add("msgIgnQst", ["Quel est votre nom de compte Guild Wars 2 ? (e.g: Nom.1234)","What is your Guild Wars 2 account name? (e.g: Name.1234)","errLANG"])
        this.Add("msgExpQst", ["Quel est votre expérience dans le jeu et dans le PvE haut niveau (Raid, Fractal CM...)","What is your experience with the game and high-level PvE (Raid, Fractal CM...)","errLANG"])
        this.Add("msgWhyQst", ["Pourquoi vouloir nous rejoindre ? D'où avez-vous entendu parler de nous ?","Why do you want to join us? Where did you hear from us?","errLANG"])
        this.Add("msgVerifyApp_Title", ["Vérifiez votre demande","Verify your application","errLANG"])
        this.Add("msgVerifyApp_Desc", ["**Entrez 'confirmer' pour confirmer votre demande.** Vous pouvez toujours annuler en envoyant 'cancel'.","**Send 'confirm' to confirm your application.** You can still cancel the process by typing 'cancel'.","errLANG"])
        this.Add("msgVerifyApp_IGN", ["Nom de Compte","Account Name","errLANG"])
        this.Add("msgVerifyApp_Exp", ["Votre experience avec le jeu/PvE Haut Niveau","Your experience with the game/HL PvE","errLANG"])
        this.Add("msgVerifyApp_Why", ["Pourquoi vous voulez nous rejoindre ? D'où avez-vous entendu parler de nous ?","Why do you want to join us? Where did you hear from us?","errLANG"])
        this.Add("msgApplicationCancel", ["La demande a été annulée.","Application process canceled.","errLANG"])
        this.Add("msgAppConfirmed", ["Félicitation, votre demande d'adhésion a été envoyée. Nous vous recontacterons d'ici peu.","Congratulation! Your application has been sent. We will contact you shortly.","errLANG"])
        this.Add("SaveApp_msgPostedBy", ["Demande de ","Application from ","errLANG"])    
        
        //Start StaffApplication DM's
        this.Add("staffapp_msgStart", ["Toutes vos réponses sont enregistrées dans une base de donnée, vous êtes libre de demander une suppression à tout instant à un administrateur. Après avoir répondu aux questions, pensez à confirmer la demande. Vous pouvez annuler à tout instant en entrant `cancel`.","All your responses are recorded and stored. Don't forget to confirm your application at the end.","errLANG"])
        this.Add("staffapp_msgRoleQst", ["Pour quel grade faites-vous cette demande ? *(Modérateur, Administrateur, Helper...)*","What are you applying for? *(Moderator, Admin, Community Manager, Editor, Graphic Designer, Motion Designer...)*","errLANG"])
        this.Add("staffapp_msgTopicQst", ["Sur quelle plateforme sentez-vous capable d'être modérateur ? *(Twitch, discord, serveur MC...)*","If you applied as moderator, on what platform (twitch, discord, youtube...)? *(answer with 'none' if you did not apply as moderator)*","errLANG"])
        this.Add("staffapp_msgDetailsQst", ["Apportez des précisions sur votre expérience sur twitch/discord/minecraft.","Why should we take you instead of another?","errLANG"])
        this.Add("staffapp_msgExpQst", ["Quel est votre expérience en tant que modérateur ?","Please provide a few example of your experience (graphic designs, edits, server your moderated for...)","errLANG"])
        this.Add("staffapp_msgWhyQst", ["Pourquoi vouloir nous rejoindre ?","Why do you want to join us? Give a nice lil touch to your application!","errLANG"])
        this.Add("staffapp_msgVerifyApp_Title", ["Vérifiez votre demande","Verify your application","errLANG"])
        this.Add("staffapp_msgVerifyApp_Desc", ["**Entrez 'confirmer' pour confirmer votre demande.** Vous pouvez toujours annuler en envoyant 'cancel'.","**Send 'confirm' to confirm your application.** You can still cancel the process by typing 'cancel'.","errLANG"])
        this.Add("staffapp_msgVerifyApp_Role", ["<:member:865940394763747379> Grade","Role","errLANG"])
        this.Add("staffapp_msgVerifyApp_Topic", ["<:twitch:865940395045552198> Plateforme","Topic","errLANG"])
        this.Add("staffapp_msgVerifyApp_Detail", ["<:settings:865940395187240980>  Détails","Details","errLANG"])
        this.Add("staffapp_msgVerifyApp_Exp", ["<:mod_icon:865931065280692224> Votre experience dans la modération","Experience with moderation","errLANG"])
        this.Add("staffapp_msgVerifyApp_Why", ["<:team:865940394733993985> Pourquoi vouloir nous rejoindre ?","Why do you want to join us?","errLANG"])
        this.Add("staffapp_msgApplicationCancel", ["La demande a été annulée.","Application process canceled.","errLANG"])
        this.Add("staffapp_msgAppConfirmed", ["Félicitation, votre demande a été envoyée. Nous vous recontacterons d'ici peu.","Congratulation! Your application has been sent. We will contact you shortly.","errLANG"])
        this.Add("staffapp_msgPostedBy", ["Demande de ","Application from ","errLANG"])     
        this.Add("StaffAppStarteTitle", ["Rejoindre notre équipe", "Join our team", "errLANG"])
        this.Add("staffapp_msgSaveApp_Title", ["Demande de rôle de ", "Application from ", "errLANG"]) 
        this.Add("staffappRefused", ["Refusé par ", "Declined by ", "errLANG"]);
        this.Add("staffappAccepted", ["Accepté par ", "Approved by ", "errLANG"]);

        //Approved & Denied Applications Messages
        this.Add("msgAppResultReason", ["Raison : ","Reason: ", "errLang"])
        this.Add("msgCongratulationOnApproval", ["Félicitation, votre demande d'inscription a été acceptée. Vous pouvez dès maintenant rejoindre nos événements.","Congratulation, your application has been accepted. You can start joining our events as off now!","errLANG"])
        this.Add("msgDeniedapplication", ["Désolé, votre demande a été refusée. Vous pouvez réessayer quand vous voulez.","Sorry, your application has been denied. Feel free to try again anytime.","errLANG"])
        this.Add("msgIsDescActiveON", ["La description sur les demandes d'inscription est maintenant activée pour vous.","Description on applications is now active for you.","errLANG"])
        this.Add("msgIsDescActiveOFF", ["La description sur les demandes d'inscription est maintenant désactivée pour vous.","Description on applications is now inactive for you.","errLANG"])
        this.Add("msgQstDesc", ["Quelle raison souhaitez vous donner ? \n*(Vous pouvez annuler cette commande en tapant 'break' ou désactiver, exclusivement pour celle-ci, la description en tapant 'cancel'. Vous pourrez toujours désactiver définitivement cette option en réagissant à l'émoji 'clipboard'.)*","What reason would you like to provide? \n*(You can cancel this question by typing 'break' or stop the whole process by typing 'cancel'. You can always deactivate this settings by reacting on the 'clipboard' emoji)*","errLANG"])
        
        //STAFF
        this.Add("STAFFmsgCongratulationOnApproval", ["Félicitation, votre demande d'inscription a été acceptée.","Congratulation, your application has been accepted.","errLANG"])
        
        //Channel Format MSG - Saved
        this.Add("msgSaveApp_Title", ["Demande de ","Application request from ","errLANG"])
        this.Add("msgSaveApp_Id", ["Identifiant","ID","errLANG"])
        this.Add("msgSaveApp_IGN", ["Nom de Compte","Account Name","errLANG"])
        this.Add("msgSaveApp_Exp", ["Votre experience avec le jeu/PvE Haut Niveau","Your experience with the game/HL PvE","errLANG"])
        this.Add("msgSaveApp_Why", ["Pourquoi voulez-vous nous rejoindre ? D'où avez-vous entendu parler de nous ?","Why do you want to join us? Where did you hear from us?","errLANG"])
        this.Add("msgSaveApp_Desc", ["Raison du choix", "Approver reason", "errLANG"])

        this.Add("msgSaveStaffApp_Desc", ["Raison du choix", "Approver reason", "errLANG"])
        this.Add("msgSaveStaffApp_Id", ["Identifiant","ID","errLANG"])
        //Event Supervised
        this.Add("event_eSupervisedMSGTitle", ["Run supervisé","Supervised run",""])
        this.Add("event_eSupervisedMSGDesc", ["Le run est dirigé par une personne en test de devenir commandant pour Insights. Cela implique la présence d'un commandant déjà vérifié et donc des remarques potentielles pendant le run. On vous demande à tous un respect et une certaine indulgence envers le/la superviseur et le/la supervisé(e) au cours de cet événement.","This run is leaded ",""])
        
        //EventComplist
        this.Add("msg_eCompListDesc", ["Voici la liste des compositions disponibles.","Here is the list of all available compositions","errLANG"])
        this.Add("msg_eCompListFooter", ["Demandé par ","Requested by ","errLANG"]);
        this.Add("msg_eCompListTitle", ["Gestionnaire de Compositions","Composition Manager","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);

        //RunSchedule
        this.Add("e_Run_PlanningTitle", ["Insights Run Planning","Run Planning","errLANG"])
        this.Add("e_Run_PlanningDescMSG2", ["Voici la liste des événements disponibles actuellement, pour vous inscrire à l'un d'entre eux, cliquez simplement sur le salon de l'événement puis réagissez sur l'émoji vert. Si vous souhaitez avoir la liste des événements auxquels vous êtes inscrit, réagissez ci-dessus pour recevoir en message privé une liste de vos événements.","Here is a list of all the current events. If you want to join one, click on the event channel and react on the green emoji to join it.","errLANG"]);
        this.Add("e_Run_Planning", ["","","errLANG"]);
        this.Add("e_Run_PlanningDesc1DM", ["Voici la liste des événements auxquels vous êtes inscrit :","Here is the list of the event you joined:","errLANG"]);
        this.Add("e_Run_PlanningDESCPupl", ["Voici la liste des événements actuellement publiés & disponibles :","Here is the list of the current events:","errLANG"]);
        
        this.Add("e_RunPlanning_ERRNoEntryFound", ["Malheureusement, vous n'avez aucun événement planifié.","Sadly, you did not join any of our events recently.","errLANG"]);
        this.Add("e_RunPlanning_FooterRequestedBy", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);


        //CommandsDesc
        this.Add("cmdDesc_addFirstKill", ["Ajoute un 'firstkill' pour le bosse et les utilisateurs donnés.","Add a 'firstkill' for the boss & the provided users.","errLANG"]);
        this.Add("cmdDesc_admin_help", ["Affiche la liste des commandes - utilisée pour le debug.","Show a list of the current commands - used for debug.","errLANG"]);
        this.Add("cmdDesc_agree_rules", ["Accepte les règles.","Accept the rules.","errLANG"]);
        this.Add("cmdDesc_algorithm", ["Lance le code tapée pour cette commande. Commande administrateur, utilisable uniquement par les développeurs.","Run the typed code for this command. Admin only.","errLANG"]);
        this.Add("cmdDesc_announce", ["Annonce le texte donné.","Announce the provided text.","errLANG"]);
        this.Add("cmdDesc_ApplicationSetup", ["Met en place un système de demande par émoji sur le message donné.","Setup an application system through emoji on the provided message.","errLANG"]);
        this.Add("cmdDesc_AuthSetup", ["Met en place un système d'authentification sur le message donné.","Setup an authentification system on the provided message.","errLANG"]);
        this.Add("cmdDesc_ban", ["Bannis l'utilisateur pour la raison donnée en paramètre.","Ban the user for the provided reason.","errLANG"]);
        this.Add("cmdDesc_case", ["Montre les informations attachées au cas donné.","Show the attached informations of a provided case.","errLANG"]);
        this.Add("cmdDesc_clean", ["Supprime le cas mentionné.","Delete the selected case.","errLANG"]);
        this.Add("cmdDesc_clear", ["Supprime le nombre de message donné dans le salon où est envoyé la commande.","Delete the provided amount of message.","errLANG"]);
        this.Add("cmdDesc_create_profile", ["Créé ou modifie un profile.","Create or edit a profile.","errLANG"]);
        this.Add("cmdDesc_db_setRole", ["Change le rôle d'un profile déjà existant.","Change the role of an already existing profile.","errLANG"]);
        this.Add("cmdDesc_event_AddMembers", ["Ajoute les membres mentionnés à l'événement se trouvant dans le salon où est utilisée la commande.","Add the mentionned members to the event that is in the channel where the command has been ran.","errLANG"]);
        this.Add("cmdDesc_event_Broadcast", ["Fait une annonce d'événement dans le salon où est utilisée la commande.","Broadcast in the event channel where the command is being ran.","errLANG"]);
        this.Add("cmdDesc_event_CreateChannels", ["Créé les salons textuels & vocaux pour l'événement se trouvant dans le salon où est lancée la commande.","Create the text & vocal channels for the event being in the channel where you ran the command.","errLANG"]);
        this.Add("cmdDesc_event_DeleteChannels", ["Supprime les salons précédemments créés par `addeventchannels`.","Remove the previously created channels by `addeventchannels`.","errLANG"]);
        this.Add("cmdDesc_event_DmBroadcast", ["Fait une annonce **en message privé** à toutes les personnes inscrites à l'événements se trouvant dans la salon où est utilisée la commande.","Send a broadcast in private message to all the subscribed members to the event in the channel where the command has been ran.","errLANG"]);
        this.Add("cmdDesc_event_eqcCheckFormat", ["Permet aux créateurs d'événement de vérifier le format de leur commande sans avoir à créer l'événement en lui même.","Allows event creator to check the format of their event creation without actually creating one.","errLANG"]);
        this.Add("cmdDesc_event_feedback", ["Ouvre ou ferme les feedbacks (sous forme de message avec 5 réactions, permettants de donner une note) dans le salon où là commande est utilisée. Un event doit-y être en cours.","Open or close the feedback. An event must run in the channel where the command is being ran.","errLANG"]);
        this.Add("cmdDesc_event_List", ["Affiche la liste des événements actuellement disponibles.","Show the list of the current available event.","errLANG"]);
        this.Add("cmdDesc_event_MakeNewComposition", ["Créé une composition avec le nom & les classes passées en paramètre. **Attention à ne pas mettre d'espace entre les différentes classes et à bien respecter le format.**","Create a composition with the given parameters. **Make sure you respect the syntax. Do not add up space in between classes.**","errLANG"]);
        this.Add("cmdDesc_event_Publish", ["Publie l'événement se trouvant dans le salon où est utilisée la commande.","Publish the event in the channel where the command is being ran.","errLANG"]);
        this.Add("cmdDesc_event_QuickCreate", ["Créé un événement avec une syntaxe plus complexe mais plus rapide.","Create an event with a complexified syntax, faster though.","errLANG"]);
        this.Add("cmdDesc_event_RemoveMembers", ["Retire les membres mentionnés à l'événement se trouvant dans le salon où est utilisée la commande.","Remove the mentionned members to the event that is in the channel where the command has been ran.","errLANG"]);
        this.Add("cmdDesc_event_Stop", ["Annule l'événement mentionné. (IsActive: 0)","Cancel the mentionned event. (IsActive: 0)","errLANG"]);
        this.Add("cmdDesc_event_TimeReminder", ["Rappelle à toutes les personnes inscrites à l'événement se trouvant dans le salon où est utilisée la commande qu'il commence dans le nombre de minutes mentionnés. (e.g: `timereminder 30`, rapellera que l'événement commence dans 30 minutes.)","Send a time reminder to everyone subscribed to the event that the event starts in the time mentionned in the message in minutes.","errLANG"]);
        this.Add("cmdDesc_event_Unpublish", ["Rend l'événement se trouvant dans le salon où est utilisée la commande privé à nouveau.","Unpublish the event in the channel where the command is being ran.","errLANG"]);
        this.Add("cmdDesc_event_uploadLogs", ["Poste les logs afin que tous les membres inscrits à l'événement y ai accès.","Send the logs to every member subscribed to the event.","errLANG"]);
        this.Add("cmdDesc_feedback_bu", ["Commande administrateur, utilisée pour le debug.","Admin command. Used for debug.","errLANG"]);
        this.Add("cmdDesc_get_discordUser", ["Affiche les utilisateurs attachés aux noms gw2 donnés.","Show the users attached to the provided gw2 ign's.","errLANG"]);
        this.Add("cmdDesc_get_ign", ["Affiche les noms de compte attachés aux utilisateurs donnés.","Show the gw2 ign's attached to the provided users.","errLANG"]);
        this.Add("cmdDesc_getAverageRating", ["Affiche la note moyenne du commandant mentionné.","Show the average rating of the mentionned commander.","errLANG"]);
        this.Add("cmdDesc_GuildInviteSetup", ["Permet la mise en place des invitations de guilde 'automatisées'.","Setup the guild invite reaction system.","errLANG"]);
        this.Add("cmdDesc_gw2_get_item", ["Commande administrateur, permet de faire une recherche dans l'API gw2.","Admin command, allow the user to do a research in the gw2 API.","errLANG"]);
        this.Add("cmdDesc_help", ["Affiche la liste des commandes disponibles si aucune commande n'est spécifié.","Show a list of all current commands.","errLANG"]);
        this.Add("cmdDesc_info", ["Commande de la première version. Non à jour. *(Envoie les informations relatives au 'Sypher Project @ 2019-2020')*","Outdated command from first patch. Not up to date. *(Send informations related to 'Sypher Project @ 2019-2020')*","errLANG"]);
        this.Add("cmdDesc_kick", ["Expulse l'utilisateur mentionné du discord. Le sauvegarde sous forme de cas.","Kick the user from the discord server. Save it to db as a case.","errLANG"]);
        this.Add("cmdDesc_setPrefix", ["Modifie le prefix des commandes utilisées sur le serveur.","Change the used command prefix.","errLANG"]);
        this.Add("cmdDesc_leaderboard", ["Affiche la liste des 10 personnes les plus riches du serveur.","Show the Top 10 richest members of the server.","errLANG"]);
        this.Add("cmdDesc_meta", ["Affiche une liste de lien jugés utile pour la meta actuelle.","Show a list of links judged meta to websites.","errLANG"]);
        this.Add("cmdDesc_bal_reset", ["Remet à la valeur initiale de création la balance de l'utilisateur donné.","Reset the balance of the provided user.","errLANG"]);
        this.Add("cmdDesc_bal_set", ["Change la balance de l'utilisateur donné.","Change the balance of a user.","errLANG"]);
        this.Add("cmdDesc_balance", ["Montre la balance d'un utilisateur ou de la personne qui utilise la commande si aucune id est passée en paramètre.","Show the balance of the provided user, if none, show the balance of the user that ran the command.","errLANG"]);
        this.Add("cmdDesc_bet", ["Dépense la valeur donnée et obtenez une chance d'obtenir entre 2 à 10 fois la somme pariée.","Bet the provided value. Get a chance to multiple it by 2 to 10.","errLANG"]);
        this.Add("cmdDesc_drop", ["Créé un drop. (Message avec réaction, le premier à réagir gagne une somme aléatoire multiplié par la valeur donnée.)","Create a drop.","errLANG"]);
        this.Add("cmdDesc_pay", ["Donne la valeure donnée à l'utilisateur mentionnée.","Pay the provided user with the provided value.","errLANG"]);
        this.Add("cmdDesc_token_bal", ["Montre la balance token d'un utilisateur ou de la personne qui utilise la commande si aucune id est passée en paramètre.","Show the token balance of the provided user, if none, show the token balance of the user that ran the command.","errLANG"]);
        this.Add("cmdDesc_token_balSet", ["Change la balance token de l'utilisateur donné.","Change the token balance of a user.","errLANG"]);
        this.Add("cmdDesc_modlog", ["Affiche la liste des cas d'un utilisateur.","Show the case list of a user.","errLANG"]);
        this.Add("cmdDesc_mute", ["Rend muet l'utilisateur mentionnée avec un rôle `Muted`, vérifiez que ce rôle existe avant d'utiliser cette commande.","Mute the mentionned user with a `Muted` role. Make sure it exists.","errLANG"]);
        this.Add("cmdDesc_ping", ["Vérifie la connexion `client-host`.","Check connection with the bot.","errLANG"]);
        this.Add("cmdDesc_profile_counter", ["Affiche le nombre de profiles créés.","Show the amount of created profiles.","errLANG"]);
        this.Add("cmdDesc_quick_chat", ["Permet l'affichage de messages préenregistrés.","Allow pre-registered messages to be sent.","errLANG"]);
        this.Add("cmdDesc_senddm", ["Envoie un message privé à l'utilisateur mentionné.","Send a DM to the mentionned user.","errLANG"]);
        this.Add("cmdDesc_setLang", ["Change la langue globale du bot.","Change the global bot langage.","errLANG"]);
        this.Add("cmdDesc_setVersion", ["Change la version du bot.","Change the bot version.","errLANG"]);
        this.Add("cmdDesc_show_profile", ["Affiche le profile d'un utilisateur.","Show the profile of a user.","errLANG"]);
        this.Add("cmdDesc_skip", ["Passe à la musique suivante sur la liste d'attente.","Skip the current played music.","errLANG"]);
        this.Add("cmdDesc_stop", ["Arrête la musique & déconnecte le bot.","Disconnect the bot.","errLANG"]);
        this.Add("cmdDesc_training", ["Créé un salon vocal & un textuel.","Create a text & vocal channel.","errLANG"]);
        this.Add("cmdDesc_translate", ["Traduit de la `lang1` vers la `lang2` le message donné.","Translate the provided message from `lang1` to `lang2`.","errLANG"]);
        this.Add("cmdDesc_unmute", ["Donne la possiblité de parler à un utilisateur précédemment rendu muet. Lui retire le rôle.","Give back a user the ability to speak.","errLANG"]);
        this.Add("cmdDesc_version", ["Affiche la version actuelle du bot.","Show the current version of the bot.","errLANG"]);
        this.Add("cmdDesc_warn", ["Ajoute un avertissement sous forme de cas à l'utilisateur mentionné.","Warn the provided user.","errLANG"]);
        this.Add("cmdDesc_event_SetCompCategory", ["Change la catégorie d'une composition déjà existante.","Change the category of an already existing composition.","errLANG"]);
        this.Add("cmdDesc_event_CompList", ["Affiche une liste des toutes les compositions par catégorie.","Show a list of all composition per category.","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);
        this.Add("cmdDesc_", ["","","errLANG"]);


        //CommandBoard
        this.Add("cmdBoard_FieldName", ["Nom : ","Name:","errLANG"]);
        this.Add("cmdBoard_FieldCommand", ["Commande : ","Command:","errLANG"]);
        this.Add("cmdBoard_FieldAliases", ["Aliases : ","Aliases:","errLANG"]);
        this.Add("cmdBoard_FieldDesc", ["Description : ","Description:","errLANG"]);
        this.Add("cmdBoard_FieldSyntax", ["Syntax : ","Syntax:","errLANG"]);

        //CommandList
        this.Add("cmdList_Desc", ["Pour plus d'informations à propos d'une commande, faites `"+this.m_Prefix+"help <commande>`.","For more information about specific commands do `-help <command>`.","errLANG"])
        this.Add("cmdList_FieldEvent", ["💎 Evénements","💎 Events","errLANG"])
        this.Add("cmdList_FieldMusic", ["🎵 Musique ","🎵 Music","errLANG"])
        this.Add("cmdList_FieldAdmin", ["🛡️ Administratif","🛡️ Admin","errLANG"])
        this.Add("cmdList_FieldUtility", ["⚙️ Utilitaires","⚙️ Utility","errLANG"])
        this.Add("cmdList_FieldMod", ["🛠️ Modération","🛠️ Moderation","errLANG"])
        this.Add("cmdList_FieldSetup", ["🔑 Setup","🔑 Setup","errLANG"])
        this.Add("cmdList_FieldNews", ["<:news:827512129686732812> Nouveautées", "<:news:827512129686732812> News", "errLANG"])
        this.Add("cmdList_Request", ["Demandé par ","Requested by ","errLANG"]) 
        //this.Add("cmdList_Desc", ["","","errLANG"])
       
        /*
                this.m_Bank["xxxxxxxxxx",  ["errLANG", "errLANG", "errLANG"]);
                this.m_Bank["xxxxxxxxxx",  ["errLANG", "errLANG", "errLANG"]);
                this.m_Bank["xxxxxxxxxx",  ["errLANG", "errLANG", "errLANG"]);
                this.m_Bank["xxxxxxxxxx",  ["errLANG", "errLANG", "errLANG"]);
                this.m_Bank["xxxxxxxxxx",  ["errLANG", "errLANG", "errLANG"]);
                this.m_Bank["xxxxxxxxxx",  ["errLANG", "errLANG", "errLANG"]);
                this.m_Bank["xxxxxxxxxx",  ["errLANG", "errLANG", "errLANG"]);
                this.m_Bank["xxxxxxxxxx",  ["errLANG", "errLANG", "errLANG"]);
                this.m_Bank["xxxxxxxxxx",  ["errLANG", "errLANG", "errLANG"]);
                this.m_Bank["xxxxxxxxxx",  ["errLANG", "errLANG", "errLANG"]);
        */
        this.Add("cw_created1", ["Votre compte-eco a été créé ! Votre identifiant de compte est : ","Your wallet has been created!\n\nYour wallet ID is: ","¡Tu billetera ha sido creada!"]);
        this.Add("cw_created2", ["Vous pouvez l'utiliser pour recevoir ou envoyer des shards.","\n\nYou can use this ID to send money to your wallet. You can also use this ID to transfer money to other users.","errLANG"]);
        this.Add("cw_alreadyExists", ["Votre compte-eco existe déjà !","Your wallet already exists!","¡Tu billetera ya existe!"]);

        /*##################################   2022   #####################################*/


        //### PostInfos ###
        this.Add("postInfos_err1", ["Désolé, la valeure passée en paramètre n'est pas valide", "Sorry, the provided value is not valid. Try again with a different one.", "errLANG"])

        //### createAccount ###
        this.Add("ca_email", ["Veuillez renseigner votre adresse e-mail.", "Please tell us what e-mail adresse you are using.", "errLANG"])
        this.Add("ca_epicName", ["Veuillez renseigner votre nom Epic Games.", "Please tell us what is your Epic Games account name.", "errLANG"])
        this.Add("ca_igRank", ["Veuillez renseigner votre rang en jeu (Champion 1, 2, 3 - Diamant 1, 2, 3).", "Please tell us what is your current Rocket League rank.", "errLANG"])


        //### postInfos:Rules ###
        this.Add("postInfos_rule1", ["##RULES##", "Use common sense. We do not allow toxicity, harassment, impersonation of other members. If you have issues with another member of the discord server, take it to DM's. Ensure that chat is as inclusive as possible. Do not spam messages or mentions. Respect everyone's choice regarding mentions.",""]);
        this.Add("postInfos_rule2", ["##RULES##", "Use the correct channels. Refer to channel's description. If you can't find the information you're looking for, tag the bot!",""]);
        this.Add("postInfos_rule3", ["##RULES##", "Your name must be mentionable, readable and appropriate. This means that your name should not contain only digital characters that cannot be easily typed, excessive use of symbols, or have a hateful meaning.",""]);
        this.Add("postInfos_rule4", ["##RULES##", "We adhere to Discord ToS. Make sure you are aware of what Discord's ToS includes by reading them: https://discord.com/terms. (Using Better Discord goes against Discord's ToS.)",""]);
        this.Add("postInfos_rule5", ["##RULES##", "Do not link or discuss NSFW or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content.",""]);
        this.Add("postInfos_rule6", ["##RULES##", "Avoid URL shorteners and risky links. Please, make sure that every link you send is easy to read and that people know what to expect by clicking it.",""]);
        this.Add("postInfos_rule7", ["##RULES##", "Please also note: All of the above also applies to voice chats. If you decide to go against our rules in DMs, this decision must come from everyone involved, in a mutual agreement. This means you should not break any server rules in DM's, expect if both parties agree to this.",""]);
        this.Add("postInfos_rule8", ["##RULES##", "Although you have to respect those rules, keep in mind that they are enforced according to their spirit and not their words. Although we may still take action if something you do is not explicitly wrote in the rules, this also means that in some situations, we may not strictly apply the rules.", "errLANG"]);
        this.Add("postInfos_rule9", ["##RULES##", "Do not fill empty or inapropriate application forms in our recruitment process. Doing so will result in a ban.", "errLANG"]);
        

        //### postInfos:Social ###
        this.Add("postInfos_social", ["##SOCIAL##", "You'll find all our social media accounts below. Most of our content happens here on discord or on our website.\n\n\ Joining our social media and sharing our content is completely optional but we appreciate any kind help throughout the development of the platform.\n\n If you would like to know more about our projects and developpement please visit our website by clicking the button.", "errLANG"])

        //### postInfos:Application ###
        this.Add("postInfos_application", ["##APPLICATION##", "Thank you for your interest in applying for Sypher. Before applying for any position, please make sure you understood its mission and what it implies, everything you need to know about your mission and recruitment standards can be found on our website. \n\n\
        \
        Once you found the role that fits you best, click the 'Apply' button and answer a few questions. Your application will then be reviewed, if it is accepted, you will be recontacted to get further information about you as an individual, your project and other previous experience. If everything goes well, then you're in! Congratulations! Apply now and help us build a new vision.", "errLANG"])


        //### postInfos:Welcome ###
        this.Add("postInfos_welcome", ["##WELCOME##", "Heyaa! This is a community discord channel for the rocket league & coaching platform \"Sypher\". Feel free to hand around, share and discuss anything you want. More information about our project can be found on our website or by clicking the buttons below! Enjoy your stay!"]);

    }

    Add(text_id, list) {
        this.m_Bank[text_id.toLowerCase()] = list;
    }

    GetText(text_id) {
        let id = text_id.toLowerCase();
        if (id in this.m_Bank)
            return this.m_Bank[id][this.m_CurrLanguage];

        return `Text ID "${text_id}" is missing`;
    }

}
