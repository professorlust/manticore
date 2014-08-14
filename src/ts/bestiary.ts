module Manticore.Bestiary {
    var rawdata = [["Giant ant",0,"normal","troop",["animal"]],
                   
                   ["Decrepit skeleton",1,"normal","mook",["skeleton","undead"]],
                   ["Dire rat",1,"normal","mook",["animal","dire"]],
                   ["Giant scorpion",1,"normal","wrecker",["animal"]],
                   ["Goblin grunt",1,"normal","troop",["goblin"]],
                   ["Goblin scum",1,"normal","mook",["goblin"]],
                   ["Human thug",1,"normal","troop",["human"]],
                   ["Kobold archer",1,"normal","mook",["kobold"]],
                   ["Kobold warrior",1,"normal","troop",["kobold"]],
                   ["Orc warrior",1,"normal","troop",["orc"]],
                   ["Skeletal hound",1,"normal","blocker",["skeleton","undead"]],
                   ["Skeletal archer",1,"normal","archer",["skeleton","undead"]],
                   ["Wolf",1,"normal","troop",["animal"]],
                   ["Zombie shuffler",1,"normal","mook",["zombie","undead"]],

                   ["Ankheg",2,"large","troop",["animal"]],
                   ["Bear",2,"normal","troop",["animal"]],
                   ["Giant web spider",2,"large","blocker",["animal"]],
                   ["Goblin shaman",2,"normal","caster",["goblin"]],
                   ["Hobgoblin warrior",2,"normal","troop",["goblin"]],
                   ["Human zombie",2,"normal","troop",["zombie","undead"]],
                   ["Hunting spider",2,"normal","wrecker",["animal"]],
                   ["Kobold hero",2,"normal","leader",["kobold"]],
                   ["Lizardman savage",2,"normal","wrecker",["lizardman"]],
                   ["Medium white dragon",2,"normal","troop",["white","dragon"]],
                   ["Newly-risen ghoul",2,"normal","mook",["ghoul","undead"]],
                   ["Orc berserker",2,"normal","troop",["orc"]],
                   ["Orc shaman",2,"normal","leader",["orc"]],
                   ["Skeletal warrior",2,"normal","troop",["skeleton","undead"]],
                   ["Trog",2,"normal","spoiler",["troglodyte"]],

                   ["Bugbear",3,"normal","troop",["goblin"]],
                   ["Dire wolf",3,"large","troop",["animal","dire"]],
                   ["Dretch",3,"normal","mook",["demon"]],
                   ["Ghoul",3,"normal","spoiler",["ghoul","undead"]],
                   ["Gnoll ranger",3,"normal","archer",["gnoll"]],
                   ["Gnoll savage",3,"normal","troop",["gnoll"]],
                   ["Hell hound",3,"normal","wrecker",["beast"]],
                   ["Hungry star",3,"normal","wrecker",["abberation"]],
                   ["Imp",3,"normal","spoiler",["demon"]],
                   ["Medium black dragon",3,"normal","wrecker",["black","dragon"]],
                   ["Ochre jelly",3,"large","wrecker",["ooze"]],
                   ["Ogre",3,"large","troop",["giant"]],
                   ["Otyugh",3,"large","blocker",["abberation"]],
                   ["Trog chanter",3,"normal","leader",["troglodyte"]],

                   ["Blackamber skeletal legionnaire",4,"normal","troop",["skeleton","undead"]],
                   ["Derro maniac",4,"normal","troop",["dwarf","derro"]],
                   ["Derro sage",4,"normal","caster",["dwarf","derro"]],
                   ["Despoiler",4,"normal","caster",["demon"]],
                   ["Dire bear",4,"large","troop",["dire","beast"]],
                   ["Flesh golem",4,"large","blocker",["golem","construct"]],
                   ["Gnoll war leader",4,"normal","leader",["gnoll"]],
                   ["Half-orc legionnaire",4,"normal","troop",["half-orc","humanoid"]],
                   ["Harpy",4,"normal","spoiler",["humanoid"]],
                   ["Hobgoblin captain",4,"normal","leader",["goblin"]],
                   ["Large white dragon",4,"large","troop",["white","dragon"]],
                   ["Medium green dragon",4,"normal","spoiler",["green","dragon"]],
                   ["Minotaur",4,"large","troop",["humanoid"]],
                   ["Owl bear",4,"large","wrecker",["beast"]],
                   ["Troll",4,"large","troop",["giant"]],
                   ["Wight",4,"normal","spoiler",["undead"]],

                   ["Bulette",5,"large","wrecker",["beast"]],
                   ["Frenzy demon",5,"normal","wrecker",["demon"]],
                   ["Gargoyle",5,"normal","troop",["construct"]],
                   ["Gelatinous cube",5,"huge","blocker",["ooze"]],
                   ["Half-orc tribal champion",5,"normal","wrecker",["half-orc","humanoid"]],
                   ["Hobgoblin warmage",5,"normal","caster",["goblin"]],
                   ["Huge white dragon",5,"huge","troop",["white","dragon"]],
                   ["Hydra, 5 heads",5,"huge","wrecker",["hydra","beast"]],
                   ["Medium blue dragon",5,"normal","caster",["dragon","blue"]],
                   ["Sahuagin",5,"normal","wrecker",["humanoid"]],
                   ["Wraith",5,"normal","spoiler",["undead"]],
                   ["Wyvern",5,"large","wrecker",["beast"]],

                   ["Clay golem",6,"large","spoiler",["golem","construct"]],
                   ["Drider",6,"large","caster",["abberation"]],
                   ["Hill giant",6,"large","troop",["giant"]],
                   ["Large black dragon",6,"large","wrecker",["black","dragon"]],
                   ["Manticore",6,"large","archer",["beast"]],
                   ["Medium red dragon",6,"normal","wrecker",["dragon","red"]],
                   ["Medusa",6,"large","wrecker",["humanoid"]],
                   ["Vampire spawn",6,"normal","spoiler",["vampire","undead"]],
                   ["Vrock",6,"normal","spoiler",["demon"]],

                   ["Frost giant",7,"large","spoiler",["giant"]],
                   ["Hezrou",7,"large","troop",["demon"]],
                   ["Hyrda, 7 heads",7,"huge","wrecker",["hydra","beast"]],
                   ["Large green dragon",7,"large","spoiler",["green","dragon"]],
                   ["Ogre mage",7,"large","caster",["giant"]],
                   ["Ogre rager",7,"normal","mook",["giant"]],
                   ["Phase spider",7,"large","spoiler",["beast"]],

                   ["Fire giant",8,"large","wrecker",["giant"]],
                   ["Glabrezou",8,"large","caster",["demon"]],
                   ["Large blue dragon",8,"large","caster",["dragon","blue"]],
                   ["Rakshasa",8,"large","caster",["humanoid"]],
                   ["Stone giant",8,"large","troop",["giant"]],
                   ["Stone golem",8,"large","blocker",["golem","construct"]],

                   ["Black pudding",9,"huge","wrecker",["ooze"]],
                   ["Chimera",9,"large","wrecker",["beast"]],
                   ["Despoiler mage",9,"normal","wrecker",["demon"]],
                   ["Fire giant warlock",9,"large","leader",["giant"]],
                   ["Giant vrock",9,"large","spoiler",["demon"]],
                   ["Hooked demon",9,"normal","mook",["demon"]],
                   ["Huge black dragon",9,"huge","wrecker",["black","dragon"]],

                   ["Great fang cadre (orc)",10,"normal","mook",["orc"]],
                   ["Iron golem",10,"large","wrecker",["golem","construct"]],
                   ["Large red dragon",10,"large","wrecker",["dragon","red"]],
                   ["Nalfeshnee",10,"large","caster",["demon"]],
                   ["Spawn of the master (vampire)",10,"normal","mook",["vampire","undead"]],
                   ["Storm giant",10,"huge","archer",["giant"]],
                   ["Vampire",10,"normal","spoiler",["vampire","undead"]],

                   ["Huge green dragon",11,"huge","spoiler",["green","dragon"]],
                   ["Medusa noble",11,"large","caster",["humanoid"]],

                   ["Huge blue dragon",12,"huge","caster",["dragon","blue"]],
                   ["Marilith",12,"large","troop",["demon"]],

                   ["Balor",13,"large","wrecker",["demon"]]
                  ];



    class Monster {
        public scale:string;

        constructor(public name:string, 
                    public level:number, 
                    public size:string,
                    public kind:string,
                    public attributes: Array<string>) { 
            if (kind === "mook") {
                this.scale = "mook";
            }
            else {
                this.scale = size;
            }                
        }

        public toString() {
            return this.name + "(level " + this.level + " " + this.kind + ")";
        }
    }



    class PricedMonster extends Monster {
        constructor(public name:string,  
                    public level:number, 
                    public size:string,
                    public kind:string,
                    public attributes: Array<string>,
                    public price:number) { }
    }


    function sizeFactor(size) {
        return ({
            mook: 1,
            normal: 5,
            large: 10,
            huge: 15
        })[size];
    }


    function tierAdjustment(tier) {
        return ({
            adventurer: 0,
            champion: 1,
            epic: 2
        })[tier];
    }


    function levelToTier(level) {
        return [
            null, // adventurer level 0
            "adventurer",
            "adventurer",
            "adventurer",
            "adventurer",
            "champion",
            "champion",
            "champion",
            "epic",
            "epic",
            "epic"
        ][level];
    }


    function relativeCost(relativeLevel) {
        switch (relativeLevel) {
        case -2: return 2;
        case -1: return 3;
        case 0: return 4;
        case 1: return 6;
        case 2: return 8;
        case 3: return 12;
        case 4: return 16;
        default: return null;
        }
    }


    function adjustment(level:number):number {
        return tierAdjustment(adjustment(level));
    }
    

    function relativeLevel(partyLevel:number, monsterLevel:number):number {
        var monsterAdjusted = monsterLevel - adjustment(partyLevel);
        return monsterAdjusted - partyLevel;
    }


    function monsterFromRecord(record) {
        return new Monster(record[0], 
                           record[1],
                           record[2],
                           record[3],
                           record[4]);
    }


    function priceMonster(partyLevel:number, m:Monster) {
        var cost = relativeCost(relativeLevel(partyLevel, m.level));
        var multiplier = sizeFactor(m.scale);

        if (cost === null) return null;
        return new PricedMonster(m.name,
                                 m.level,
                                 m.size,
                                 m.kind,
                                 m.attributes,
                                 cost * multiplier);
    }

    function priceParty(characters:number) {
        return characters * sizeFactor("normal") * relativeCost(0);
    }
    
}