////////// Ellersen Bozulur \\\\\\\\\\
const { AoiClient } = require("aoi.js");
const bot = new AoiClient({
    token: process.env.token, // Token Güvenliğin Açısından Env Tarafından Korunmakta Dostum.//
    prefix: "Prefixiniz",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"]
});
////////// Elleme Buraya \\\\\\\\\\

////////// Ping Pong \\\\\\\\\\
// Ping Command Example
bot.command({
    name: "ping",
    code: `Pong! $pingms`
});
////////// Ping Pong \\\\\\\\\\


////////// Slash Komutlu Ping  \\\\\\\\\\


// Slash Komutu Kurmak İçin Eval İle Bu Kodu Kullan $createApplicationCommand[$guildID;ping;Pong!;true;slash]
//

bot.interactionCommand({
    name: "ping",
    prototype: "slash",
    code: `$interactionReply[Pong! $pingms;;;;everyone;false]`
});

////////// Slash Komutlu Ping  \\\\\\\\\\


