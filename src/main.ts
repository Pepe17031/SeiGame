/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;
let currentPopup2: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    //-------------------------------------------------------------------------------------------------------------------------------

    //NPC ROBOT
    WA.room.onEnterLayer('npc/npcrobotzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcrobotpopup","IRON SAMSON: Excellent! Did you complete the task? I don't know, and I don't care. Now, enter your answers into the terminal, and I'll see if you did the task right. Hope you remember how to use a keyboard, ha-ha-ha!",[]);
        var mysound = WA.sound.loadSound("sound/npc/robot.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npcrobotzone').subscribe(closePopup)
    //NPC ROBOT

    //NPC PIRATE
    WA.room.onEnterLayer('npc/npcpiratezone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcpiratepopup","CAPTAIN BOTTLE-TOP: Welcome aboard, matey! Our ship crashed on this planet, and we need to find all the fragments of the disk with pieces of the encryption key to restart the ship's systems and return home. Each fragment contains a part of the key necessary to start up systems like engines and fire-extinguishing system.",[]);
        var mysound = WA.sound.loadSound("sound/npc/pirate.wav");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npcpiratezone').subscribe(closePopup)
    //NPC PIRATE

    //NPC ADMIN
    WA.room.onEnterLayer('npc/npcadminzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcadmin1popup","BoJack: Did you notice the violation? Lets ban him?",[]);
        currentPopup2 = WA.ui.openPopup("npcadmin2popup","Zaragossa: I'll keep an eye on him from an ambush...",[]);
        var mysound = WA.sound.loadSound("sound/npc/horse.mp3");
        mysound.play(config);
        var mysound2 = WA.sound.loadSound("sound/npc/mouse.mp3");
        mysound2.play(config);
    })
    WA.room.onLeaveLayer('npc/npcadminzone').subscribe(closePopup)
    WA.room.onLeaveLayer('npc/npcadminzone').subscribe(closePopup2)
    //NPC ADMINE

    //NPC PIDGIN
    WA.room.onEnterLayer('npc/npcpidginzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcpidginpopup","FLIPPER: Hello! I find myself in a strange place surrounded by ancient Egyptian pyramids, and I feel that there are secrets hidden behind them that no one has yet uncovered. Can you help me find the answer to what lies behind these images?",[]);
        var mysound = WA.sound.loadSound("sound/npc/pidgin.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npcpidginzone').subscribe(closePopup)
    //NPC PIDGIN

    //NPC FROG
    WA.room.onEnterLayer('npc/npcfrogzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcfrogpopup","Oneloozer: Hey, help me out here! The horse and quokka are making me spin this wheel to generate energy for the server.",[]);
        var mysound = WA.sound.loadSound("sound/npc/frog.mp3");
        mysound.play(config);
    })
    WA.room.onLeaveLayer('npc/npcfrogzone').subscribe(closePopup)
    //NPC FROG


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

//NPC SOUND
var config = {
    volume : 1,
    loop : false,
    rate : 1,
    detune : 1,
    delay : 0,
    seek : 0,
    mute : false
};

export {};
