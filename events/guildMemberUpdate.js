
module.exports = {
	name: 'guildMemberUpdate',
	async execute(oldMember, newMember) {
        
        if (newMember.guild.id != "1167539351190769794") return;

        RoleSeparators = {
            "1168153889615396904" : ["Fondateur", "Officier", "Staff", "Architecte"],        // Staffing
            "1168173025770872933" : ["Dear Princess", "Mistress Dory", "Master Crazy Frog"], // Honorables
            "1168153344989208686" : ["Vétéran", "Membre", "Recrue", "Server Booster"],       // Membres
            "1170038497327972383" : ["Quixotic Gambler"],                                    // Tools
            "1168153401255788614" : ["Events monde vivant", "McM", "PvP", "Fractals",        // Activities
                                     "Missions d'attaque", "Contenu CM", "HT CM", "Raid",
                                     "Succès", "Puzzle de saut", "News"],                                 
        }

        let oldMemberRoleList = oldMember.roles.cache.map(role => role.name);
        let newMemberRoleList = newMember.roles.cache.map(role => role.name);

        // No role has been added or removed
        if (oldMemberRoleList.length == newMemberRoleList.length) return;


        // A role has been removed
        if (oldMemberRoleList.length > newMemberRoleList.length) {
            let removedRole = oldMemberRoleList.filter(x => !newMemberRoleList.includes(x));

            for (const [key, value] of Object.entries(RoleSeparators)) {
                if (value.includes(removedRole[0])) {
                    foundSeparator = newMember.guild.roles.cache.find(role => role.id === key);

                    // check if the user has any other role from the same separator
                    let hasOtherRole = false;

                    for (const value of RoleSeparators[foundSeparator.id]) {
                        if (newMember.roles.cache.some(role => role.name === value)) {
                            hasOtherRole = true;
                            break;
                        }
                    }
                    
                    if (!hasOtherRole) newMember.roles.remove(foundSeparator);
                }
            }
            return;
        }


        // A role has been added
        let newRole = newMemberRoleList.filter(x => !oldMemberRoleList.includes(x));

        if (newRole.length == 0) return;

        for (const [key, value] of Object.entries(RoleSeparators)) {
            if (value.includes(newRole[0])) {
                foundSeparator = newMember.guild.roles.cache.find(role => role.id === key);

                if(newMember.roles.cache.some(role => role.id === key)) return;

                newMember.roles.add(foundSeparator);
            }
        }

    }
}