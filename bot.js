// work tbh

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
let xp = require("./xp.json");
let oxp = require("./oxp.json");
let purple = 0xF291F9
const talkedRecently = new Set();

client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: client.users.size + " users. (y-help)", type: 3 } });
});

let prefix = "y-"

client.on('message', msg => {

let item = msg;
  
/*if (msg.content === prefix + "help") {
  const embed = new Discord.RichEmbed()
  .setColor(0xa7ffab)
  .setDescription("Woah! You somehow managed to make old man Esppresso give you a help manual!")
  .addField("General Cafe Commands", "• ;xp - Check your cafe's xp.\n• ;rent-cafe - Rent a cafe to earn some Espre-coins\n• ;cafe - Take a look at your current cafe's stats and how it looks.\n• ;buy - Take a look or buy products to boost your earnings!")
  .addField("Other Commands", "• ;invite - Invite old man Esppresso to a server.")
  msg.channel.send({embed});
}*/

/*if (msg.content.startsWith(prefix + "avatar")) {
  if (msg.mentions.users.size === 1) {
    const embed = new Discord.RichEmbed()
    .setColor(0x1F98b1)
    .addField(msg.mentions.members.first().user.username, "This is their avatar.")
    .setImage(msg.mentions.members.first().user.avatarURL)
    msg.channel.send({embed})
  } else if (msg.mentions.users.size === 0) {
    const embed = new Discord.RichEmbed()
    .setColor(0x1F98b1)
    .addField(msg.author.username, "This is your avatar.")
    .setImage(msg.author.avatarURL)
    msg.channel.send({embed})
  }
}*/
/*
let xpAdd = 13;
console.log(xpAdd);
let xpAd = 13;
console.log(xpAdd);
let xpRandom = 1000;
console.log(xpAdd);

if(!xp[item.author.id]){
  xp[item.author.id] = {
    xp: 0,
    level: 1,
    oxp: 0,
    cafe: 0,
    coins: 0,
    cpm: 15
};
}

let curxp = xp[item.author.id].xp;
let hiddenxp = xp[item.author.id].oxp;
let curlvl = xp[item.author.id].level;
let nxtLvl = xp[item.author.id].level * 120;
let dispLvl = xp[item.author.id].level + 1;
let curcoins = xp[item.author.id].coins;
let curcpm = xp[item.author.id].cpm;

if (xp[item.author.id].cafe !== 0) {
talkedRecently.add(item.author.id);
setTimeout(() => {
  // Removes the user from the set after 25 seconds
  xp[item.author.id].xp = curxp += xpAdd;
  xp[item.author.id].oxp = hiddenxp += xpAd;

  xp[item.author.id].coins = curcpm += curcoins;  

  talkedRecently.delete(item.author.id);
}, 25000);
}
/*if (msg.content === prefix + "daily") {
  talkedRecently.add(item.author.id).then(msg => {msg.reply("ok")})  
  setTimeout(() => {
    // Removes the user from the set after 25 seconds
   xp[item.author.id].xp = curxp += xpRandom;
   talkedRecently.delete(item.author.id);
  }, 86400000);
}

if (nxtLvl < xp[item.author.id].oxp) {
  xp[item.author.id].oxp -= hiddenxp;

  xp[item.author.id].level += curlvl + 1;

  xp[item.author.id].cpm += curcpm * 0.5;

  xp[item.author.id].coins += curcoins + 200;

  const embed = new Discord.RichEmbed()
  .setTitle("Level Up!")
  .setDescription("New Level : " + dispLvl)
  .setColor(0x81ffa2)
  .setFooter("200 Espre-coins added to your current balance, your cpm has now been boosted.")
  item.channel.send({embed}).then(msg => {msg.delete(50000)});
}

fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
});

fs.writeFile("./oxp.json", JSON.stringify(oxp), (err) => {
  if(err) console.log(err)
});

if (item.content === prefix + "xp") {
  if (xp[item.author.id].cafe !== 0) {
   const embed = new Discord.RichEmbed()
   .setColor(0x81ffa2)
   .addField("Cafe Level", curlvl, true)
   .addField("Cafe XP", hiddenxp + "/" + nxtLvl + " (" + curxp + " tot.)", true)
   .addField("XP Needed", nxtLvl, true)
   .setAuthor(item.author.username + "'s Cafe XP")
   item.channel.send({embed})
  } else if (xp[item.author.id].cafe === 0) {
    msg.channel.send("⛔ You need to **rent** a cafe! use `;rent-cafe`")
  }
}

/*if (item.content === prefix + "coins") {
  const embed = new Discord.RichEmbed()
  .setColor(0x481faf1)
  .addField(msg.author.username + "'s coins", "**CPM (Coins per message) : " + xp[item.author.id].cpm)
  msg.channel.send({embed})
}

if (item.content === prefix + "rent-cafe") {
   if (xp[item.author.id].cafe === 0) {
    xp[item.author.id].cafe = 1;
    msg.channel.send("Congrats " + msg.author.username + ", You've just bought a cafe! Use ;cafe to check out your new cafe!")
   } else if (xp[item.author.id].cafe !== 0) {
      msg.channel.send("⛔ You **can't** rent more then 1 cafe!")
   }
}

if (item.content === prefix + "cafe") {
  if (xp[item.author.id].cafe === 1) {
    const embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/464447104488833024/465162817381728276/cafe1-u.png")
    .addField(msg.author.username + "'s cafe", "💸 **CPM** : " + xp[item.author.id].cpm + "\n💰 **Coins** : " + xp[item.author.id].coins)
    .setFooter("Your first cafe! Yeah... Not the most appealing cafe but atleast you got one for free! CPM means Coins per message.")
    msg.channel.send({embed});
  } else if (xp[item.author.id].cafe === 2) {
    const embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/464447104488833024/465206966646603796/cafe2-u.png")
    .addField(msg.author.username + "'s cafe", "💸 **CPM** : " + xp[item.author.id].cpm + "\n💰 **Coins** : " + xp[item.author.id].coins)
    .setFooter("Your first cafe! You've already made your first purchase, that's great! CPM means Coins per message.")
    msg.channel.send({embed});
  } else if (xp[item.author.id].cafe === 3) {
    const embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/464447104488833024/465208922169671680/cafe3-u.png")
    .addField(msg.author.username + "'s cafe", "💸 **CPM** : " + xp[item.author.id].cpm + "\n💰 **Coins** : " + xp[item.author.id].coins)
    .setFooter("Your first cafe! You've already made your second purchase, that's super great! CPM means Coins per message.")
    msg.channel.send({embed});
  } else if (xp[item.author.id].cafe === 0) {
    msg.channel.send("⛔ You need to **rent** a cafe! use `;rent-cafe`")
  }
}

if (item.content.startsWith(prefix + "buy")) {
  if (item.content === prefix + "buy") {
    const embed = new Discord.RichEmbed()
    .setTitle("Item Menu")
    .setDescription("`1` 🥂 **Electronic Coffee Maker** : 50 Espre-coins | 0.8x more CPM\n`2` ✨ **Clean Items** : 100 Espre-coins | 1.3x more CPM")    
    msg.channel.send({embed});
  } else if (item.content === prefix + "buy 1") {
    if (xp[item.author.id].coins > 50) {
      xp[item.author.id].coins -= curcoins - 50;
      xp[item.author.id].cafe += 1;
      xp[item.author.id].cpm += curcpm * 0.5;
      const embed = new Discord.RichEmbed()
      .setTitle("Thank you for your purchase! You'll earn more money in no time!")
      .setDescription("The **Electronic Coffee Maker** has been added to your cafe.")
      msg.channel.send({embed});
    } else if (xp[item.author.id].coins < 50) {
      msg.channel.send("⛔ **Insufficient funds!** You currently have " + xp[item.author.id].coins + " and you need 50 coins to purchase this item!")
    }
  } else if (item.content === prefix + "buy 2") {
    if (xp[item.author.id].coins > 100) {
      xp[item.author.id].coins -= curcoins - 100;
      xp[item.author.id].cafe += 1;
      xp[item.author.id].cpm += curcpm * 1.0;
      const embed = new Discord.RichEmbed()
      .setTitle("Thank you for your purchase! You'll earn more money in no time!")
      .setDescription("Your items are now **Clean Items** in your cafe.")
      msg.channel.send({embed});
    } else if (xp[item.author.id].coins < 100) {
      msg.channel.send("⛔ **Insufficient funds!** You currently have " + xp[item.author.id].coins + " and you need 100 coins to purchase this item!")
    }
  }
}*/

/*if (msg.content === prefix + "announce") {
  msg.delete();

  const embed = new Discord.RichEmbed()
  .setColor(0xffe494)
  .setTitle("Important Announcement")
  .addField("Listen up! Yer 'ere because of yer boss, Potapo. If I see one of ye **not** celebratin'... Yer gonna feel my **wrath**!", "You don't actually need to celebrate and you can't feel his wrath, He's a bot after all.")
  .addField("Oi maties! We imported some of those ''robo-toys'' from Antartica, so ye can enjoy yer time in this ol' mine.", "In short, we have bots. Ignore the imported from Antartica part.")
  .addField("More announcements coming soon.", "Bye fellow member!")
  msg.channel.send({embed});
}*/

if (msg.content === prefix + "help") {
  const embed = new Discord.RichEmbed()
  .setColor(0x8b3cff)
  .setTitle("Where shall the list to be sent?")
  .setDescription("**y-help here** or **y-help dm**")
  msg.channel.send({embed})
}

if (msg.content === prefix + "help dm") {
  msg.react("🆗")
  
  const embed = new Discord.RichEmbed()
  .setColor(0x8b3cff)
  .addField("Moderation", "y-warn, y-warn @<user> <reason>\ny-kick, y-kick @<user> <reason>\ny-ban, y-ban @<user> <reason>")
  .addField("Informantion", "y-help, y-help here or y-help dm\ny-avatar, y-avatar @<user> (Leave it blank to see your avatar)")
  .addField("Fun", "*none yet*")
  .addField("Other", "*none yet*")
  msg.author.send({embed})
} else if (msg.content === prefix + "help here") {
  const embed = new Discord.RichEmbed()
  .setColor(0x8b3cff)
  .addField("Moderation", "y-warn, y-warn @<user> <reason>\ny-kick, y-kick @<user> <reason>\ny-ban, y-ban @<user> <reason>")
  .addField("Informantion", "y-help, y-help here or y-help dm\ny-avatar, y-avatar @<user> (Leave it blank to see your avatar)")
  .addField("Fun", "*none yet*")
  .addField("Other", "*none yet*")
  .setFooter("This message will be deleted in 30 seconds after being sent to prevent spam.")
  msg.channel.send({embed}).then(msg => {msg.delete(30000)})
}

let args = msg.content.split(" ").slice(1);
let args2 = msg.content.split(" ").slice(2);

if (msg.content.startsWith(prefix + "warn")) {
  msg.delete();

  const embed = new Discord.RichEmbed()
  .setColor(0xff4d4f)
  .setTitle("⚠ **User Warned** ⚠")
  .setDescription("User : " + msg.mentions.members.first().user.username + " \nWarn Giver : " + msg.author.username + " \nReason : " + args2.join(" "))
  msg.channel.send({embed});
}

if (item.content.startsWith(prefix + "kick")) {
  msg.delete();
  
  if (!item.member.hasPermissions('KICK_MEMBERS')) return item.reply("You dont have the Permission <KICK-MEMBERS>");
  if (!item.guild.member(client.user).hasPermissions('KICK_MEMBERS')) return item.reply("I dont have the Permission to kick Members");
  let toKick = item.mentions.members.first() || item.guild.members.get(args[0]);
  if (!toKick) return item.reply("Please mention a Member to Kick, or provide their Client ID");
  let reason = args.slice(1).join(' ');
  if (!reason) reason = 'No reason provided';
  if (!toKick.kickable) return item.reply('This member isnt kickable');

  toKick.kick({reason: reason});

  const embed = new Discord.RichEmbed()
  .setColor(0xa23d3d)
  .setTitle("⛔ **User Kicked** ⛔")
  .setDescription("User : " + toKick.user.username + " \nKick Placer : " + msg.author.username + " \nReason : " + reason)
  item.channel.send({embed});
}

// Ban
if (item.content.startsWith(prefix + "ban")) {
  msg.delete()

  if (!item.member.hasPermissions('BAN_MEMBERS')) return item.reply("You dont have the Permission <BAN-MEMBERS>");
  if (!item.guild.member(client.user).hasPermissions('BAN_MEMBERS')) return item.reply("I dont have the Permission to Ban Members");
  let toBan = item.mentions.members.first() || item.guild.members.get(args[0]);
  if (!toBan) return item.reply("Please mention a Member to Ban, or provide their Client ID");
  let reason = args.slice(1).join(' ');
  if (!reason) reason = 'No reason provided';
  if (!toBan.bannable) return item.reply('This member isnt bannable');

  toBan.ban({reason: reason});

  const embed = new Discord.RichEmbed()
  .setColor(0x501111)
  .setTitle("‼ **User Banned** ‼")
  .setDescription("User : " + toBan.user.username + " \nBan Placer : " + msg.author.username + " \nReason : " + reason)
  item.channel.send({embed});
}

if (item.content.startsWith(prefix + "avatar")) {
  if (item.mentions.users.size === 1) {
    const embed = new Discord.RichEmbed()
    .setColor(0xc7a1ff)
    .addField(item.mentions.members.first().user.username, "This is their avatar.")
    .setImage(item.mentions.members.first().user.avatarURL)
    item.channel.send({embed})
  } else if (item.mentions.users.size === 0) {
    const embed = new Discord.RichEmbed()
    .setColor(0xc7a1ff)
    .addField(msg.author.username, "This is your avatar.")
    .setImage(item.author.avatarURL)
    item.channel.send({embed})
  }
}

// xp stuff

fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
});

let xpAdd = 13;
console.log(xpAdd);

const itemsC = [
  'stone',
  'jagged rock',
  'mud ball',
  'carved plate',
  'stick'
]

if(!xp[item.author.id]){
  xp[item.author.id] = {
    bal: 100,
    Stone : 0,
    Jagged__Rock : 0,
    Mud__Ball : 0,
    Carved__Plate : 0,
    Stick : 0
};
}

if (msg.content === "y-item") {
  msg.reply("You found an item of unknown value"), {
    file: itemsC[Math.floor(Math.random() * itemsC.length)]
  }
}

if (msg.content === "y-inv") {
  const embed = new Discord.RichEmbed()
  .setColor(purple)
  .setTitle("Balance : " + xp[item.author.id].bal, "_ _")
  .addField("(C) Stone : " + xp[item.author.id].Stone, "_ _")
  .addField("(C) Jagged Rock : " + xp[item.author.id].Jagged__Rock, "_ _")
  .addField("(C) Mud Ball : " + xp[item.author.id].Mud__Ball, "_ _")
  .addField("(C) Carved Plate : " + xp[item.author.id].Carved__Plate, "_ _")
  .addField("(C) Stick : " + xp[item.author.id].Stick, "_ _")
  .setFooter("Inventory belonging to " + msg.author.username)
  msg.channel.send({embed});
}

});

/*

let curxp = xp[item.author.id].xp;
let hiddenxp = xp[item.author.id].oxp;
let curlvl = xp[item.author.id].level;
let nxtLvl = xp[item.author.id].level * 120;
let dispLvl = xp[item.author.id].level + 1;

if (xp[item.author.id].xp !== 0) {
talkedRecently.add(item.author.id);
setTimeout(() => {
  // Removes the user from the set after 25 seconds
  xp[item.author.id].xp = curxp += xpAdd;
  //xp[item.author.id].oxp = hiddenxp += xpAd; 

  talkedRecently.delete(item.author.id);
}, 600);
}

if (msg.content.startsWith(prefix + "prestige")) {
  if (msg.content === prefix + "prestige info") {
    const embed = new Discord.RichEmbed()
    .setColor(0xbcffc3)
    .setTitle("About Prestige")
    .setDescription("Doing a prestige will multiply your income and add more jobs. But you must gain a high amount of money to prestige, you can't simply breeze through a prestige.")
    .addField("Income Boosts", "Prestige 1 : 0.5x\nPrestige 2 : 2.0x\nPrestige 3 : 3.5x\nPrestige 4 : 5.5x")
    .addField("Cost", "Prestige 1 : 50,000\nPrestige 2 : 175,000\nPrestige 3 : 500,000\nPrestige 4 : 1,000,000")
    .addField("Jobs","Prestige 1 : 1 new job\nPrestige 2 : 2 new jobs\nPrestige 3 : 3 new jobs\nPrestige 4 : 4 new jobs")
    msg.channel.send({embed})
  }
}

if (msg.content.startsWith(prefix + "buy")) {
  if (msg.content === prefix + "buy") {
    const embed = new Discord.RichEmbed()
    .setColor(0xbcffc3)
    .setTitle("Job list")
    .setDescription("`1` : Fast food worker\n`2` : Supermarket worker\n `3` : Nursery worker")
    .setFooter("You can only choose 1 job unless you prestige")
    msg.channel.send({embed})
  }
 if (xp[item.author.id].employment === 0) {
  if (msg.content === prefix + "buy 1") {
    if (xp[item.author.id].xp > 150) {
      xp[item.author.id].employment = 1;
      xp[item.author.id].job = 1;
      msg.reply(xp[item.author.id].employment + "Emp val. / " + xp[item.author.id].job + "Jb val.")
    } else if (!xp[item.author.id].xp > 100) {
      msg.reply("You need at least £150 to get this job.")
    }
  } else if (msg.content === prefix + "buy 2") {
    if (xp[item.author.id].xp > 150) {
      xp[item.author.id].employment = 2;
      xp[item.author.id].job = 1;
      msg.reply(xp[item.author.id].employment + "Emp val. / " + xp[item.author.id].job + "Jb val.")
    } else if (!xp[item.author.id].xp > 100) {
      msg.reply("You need at least £150 to get this job.")
    }
  } else if (msg.content === prefix + "buy 3") {
    if (xp[item.author.id].xp > 150) {
      xp[item.author.id].employment = 3;
      xp[item.author.id].job = 1;
      msg.reply(xp[item.author.id].employment + "Emp val. / " + xp[item.author.id].job + "Jb val.")
    } else if (!xp[item.author.id].xp > 100) {
      msg.reply("You need at least £150 to get this job.")
    }
  }
 } else if (xp[item.author.id].employment !== 0) {
    msg.channel.send("Remember, You have to prestige in order change your job, do **y-prestige info** to see the details.")
 }
}

if (msg.content.startsWith(prefix + "bal")) {
  if (xp[item.author.id].employment === 0) {
    const embed = new Discord.RichEmbed()
    .setColor(0xbcffc3)
    .setTitle(msg.author.username + "'s account")
    .setDescription("• Current balance : £" + xp[item.author.id].xp + "\n• Current job : none\n• Job type : none")
    msg.channel.send({embed})
  } else if (xp[item.author.id].employment === 1) {
    if (xp[item.author.id].job === 1) {
      const embed = new Discord.RichEmbed()
      .setColor(0xbcffc3)
      .setTitle(msg.author.username + "'s account")
      .setDescription("• Current balance : £" + xp[item.author.id].xp + "\n• Current job : Fast food worker\n• Job type : Food")
      msg.channel.send({embed})
    }
  } else if (xp[item.author.id].employment === 2) {
    if (xp[item.author.id].job === 1) {
      const embed = new Discord.RichEmbed()
      .setColor(0xbcffc3)
      .setTitle(msg.author.username + "'s account")
      .setDescription("• Current balance : £" + xp[item.author.id].xp + "\n• Current job : Supermarket worker\n• Job type : Service")
      msg.channel.send({embed})
    }
  } else if (xp[item.author.id].employment === 3) {
    if (xp[item.author.id].job === 1) {
      const embed = new Discord.RichEmbed()
      .setColor(0xbcffc3)
      .setTitle(msg.author.username + "'s account")
      .setDescription("• Current balance : £" + xp[item.author.id].xp + "\n• Current job : Nursery worker\n• Job type : Health")
      msg.channel.send({embed})
    }
  }
}*/

/*.then(function (msg) {
              msg.react("🗣")
              msg.react("📨")
            }).catch(function() {
              //Something
             });*/

client.login(process.env.BOT_TOKEN);
