class army {
    constructor (name, type, level, technique){
        this.name = name;
        this.type = type;
        this.level = level || 0;
        this.technique = [];
        // this.techniqueLevel = skillLevel ||0;
    }
//Method
    talk (){
        console.log (`"I'm ${this.name}, I'm a ${this.type}, i'm at level ${this.level} now and i'm ${this.technique} technique user"`);
    }
    training (learn){
        let maxLeveling = 25;
        for (let i=0; i<learn;i++){
            if(this.level<maxLeveling){
                this.level += 1;
                console.log (`Your training make a result, you're level up to level ${this.level}`);
            }else{
                console.log (`"You have reaching the max level !!, now you are the master of ${this.technique} technique"`);
            }

        }
    }
    techniques(skills){
        this.technique.push(skills);
    }
    removeTechnique (skills){
        let learnskill = [];
        for (i=0; i<learnskill.length; i++){
            if(this.technique[i] !== skills){
                remove.push(this.technique[i]);
            }else {
                continue;
            }
        }
    }
    // skillLevel(leveling){
    //     let upgradeSkill = 10;
    //     for (i=0;i<upgradeSkill.length;i++){
    //         if (this.techniqueLevel[i] !== leveling){

    //         }
    //     }
    // }
}
class DemonsSlayer extends army {
    constructor (name){
        super (name,`Demons Slayer`,1);
        // this.name = 'Tanjiro Kamado';
        // this.type = 'Demons Slayer';
        // this.level = 1;
        // this.technique = 'Hi No Kokyu (Sun Breathing)';
    }
    talkDemonsSlayer (){
        super.talk();
            console.log("`I'm joining to Demons Slayer Army, i'll protect human and eradicate the demons`");
    }
}
class Hashira extends army {
    constructor (name){
        super (name, `Hashira`, 15);
        this.name = name;
        // this.name = 'Giyu Tomioka';
        // this.type = 'Hashira of Demons Slayer army';
        // this.level = 15;
        // this.technique = 'Mizu No Kokyu'
    }
    talkHashira (){
        super.talk();
            console.log("`As hashira, i will protect human and my nakama in Demons Slayer army, and i will eradicate demons who hunting human for their food`");
    }
}
class SwordSmiths extends army {
    constructor (name){
        super (name, 'Sword Smith', 1);
        this.name = name;
        // this.name = 'Hotaru Hanagezuka';
        // this.type = 'Sword Smith for Demon Slayer';
        // this.level = 1;
        // this.technique = 'Make Sword';
    }
    talkSwordSmiths (){
        super.talk();
        console.log("`I'm a Sword Smiths, i will make the strongest sword for the Demons Slayer`");
    }
}

module.exports = {
    DemonsSlayer : DemonsSlayer,
    Hashira : Hashira,
    SwordSmiths : SwordSmiths
}
