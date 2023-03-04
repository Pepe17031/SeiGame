/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    //-------------------------------------------------------------------------------------------------------------------------------

    //NPC ROBOT
    WA.room.onEnterLayer('npc/npcrobotzone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcrobotpopup","Вот и отлично! Задание выполнено? Не знаю, и мне все равно. Теперь, вводи ответы в терминал, и я узнаю правильно ли ты выполнил задание. Надеюсь, ты не забыл, как пользоваться клавиатурой, ха-ха-ха!",[]);
        var mysound = WA.sound.loadSound("sound/npc/robot.mp3");
        mysound.play(config);
        WA.chat.sendChatMessage("Вот и отлично! Задание выполнено? Не знаю, и мне все равно. Теперь, вводи ответы в терминал, и я узнаю правильно ли ты выполнил задание. Надеюсь, ты не забыл, как пользоваться клавиатурой, ха-ха-ха!", "Robot")
    })
    WA.room.onLeaveLayer('npc/npcrobotzone').subscribe(closePopup)
    //NPC ROBOT

    //NPC PIRATE
    WA.room.onEnterLayer('npc/npcpiratezone').subscribe(() => {
        currentPopup = WA.ui.openPopup("npcpiratepopup","Короче говоря, наш корабль потерпел крушение на неизвестной планете, и сейчас мы должны найти все осколки диска с частями ключа шифрования, чтобы перезапустить системы корабля и вернуться на свою родную планету. Каждый осколок диска содержит часть ключа, который необходим для запуска систем, таких как двигатели и система пожаротушения. Как только мы найдем все осколки и соберем весь ключ, мы сможем восстановить наш корабль и вырваться из этой душной пустыни.",[]);
        var mysound = WA.sound.loadSound("sound/npc/ahoy.mp3");
        mysound.play(config);
        WA.chat.sendChatMessage("Короче говоря, наш корабль потерпел крушение на неизвестной планете, и сейчас мы должны найти все осколки диска с частями ключа шифрования, чтобы перезапустить системы корабля и вернуться на свою родную планету. Каждый осколок диска содержит часть ключа, который необходим для запуска систем, таких как двигатели и система пожаротушения. Как только мы найдем все осколки и соберем весь ключ, мы сможем восстановить наш корабль и вырваться из этой душной пустыни.", "Pirate")
    })
    WA.room.onLeaveLayer('npc/npcpiratezone').subscribe(closePopup)
    //NPC PIRATE



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
