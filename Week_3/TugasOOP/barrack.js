class Barrack {
    constructor(slots,corps){
        this.slots = slots || [];
        this.group = corps;
    }
    groupcorp (){
        let tempcorp = {
            DemonsSlayer : [

            ],
            Hashira : [

            ],
            SwordSmiths : [

            ],
        };
        this.slots.forEach(el => {
            if (el.type === 'Demons Slayer'){
                tempcorp.DemonsSlayer.push(el);
            }else if (el.type === 'Hashira'){
                tempcorp.Hashira.push(el);
            }else{
                tempcorp.SwordSmiths.push(el);
            }
        })
        this.group = tempcorp;
        console.log(this.group);
    }
    recruit(army){
        this.slots.push(army);
    }
    
    summon(){
        console.log('<======||= Demons Corp =||======>');

        console.log(`Type : Demons Slayer, Total : ${this.group.DemonsSlayer.length} corps member`);
        this.group.DemonsSlayer.forEach(el =>{
            console.log(`Name : ${el.name}, Level : ${el.level}`);
        })

        console.log(`Type : Hashira, Total : ${this.group.Hashira.length} corps member`);
        this.group.Hashira.forEach(el =>{
            console.log(`Name : ${el.name}, Level : ${el.level}`);
        })

        console.log(`Type : Sword Smith, Total : ${this.group.SwordSmiths.length} corps member`);
        this.group.SwordSmiths.forEach(el =>{
            console.log(`Name : ${el.name}, Level : ${el.level}`);
        })
        
        console.log(`Demons Slayer Corps has ${this.slots.length} member in Dojo`);
    }
    disband(name){
        for(let i=0; i<this.slots.length; i++){
            if(this.slots[i] === name){
                this.slots.splice(i,1);
            }
        }

    }
}

module.exports = Barrack;