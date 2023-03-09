/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;
let currentPopup2: any = undefined;
let triggerMessage: any = undefined;
let sound: any = undefined;
let playerX = 0;
let playerY = 0;
let nav: any = undefined;
let fearX = 0;
let fearY = 0;
const mobile: boolean = /Mobi|Android/i.test(navigator.userAgent);

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    //-------------------------------------------------------------------------------------------------------------------------------

    WA.room.hideLayer("monsterlab");

    //FIRE
    WA.room.area.onEnter('sfire').subscribe(() => {
    sound = WA.sound.loadSound("sound/fire2.wav").play(config);
    })

    WA.room.area.onLeave('sfire').subscribe(() => {
        stopSound();
    })
    //FIRE 

    //NPC PIRATE
    WA.room.area.onEnter('npcpiratezone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcpiratepopup","CAPTAIN BOTTLE-TOP: Welcome aboard, matey! Our ship crashed on this planet, and we need to find all the fragments of the disk with pieces of the encryption key to restart the ship's systems and return home. Each fragment contains a part of the key necessary to start up systems like engines and fire-extinguishing system.",[]);
        var mysound = WA.sound.loadSound("sound/npc/pirate.wav");
        mysound.play(config);
    })
    WA.room.area.onLeave('npcpiratezone').subscribe(closePopup)
    //NPC PIRATE

    //NPC ROBOT
    WA.room.area.onEnter('npcrobotzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcrobotpopup","IRON SAMSON: Excellent! Did you complete the task? I don't know, and I don't care. Now, enter your answers into the terminal, and I'll see if you did the task right. Hope you remember how to use a keyboard, ha-ha-ha!",[]);
        var mysound = WA.sound.loadSound("sound/npc/robot.mp3");
        mysound.play(config);
    })
    WA.room.area.onLeave('npcrobotzone').subscribe(closePopup)
    //NPC ROBOT

    //NPC ADMIN
    WA.room.area.onEnter('npcadminzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcadmin1popup","BoJack: Did you notice the violation? Lets ban him?",[]);
        currentPopup2 = WA.ui.openPopup("npcadmin2popup","Zaragossa: I'll keep an eye on him from an ambush...",[]);
        var mysound = WA.sound.loadSound("sound/npc/horse.mp3");
        mysound.play(config);
        var mysound2 = WA.sound.loadSound("sound/npc/mouse.mp3");
        mysound2.play(config);
    })
    WA.room.area.onLeave('npcadminzone').subscribe(closePopup)
    WA.room.area.onLeave('npcadminzone').subscribe(closePopup2)
    //NPC ADMINE

    //NPC PIDGIN
    WA.room.area.onEnter('npcpidginzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcpidginpopup","FLIPPER: Hello! I find myself in a strange place surrounded by ancient Egyptian pyramids, and I feel that there are secrets hidden behind them that no one has yet uncovered. Can you help me find the answer to what lies behind these images?",[]);
        var mysound = WA.sound.loadSound("sound/npc/pidgin.mp3");
        mysound.play(config);
    })
    WA.room.area.onLeave('npcpidginzone').subscribe(closePopup)
    //NPC PIDGIN

    //NPC FROG
    WA.room.area.onEnter('npcfrogzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcfrogpopup","FROG: Hey, help me out here! The horse and quokka are making me spin this wheel to generate energy for the server.",[]);
        var mysound = WA.sound.loadSound("sound/npc/frog.mp3");
        mysound.play(config);
    })
    WA.room.area.onLeave('npcfrogzone').subscribe(closePopup)
    //NPC FROG

    //NPC PANDA
    WA.room.area.onEnter('npcpanda').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcpandapopup","Friend, don't ask me about Sei, better find me a bamboo.",[]);
        var mysound = WA.sound.loadSound("sound/npc/panda.mp3");
        mysound.play(config);
    })
    WA.room.area.onLeave('npcpanda').subscribe(closePopup)
    //NPC PANDA

    //NPC JAY
    WA.room.area.onEnter('npcjay').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcjaypopup","Are you hungry? Sei no more - your food is not here!",[]);
        var mysound = WA.sound.loadSound("sound/npc/meat.mp3");
        mysound.play(config);
    })
    WA.room.area.onLeave('npcjay').subscribe(closePopup)
    //NPC JAY

    //NPC BUBBLE
    WA.room.area.onEnter('bubble').subscribe(() => {
        var mysound = WA.sound.loadSound("sound/npc/bubble.mp3");
        mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
          });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {

                var mysound = WA.sound.loadSound("sound/scan.wav");
                mysound.play(config);

                console.log(playerX, playerY)

                WA.room.website.create({
                    name: 'bubblerweb',
                    url: "https://media.discordapp.net/attachments/1081590822379720724/1081947537352699914/bubblers.png?width=596&height=675",
                    position: {
                      x: playerX + 100,
                      y: playerY - 335,
                      width: 596,
                      height: 675
                    },
                    allowApi: true
                  });
            }
        });

    })
    WA.room.area.onLeave('bubble').subscribe(() => {
        closeTriger();
        WA.room.website.delete('bubblerweb');
    })
    //NPC BUBBLE

    //WOODEN STATUE
    WA.room.area.onEnter('woodenstatue').subscribe(() => {
        //var mysound = WA.sound.loadSound("sound/npc/bubble.mp3");
        //mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {
                sound = WA.sound.loadSound("sound/scan.wav").play(config);
                //console.log(playerX, playerY);
                WA.room.website.create({
                    name: "coWeb",
                    url: "https://media.discordapp.net/attachments/1081590822379720724/1081981852493025300/woodenstatue.png?width=596&height=675",
                    position: {
                        x: playerX + 100,
                        y: playerY - 335,
                        width: 596,
                        height: 675
                    },
                    allowApi: true
                    });
            }
        });

    })
    WA.room.area.onLeave('woodenstatue').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
    })
    //WOODEN STATUE

    //SHARK
    WA.room.area.onEnter('shark').subscribe(() => {
        //var mysound = WA.sound.loadSound("sound/npc/bubble.mp3");
        //mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {
                sound = WA.sound.loadSound("sound/scan.wav").play(config);
                //console.log(playerX, playerY);
                WA.room.website.create({
                    name: "coWeb",
                    url: "https://media.discordapp.net/attachments/1081590822379720724/1081947537843425350/sandshark.png?width=596&height=675",
                    position: {
                        x: playerX + 100,
                        y: playerY - 335,
                        width: 596,
                        height: 675
                    },
                    allowApi: true
                    });
            }
        });

    })
    WA.room.area.onLeave('shark').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
    })
    //SHARK

    //CRYSTAL
    WA.room.area.onEnter('crystal').subscribe(() => {
        //var mysound = WA.sound.loadSound("sound/npc/bubble.mp3");
        //mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {
                sound = WA.sound.loadSound("sound/scan.wav").play(config);
                //console.log(playerX, playerY);
                WA.room.website.create({
                    name: "coWeb",
                    url: "https://media.discordapp.net/attachments/1081590822379720724/1081992872443789373/crystal.png?width=596&height=675",
                    position: {
                        x: playerX + 100,
                        y: playerY - 335,
                        width: 596,
                        height: 675
                    },
                    allowApi: true
                    });
            }
        });

    })
    WA.room.area.onLeave('crystal').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
    })
    //CRYSTAL

    //TWISTEDTREE
    WA.room.area.onEnter('twistedtree').subscribe(() => {
        //var mysound = WA.sound.loadSound("sound/npc/bubble.mp3");
        //mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {
                sound = WA.sound.loadSound("sound/scan.wav").play(config);
                //console.log(playerX, playerY);
                WA.room.website.create({
                    name: "coWeb",
                    url: "https://media.discordapp.net/attachments/1081590822379720724/1081995416826040361/tree.png?width=596&height=675",
                    position: {
                        x: playerX + 100,
                        y: playerY - 335,
                        width: 596,
                        height: 675
                    },
                    allowApi: true
                    });
            }
        });

    })
    WA.room.area.onLeave('twistedtree').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
    })
    //TWISTEDTREE

    //BUSHES
    WA.room.area.onEnter('bushes').subscribe(() => {
        //var mysound = WA.sound.loadSound("sound/npc/bubble.mp3");
        //mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {
                sound = WA.sound.loadSound("sound/scan.wav").play(config);
                //console.log(playerX, playerY);
                WA.room.website.create({
                    name: "coWeb",
                    url: "https://media.discordapp.net/attachments/1081590822379720724/1082000121409052763/bushes.png?width=596&height=675",
                    position: {
                        x: playerX + 100,
                        y: playerY - 335,
                        width: 596,
                        height: 675
                    },
                    allowApi: true
                    });
            }
        });

    })
    WA.room.area.onLeave('bushes').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
    })
    //BUSHES

    //PIRAMIDMAIN
    WA.room.area.onEnter('piramidmain').subscribe(() => {
        //var mysound = WA.sound.loadSound("sound/npc/bubble.mp3");
        //mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {
                sound = WA.sound.loadSound("sound/scan.wav").play(config);
                //console.log(playerX, playerY);
                WA.room.website.create({
                    name: "coWeb",
                    url: "https://media.discordapp.net/attachments/1080545432163340309/1081654218450010243/e2b43b93f01f5797.png?width=911&height=676",
                    position: {
                        x: playerX + 100,
                        y: playerY - 335,
                        width: 911,
                        height: 676
                    },
                    allowApi: true
                    });
            }
        });

    })
    WA.room.area.onLeave('piramidmain').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
    })
    //PIRAMIDMAIN   


    //PIRAMID1
    WA.room.area.onEnter('piramid1').subscribe(() => {
        //var mysound = WA.sound.loadSound("sound/npc/bubble.mp3");
        //mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {
                sound = WA.sound.loadSound("sound/scan.wav").play(config);
                //console.log(playerX, playerY);
                WA.room.website.create({
                    name: "coWeb",
                    url: "https://media.discordapp.net/attachments/1080545432163340309/1081655031121592320/2.png?width=911&height=676",
                    position: {
                        x: playerX + 100,
                        y: playerY - 335,
                        width: 911,
                        height: 676
                    },
                    allowApi: true
                    });
            }
        });

    })
    WA.room.area.onLeave('piramid1').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
    })
    //PIRAMID1   


    //PIRAMID2
    WA.room.area.onEnter('piramid2').subscribe(() => {
        //var mysound = WA.sound.loadSound("sound/npc/bubble.mp3");
        //mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {
                sound = WA.sound.loadSound("sound/scan.wav").play(config);
                //console.log(playerX, playerY);
                WA.room.website.create({
                    name: "coWeb",
                    url: "https://media.discordapp.net/attachments/1080545432163340309/1081655039891865660/3.png?width=911&height=676",
                    position: {
                        x: playerX + 100,
                        y: playerY - 335,
                        width: 911,
                        height: 676
                    },
                    allowApi: true
                    });
            }
        });

    })
    WA.room.area.onLeave('piramid2').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
    })
    //PIRAMID2

    //PIRAMID3
    WA.room.area.onEnter('piramid3').subscribe(() => {
        //var mysound = WA.sound.loadSound("sound/npc/bubble.mp3");
        //mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {
                sound = WA.sound.loadSound("sound/scan.wav").play(config);
                //console.log(playerX, playerY);
                WA.room.website.create({
                    name: "coWeb",
                    url: "https://media.discordapp.net/attachments/1080545432163340309/1081655077820965006/4.png?width=911&height=676",
                    position: {
                        x: playerX + 100,
                        y: playerY - 335,
                        width: 911,
                        height: 676
                    },
                    allowApi: true
                    });
            }
        });

    })
    WA.room.area.onLeave('piramid3').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
    })
    //PIRAMID3

    //PIRAMID4
    WA.room.area.onEnter('piramid4').subscribe(() => {
        //var mysound = WA.sound.loadSound("sound/npc/bubble.mp3");
        //mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {
                sound = WA.sound.loadSound("sound/scan.wav").play(config);
                //console.log(playerX, playerY);
                WA.room.website.create({
                    name: "coWeb",
                    url: "https://media.discordapp.net/attachments/1080545432163340309/1081655106652614746/5.png?width=911&height=676",
                    position: {
                        x: playerX + 100,
                        y: playerY - 335,
                        width: 911,
                        height: 676
                    },
                    allowApi: true
                    });
            }
        });

    })
    WA.room.area.onLeave('piramid4').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
    })
    //PIRAMID4 
    
    //BZZZ
    WA.room.area.onEnter('bzzz').subscribe(() => {
        var mysound = WA.sound.loadSound("sound/npc/bzzz.mp3");
        mysound.play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {

                if (mobile === false) {
                    sound = WA.sound.loadSound("sound/scan.wav").play(config);
                    WA.room.website.create({
                        name: "coWeb",
                        url: "https://media.discordapp.net/attachments/1080545432163340309/1081655106652614746/5.png?width=911&height=676",
                        position: {
                            x: playerX + 100,
                            y: playerY - 335,
                            width: 911,
                            height: 676
                        },
                        allowApi: true
                    });
                } else {

                    WA.nav.openTab('https://media.discordapp.net/attachments/1080545432163340309/1081655106652614746/5.png?width=911&height=676');

                }

            }
        });

    })
    WA.room.area.onLeave('bzzz').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
        stopSound();
        if (mobile === true) {
            console.log('true');
            } else {
            console.log('false');
        }
    })
    //BZZZ

    WA.player.onPlayerMove((moveEvent) => {
        playerX = moveEvent.x;
        playerY = moveEvent.y;
        nav = moveEvent.direction;
    });

    // MONSTR
    WA.room.area.onEnter('monster').subscribe(() => {


        console.log(playerX, playerY, nav)

        WA.controls.disablePlayerControls();
        WA.player.setOutlineColor(255, 0, 0);

        if (nav === 'left') {
            console.log('nav is left');
            fearX = playerX + 400;
            fearY = playerY;
            } else {

                if (nav === 'right') {
                    fearX = playerX - 400
                    fearY = playerY;
                    console.log('right');
                    } else {

                        if (nav === 'up') {
                            fearY = playerY + 400
                            fearX = playerX;
                            console.log('up');
                            } else {

                                if (nav === 'down') {
                                    fearY = playerY - 400
                                    fearX = playerX;
                                    console.log('down');
                                    } else {
                                    console.log('error');
                                }
                        }
                }
        }

        WA.room.showLayer("monsterlab");

        sound = WA.sound.loadSound("sound/lab/fear.wav").play(config);
        sound = WA.sound.loadSound("sound/lab/monster.wav").play(config);
        setTimeout(() => {
            // later
            sound = WA.sound.loadSound("sound/lab/scream.wav").play(config);
        }, 200)

        WA.player.moveTo(fearX, fearY, 20);
        

        setTimeout(() => {
            // later
            WA.controls.restorePlayerControls();
            WA.player.removeOutlineColor();
            WA.room.hideLayer("monsterlab");
        }, 2000)

    })

    WA.room.area.onLeave('monster').subscribe(() => {

    })
    //  MONSTR 
    
    //TELEPORT
    WA.room.area.onEnter('teleport').subscribe(() => {
        sound = WA.sound.loadSound("sound/lab/teleport.wav").play(config);
        WA.nav.goToRoom("https://play.workadventu.re/_/global/pepe17031.github.io/SeiGame/maps/map.tmj#start")
    })
    //TELEPORT

    //LABWORD
    WA.room.area.onEnter('labword').subscribe(() => {
        sound = WA.sound.loadSound("sound/lab/win.mp3").play(config);
        WA.player.onPlayerMove((moveEvent) => {
            playerX = moveEvent.x;
            playerY = moveEvent.y;
            });

        triggerMessage = WA.ui.displayActionMessage({
            message: "Press the 'SPACE' to scan",
            callback: () => {
                sound = WA.sound.loadSound("sound/scan.wav").play(config);
                //console.log(playerX, playerY);
                WA.room.website.create({
                    name: "coWeb",
                    url: "https://media.discordapp.net/attachments/1080545122669834332/1083019062185041971/2_2.png?width=911&height=676",
                    position: {
                        x: playerX + 100,
                        y: playerY - 335,
                        width: 911,
                        height: 676
                    },
                    allowApi: true
                    });
            }
        });

    })
    WA.room.area.onLeave('labword').subscribe(() => {
        closeTriger();
        WA.room.website.delete("coWeb");
    })
    //LABWORD 

    //NPC LABFROG
    WA.room.area.onEnter('labfrogzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("labfrog","Hey buddy. I was running from the moderators and got lost. Something weird is going on here... But you know, I like it, don't tell anyone you saw me.",[]);
        var mysound = WA.sound.loadSound("sound/lab/frog.wav");
        mysound.play(config);
    })
    WA.room.area.onLeave('labfrogzone').subscribe(closePopup)
    //NPC LABFROG
    
    //NPC LABBOBR
    WA.room.area.onEnter('labbobrzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("labbobr","TEXT B",[]);
        var mysound = WA.sound.loadSound("sound/lab/bobr.mp3");
        mysound.play(config);
    })
    WA.room.area.onLeave('labbobrzone').subscribe(closePopup)
    //NPC LABBOBR

    //------------------------------------------------------------------------------------------------------------------------------
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

function closePopup2(){
    if (currentPopup2 !== undefined) {
        currentPopup2.close();
        currentPopup2 = undefined;
    }
}

function closeTriger(){
    if (triggerMessage !== undefined) {
        triggerMessage.remove();
        triggerMessage = undefined;
    }
}

function stopSound(){
    if (sound !== undefined) {
        WA.sound.loadSound(sound).stop();
        sound = undefined;
    }
}


//NPC SOUND
var config = {
    volume : 0.4,
    loop : false,
    rate : 1,
    detune : 1,
    delay : 0,
    seek : 0,
    mute : false
};

      
export {};
