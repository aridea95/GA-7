const armyModule = require("./army.js");
const DemonsSlayer = armyModule.DemonsSlayer;
const Hashira = armyModule.Hashira;
const SwordSmiths = armyModule.SwordSmiths;
const Barrack = require("./barrack.js");

let slayer1 = new DemonsSlayer ();
console.log('<=====\\= Demons Slayer ==//=====>');

slayer1.name = 'Tanjiro Kamado';
slayer1.techniques('Hi No Kokyu')
slayer1.talkDemonsSlayer();
slayer1.training(10);
slayer1.talkDemonsSlayer();
console.log('');
console.log('');

let slayer2 = new DemonsSlayer();
slayer2.name = 'Zenitsu Agasuma';
slayer2.techniques('Kaminari No Kokyu')
slayer2.talkDemonsSlayer();
slayer2.training(8);
slayer2.talkDemonsSlayer();
console.log('');
console.log('');

let slayer3 = new DemonsSlayer();
slayer3.name = 'Inosuke Hashibira';
slayer3.techniques('Kemono No Kokyu')
slayer3.talkDemonsSlayer();
slayer3.training(8);
slayer3.talkDemonsSlayer();
console.log('');
console.log('');

let hashira1 = new Hashira ();
console.log('<=====||== Hashira ==||=====>');
hashira1.name = 'Giyu Tomioka';
hashira1.techniques('Mizu No Kokyu');
hashira1.talkHashira ();
hashira1.training (11);
hashira1.talkHashira();
console.log('');
console.log('');

let SwordSmiths1 = new SwordSmiths ();
console.log('||=== Sword Smiths ===||');
SwordSmiths1.name ='Hotaru Hanagezuka';
SwordSmiths1.techniques('Sword Reforging');
SwordSmiths1.talkSwordSmiths();
SwordSmiths1.training(10);
SwordSmiths1.talkSwordSmiths();
console.log('')
let Dojo = new Barrack();
Dojo.recruit(slayer1);
Dojo.recruit(slayer2);
Dojo.recruit(slayer3);
Dojo.recruit(hashira1);
Dojo.recruit(SwordSmiths1);

Dojo.groupcorp();
Dojo.summon();
console.log('');
Dojo.disband(SwordSmiths1);
Dojo.summon();