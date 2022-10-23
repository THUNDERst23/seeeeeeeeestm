
const express = require('express');
const app = express();
 app.use('/ping', (req, res) => {
    res.send(new Date());
});
app.listen(3000, () => {
  console.log('Im ready Now');
});

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const ms = require("ms");
const db = require('quick.db');
require("events").EventEmitter.defaultMaxListeners = 50000;
const inlinereply = require('discord-reply');
const disbut = require('discord-buttons');
const probot = require("probot-tax");
////Bot Status
client.on('ready', () => {
  console.log(`🤠 : ${client.user.username}`);
  client.user.setStatus('idle');///dnd/online/idle
  let status = [`𝖡𝗒 THUNDER`,`${prefix}help`];
  setInterval(()=>{
  client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})
///Definitions 
const prefix = "V";///your prefix
const owner = ["863189074118574121",""]///owner id
const supportServer = "https://discord.gg/Libya"///server support
const help_info_color = ""///color in help
const color = ""//main color
const moreInfo = `Need more info? use ${prefix}help`
const line = ""///url line link
const صح = "✅";//react
const غلط = "❎";//react

///auto react


client.on("message", async black => {
   ///replace 83838388 with id channel
 
  if (black.channel.id !=83838388) return;
  if(black.author.id === client.user.id) return;
      black.react("✨")//react
      black.react("🔥")//2

  
 
  }
  
)

//tax channel

client.on('message', message => {
  let args = message.content
  if (message.author.bot) return;
  if (message.channel.id !== '979402299480895508') return;
let args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace('b',"000000000000").replace('B',"000000000000")
let tax = Math.floor(args2 * (20) / (19) + (1))
let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
let tax3 = Math.floor(tax2 * (20) / (19) + (1))
let tax4 = Math.floor(tax2 + tax3 + args2)
if (isNaN(args2)) return message.channel.send(`**__Error__**`)
if (args2 < 1) return message.channel.send("**Error**");
if (args2 == 1) return message.channel.send(`> **Please Write a Number Hight to \`1\`**`);


  if (message) {
  message.channel.send(`> **Your Tax : __${probot.taxs(args2)}__**`)
  }
}); 


client.on("message", message => {
  if (message.content == ("السلام عليكم") || message.content === "سلام عليكم") 
  {

message.lineReply(`وعليكم السلام ورحمة الله وبركاتم`)

  }
})

client.on("message", message => {
  if (message.content == (".") || message.content === ".") 
  {

message.lineReply(`
 ليش تنقط <:mim7:1019806580897755207><:mim7:1019806580897755207>

 `)

  }
})
///line &   Reaction
const lineSettings = [
  {
    channelID: "926246691466776667",
    line: "https://media.discordapp.net/attachments/1017900431604719676/1030865113114218639/VIXUP.png",
    reaction: "<a:876148382412996628:926457252364292097>"
  },

]

client.on('message', async(message) => {
if(message.author.bot) return;
  for(let i = 0; i < lineSettings.length; i++) {
    if(message.channel.id == lineSettings[i].channelID) {
      await message.react(lineSettings[i].reaction).catch(console.log)
      await message.channel.send(lineSettings[i].line).catch(console.log)
    } 
  }
})



///link
client.on("message", message => {
  if (message.content == ("لينك") || message.content === "link") {

message.lineReply(`
> **SERVER LINK <a:ArwRight:1031172219549798450><a:ArwRight:1031172219549798450>** https://discord.com/invite/vixclan `)

  }
})



client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'id')) {
    var user = message.guild.member(message.mentions.members.first() || message.author);
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL({dynamic: true}))  
    .setAuthor(message.author.username,message.author.avatarURL({dynamic: true}))
  .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setColor(color)
      .addField(`> ID USER : [ ${user.id} ]`, `> ${user.user}`)

    message.lineReply({ embed });
  }
});


//avatar 

client.on("message", async message => {
    let command = message.content.toLowerCase().split(" ")[0]
    command = command.slice(prefix.length)
    if (command == "avatar") {
        let args = message.content.split(" ")
        let user = message.mentions.users.first() || client.users.cache.find(u => u.id === args[1]) || message.author
        if (args[1] !== "server") {
            message.lineReply(
                new Discord.MessageEmbed()
                .setColor(color)
                .setAuthor(user.username, user.avatarURL({dynamic: true}))
                .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
                .setImage(user.avatarURL({
                    dynamic: true,
                    format: 'png',
                    size: 1024
                }))
                .setFooter(user.username, user.avatarURL({ dynamic: true }))
                .setTimestamp()
            );
        } else if (args[1] === "server") {
            message.lineReply(
                new Discord.MessageEmbed()
                .setColor(color)
                .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
                .setDescription(`**__[Avatar Link]__(${message.guild.iconURL({ dynamic: true })})**`)
                .setImage(message.guild.iconURL({
                    dynamic: true,
                    format: 'png',
                    size: 1024
                }))
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            );
        }
    }
});

//user
client.on('message',message => {
    if(message.content.startsWith(prefix + 'user')){
if(!message.guild)return;
const args = message.content.split(" ")[1];
let mID = message.guild.members.cache.get(args);
    let member;
    let user;
    if(args && !message.mentions.members.first() && !mID)return message.lineReplyNoMention({embed:{description:`😒 - **${message.author.username}**, **I can't find \`${args}\` in the server Please Join Your Id a Server**`,color:color}});
    if(message.mentions.members.first()||mID){
        member = message.mentions.members.first()||mID;
        user = member.user;
    }else{member = message.member;
    user = message.author;}
    let em = new Discord.MessageEmbed()
    .setColor(color)
    .setThumbnail(user.displayAvatarURL({dynamic:true}))
    .addField(`Joined Discord :`,`\n\`\`${moment(user.createdAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(user.createdAt).fromNow()}**`,true)
    .addField(`Joined Server :`,`\`\`${moment(member.joinedAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(member.joinedAt).fromNow()}**`,true)
    .setFooter(user.tag,user.avatarURL({dynamic:true}))
    
    .setAuthor(user.tag,user.avatarURL({dynaimc:true}))
    message.lineReply(em);
}
})

//ban
client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "ban")){
        if(!normal.member.hasPermission('BAN_MEMBERS'))
       return normal.lineReply(
          new Discord.MessageEmbed()
           .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```انت لست من الادمن | You are not addicted```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )

           if(!normal.guild.me.hasPermission('BAN_MEMBERS'))
         return  normal.lineReply(
             new Discord.MessageEmbed()
             .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
             .setColor(color)
             .setTitle("** I Dont Have a Permissions **")
             .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
           )
         const args = normal.content.slice(prefix.length).trim().split(/ +/g);
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
      if(!member) return  normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(`\`\`\`Please Mention user or Type the user ID/Username ${args.slice(1).join(' ')}\`\`\` `)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
                if (member.id === normal.author.id)return normal.reply(`\`\`\`You can't ban Yourself\`\`\` `)
      if (member.id === normal.guild.me.id)return normal.reply(`**You can't ban me dumbass**`)
     if(!member.bannable) return normal.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```The Member Role Is Higher Than Me```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )


         await member.ban({reason:`He/She just got bannned`})
        normal.lineReply(`**${member.user.username} Has been BANNNED ✈**`)
    } 
})

/// hide/show

client.on('message', message =>{
if(message.content === prefix +"hide"){
if(message.author.bot || !message.guild) return;
if(!message.member.hasPermission('MANAGE_CHANNELS'))
 return message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setTitle("``` You Dont Have a Permissions```")
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
);

let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : false
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))         
                .setColor(color)
                .setDescription(`> **Done Hide This Room  ${message.channel}**`)
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
                message.lineReply(embed)
                })
}
});

client.on('message', message =>{
if(message.content === prefix +"show"){
if(message.author.bot || !message.guild) return;
if(!message.member.hasPermission('MANAGE_CHANNELS'))
return message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setTitle("``` You Dont Have a Permissions```")
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
);

let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
               VIEW_CHANNEL: true
            }).then(() => {
                const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setColor(color)
                .setDescription(`> **Done Show This Room  ${message.channel}** `)
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
                message.lineReply(embed)
                })
}
});



//add-emoji

client.on('message', black =>{
  if (black.content.startsWith(prefix + 'add-emoji')) {
     const args = black.content.split(' ').slice(1)
    if (!black.member.hasPermission('MANAGE_EMOJIS')) {
    return  black.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
        
        .setColor(color)
        
        .setTitle(`
> **You Dont Have a Permissions __Here__ \`MANAGE_EMOJIS\`**        
      `)
        .setFooter(black.author.tag, black.author.avatarURL({ dynamic: true }))
  .setTimestamp()

      )
    }

    if (!black.guild.me.hasPermission('MANAGE_EMOJIS')) {
        return black.lineReplyNoMention(`
        > **I Dont Have a Permissions \`MANAGE_EMOJIS\`**
        `);
    }

    const emoji = args.join("");
    if (!emoji) return black.lineReply(
      new Discord.MessageEmbed()

      .setColor(color)
      .setDescription(`
      > **Please Write a Emoji add to __Server__**
      `)
               .setThumbnail(black.guild.iconURL())
       .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
      .setTimestamp()
    )

    let the_typed_emoji = Discord.Util.parseEmoji(emoji);

    if (the_typed_emoji.id) {
        const link = `https://cdn.discordapp.com/emojis/${the_typed_emoji.id}.${
            the_typed_emoji.animated ? 'gif' : 'png'
        }`;
        const name = args.slice(1).join(' ');

        black.guild.emojis.create(`${link}`, `${name || `${the_typed_emoji.name}`}`);
        const done = new Discord.MessageEmbed()
        .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
            .setTitle(`
            > **Done addd a __Emoji__**
            `)
         
        
            .setColor(color)
            .setTimestamp()

                black.react(صح)
            
        return black.lineReplyNoMention(done);
    } else {
        let CheckEmoji = parse(emoji, { assetType: 'png' });
        if (!CheckEmoji[0])
            return black.lineReply('invalied emojiev');
        black.lineReply(`
        > **Please add Emoji Auhtor**

        > **من فضلكك قم باضافة ايموجي اخر**
        `);
}
}
})






/// nick name 
client.on("message",message=>{
    if(message.content.startsWith(prefix+"nick-name")){
      if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.lineReply("```❌You Dont Have a permissions ```")
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[1])||message.guild.members.cache.find(r => r.user.username === args[1])
      if(!member) return message.lineReply("nick-name @Mention (nickname)")
      let nick = message.content.split(" ").slice(2).join(" ")
      let g = message.guild.members.cache.get(member.id)
      if(!nick){
g.setNickname(member.username)
      }
g.setNickname(nick)
const l = g.nickname|| member.username
let embed = new Discord.MessageEmbed()
.setAuthor(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setThumbnail(message.member.user.avatarURL({dynamic:true}))
.setColor(color)
.setTitle("**__Done NickName__**")
.addField(`**(User Nick Change)**`,`${member}`,true)
.addField(`**(Befor)**`,`**${l}**`,true)
.addField(`**(After)**`,`**${nick}**`,true)
.addField(`**(from)**`,`**${message.author}**`,true)

.setFooter(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setTimestamp()
message.lineReply(embed)
    }
  })

///ping
client.on("message", async(black) => {

    if (black.content.startsWith(prefix + "ping")) {
    
        black.lineReplyNoMention(
          new Discord.MessageEmbed()

          .setColor(color)
          .setDescription(`> **Please Wait...**`)

        ).then((m) => {
            setTimeout(() => {
                m.edit((
                  new Discord.MessageEmbed()
                  .setColor(color)
                  .setDescription(`> \`-\` **My Ping Is :** \`${client.ws.ping}\` `)
                    .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
    .setTimestamp()
                

                )
                )
            }, 5000)
        })
    }
})






// tax 
client.on("message", async message => {


  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) { 
    let args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace('b',"000000000000").replace('B',"000000000000")
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    let errorembed3 = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`> **Please Wait.. **`);
    if (!args2) return message.lineReply(errorembed3).then(e=>{
      setTimeout(function(){
        e.edit(
          new Discord.MessageEmbed()
          .setColor(color)
                       .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
                    .setTitle(`>   **Error**`)

          .setDescription(`
          > **Please Write Your Number to Taxs**
          `)
  
          
        
        )
      }, 4500)
    });
    let errorembed2 = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`> **Please Wait... **`);
    if (isNaN(args2)) return message.lineReply(errorembed2).then(e=>{
      setTimeout(function(){
        e.edit(
          new Discord.MessageEmbed()
          .setColor(color)
                       .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
          .setTitle(`**Error**`)
          .setDescription(`>  **Please Write Your Namber to Taxs**

`)
        )
      }, 4500)
    });;
    let errorembed = new Discord.MessageEmbed()
           .setTitle(`**Error**`)
    .setColor(color)
    .setDescription(`> **Must The Number Larger __1__**`)
    .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.lineReply(errorembed);
    let embed3 = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`>  \`-\` **all Taxs : \`1\` ** 
    `)
                .setImage(line)
            .setTimestamp()
             .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            if (args2 == 1) return message.lineReply(embed3);
    let embed = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`> **Please Wait..  **`)
    message.lineReply(embed).then(e=>{
      setTimeout(function(){
        e.edit(
          new Discord.MessageEmbed()
          .setColor(color)
          .setDescription(`

          > **Done Send all Tax** 

          > **Tax __Here__ \`${tax}\`**
          `)
            .setImage(line)
            .setTimestamp()
             .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        )
      }, 1500)
    });;
  }
  });
///By THUNDER
////////////////////////
// Sevrer 
client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(command === 'server' || command === 'معلومات') {

        const onlinemembers = message.guild.members.cache.filter(m => m.presence.status === 'online'||'dnd'||'afk').size
          const textch = message.guild.channels.cache.filter(ch => ch.type === "text").size
          const voicech = message.guild.channels.cache.filter(ch => ch.type === "voice").size
          let customembed = new Discord.MessageEmbed()
          
          
    .setTimestamp()
          
          .setAuthor(message.guild.name,message.guild.iconURL({dynamic: true}
          ))

             .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}
          ))
          
          .addField(`🆔 Server ID:`, message.guild.id, true)
          .addField(`📆 Created On`, message.guild.createdAt, true)
          .addField(`👑 Owned by`, message.guild.owner, true)
          .addFields({name:`👥  Members (${message.guild.members.cache.size})`, value: `${onlinemembers} online\n${message.guild.premiumSubscriptionCount} boosts ✨`, inline: true})
          .addField(`:speech_balloon: Channels (${message.guild.channels.cache.size})`, `${textch} Text | ${voicech} voice`, true)
          .addFields({name:`🌍 Others`, value: `**region:** ${message.guild.region}\n **Verification Level:** ${message.guild.verificationLevel}`, inline: true})
          .addField(`🔐  Roles (${message.guild.roles.cache.size})`, `To see a list with all roles use `)
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setColor(color)
          
          message.lineReplyNoMention(customembed)

          
        }
});


//Channel FeedBack 


client.on("message", message => {
  let embed = new Discord.MessageEmbed()
    .setTitle(`> **Thanks for FeedBack
يريت تكون الخدمة عجبتك ❤️🔥**    
 
`)

  .setImage(line)
  .setThumbnail(message.author.avatarURL({dynamic: true}))
        .setAuthor(message.author.username,message.author.avatarURL({dynaimc: true}))
           .setTimestamp()
       .setColor(color)
  if (message.channel.id != "976867595984699392") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})
///auto line

client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "976867598211903568") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})

//2
client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "976867653861933116") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})
////mute

client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "mute")){
        if(!normal.member.hasPermission('MANAGE_ROLES')) return normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle(` \`\`\` You Dont Have a Permissions\`\`\``)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
         const args = normal.content.slice(prefix.length).trim().split(/ +/g);
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                if(!member) return normal.lineReply(
                  new Discord.MessageEmbed()
                  .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(` \`\`\`Please Mention/ID Same One! ${args.slice(1).join(' ')}\`\`\``)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
                )
                if (member.id === normal.author.id)return normal.reply(`**You can't mute yourself**`)
      if (member.id === normal.guild.me.id)return normal.reply(`**You can't mute me dumbass**`)
        let mutedrole = normal.guild.roles.cache.find(ro => ro.name === 'muted')
        if(!mutedrole) {
        try {
        var createdrole = await normal.guild.roles.create({
                      data : {
                        name : 'muted',
                        permissions: [],
                    }});
                        normal.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(createdrole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS : false
                            })
                        })
                } catch (err) {
                console.log(err)
            }};
let muterole = normal.guild.roles.cache.find(r => r.name === 'muted')
         member.roles.add(muterole)
        normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(` **Done Has Been Muted
BY : \`${member.user.username}\`**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()

        )
    } 
})

client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "unmute")){
    var args = normal.content.slice(prefix.length).trim().split(/ +/g);
        if(!normal.member.hasPermission('MANAGE_ROLES')) return normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle(`\`\`\` You Dont Have a Permissions\`\`\``)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                     if(!member) return normal.lineReply(
                       new Discord.MessageEmbed()
                       .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(`\`\`\`Please Mention/ID Same One! ${args.slice(1).join(' ')}\`\`\``)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
                     )
                let muterole = normal.guild.roles.cache.find(r => r.name === 'muted')
        if(!member.roles.cache.has(muterole.id))return normal.lineReply(`**${member.user.username} is not muted**`)
        await member.roles.remove(muterole);
        normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(`**Done Has remove Muted

BY : \`${member.user.username}\`**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        )
  }})

///lock

client.on('message', async message => {
    if (message.content.startsWith(prefix + 'lock')) {
        if (!message.member.hasPermission("MANAGE_CHANNELS"))
        return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ You Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );

        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        });
        message.lineReply(
            new Discord.MessageEmbed()
            .setColor(color)
                  .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}))
            .setDescription(` Done Locked This Channel  ${channel_find.name}`)
        );
    }
});
client.on('message', async message => {
    if (message.content.startsWith(prefix + 'unlock')) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ You Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel;
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: true
        });
        message.lineReply(
            new Discord.MessageEmbed()
            .setColor(color)
            .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}))
            .setDescription(` Done Unlocked This Channel  ${channel_find.name}`)
        );
    }
});

//unban

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.cache.forEach(NoNo => {
          message.guild.members.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
    .members.unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

//profile

client.on('message', message => {
    if (message.content.startsWith(prefix + "profile")) {
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
      let uus = message.mentions.users.first() || message.author;
  
      message.guild.fetchInvites().then(invites => {
  
        let personalInvites = invites.filter(
          i => i.inviter.id === message.mentions.users.first() || message.author.id
        );
        
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      
        var heg;
        if (men) {
          heg = men
        } else {
          heg = message.author
        }
        var mentionned = message.mentions.members.first();
        var h;
        if (mentionned) {
          h = mentionned
        } else {
          h = message.member
        }
  
  
        var id = `https://api.probot.io/profile/${uus.id}`
        message.lineReplyNoMention(id)
      }
      );
    }
    });
//server banner
client.on('message', message => {
  if(message.content.startsWith(prefix + 'sbanner')) {
     message.lineReply(
      new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor(color)
     .setTitle(message.guild.banner ? '**__Done Send Banner__** |' : 'السيرفر ليس لديه اي بانر | The server does not have any banner')
     .setImage(message.guild.bannerURL({ size: 1024 }) || null)
     .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
     
     )
     
  }
})
///clear

client.on("message", async message => {
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "clear") {
        
        if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
        if (!message.member.hasPermission('MANAGE_GUILD'))
        return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        )

        if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.lineReply(`> ** I don't have perms :x:**`);
        let args = message.content.split(" ").slice(1)
        let messagecount = parseInt(args);
        if (args > 100) return message.lineReply(
            new Discord.MessageEmbed()
            .setDescription(`\`\`\`js
i cant delete more than 100 messages 
\`\`\``)
        ).then(messages => messages.delete({ timeout: 5000 }))
        if (!messagecount) messagecount = '100';
        message.channel.messages.fetch({ limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
            message.lineReply(
                new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setColor(color)
                .setDescription(`\`\`\`js
${msgs.size} messages cleared
\`\`\``)
            ).then(messages =>
                messages.delete({ timeout: 5000 }));
        })
    }
});


///say
client.on("message", msg => {
    let say1 = msg.content.split(" ").slice('1').join(" ")
  
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + 'say')) {
      if (!msg.member.hasPermission('ADMINISTRATOR'))
        return msg.channel.send('Permission required!"ADMINISTRATOR"')
      msg.delete()
      msg.channel.send(say1)

    }
});




client.on("message", msg => {
    let moonlight = msg.content.split(" ").slice('1').join(" ")
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + 'sembed')) {
      if (!msg.member.hasPermission('ADMINISTRATOR'))
        return msg.channel.send('Permission required! "ADMINISTRATOR"')
      msg.delete()
msg.channel.send(
  new Discord.MessageEmbed()      
            .setColor(color)
            .setFooter(msg.guild.name,msg.guild.iconURL({dynamic: true}))
            
            .setDescription(moonlight)
            
              .setThumbnail(msg.guild.iconURL({ dynamic: true }))
              
            .setImage(line)

)

    }
});

// help // 

const but = require("discord-buttons")
but(client)
client.on("message", async msg => {
  if (msg.content === prefix + 'help') {
let argss = msg.content.split(" ").slice('').join(" ");
    const disbut = require('discord-buttons')
  
    let button = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("ADMIN COMMANDS")
    .setID("ADMIN")
    .setEmoji(`🤖`)
    let button2 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("PUBLIC COMMANDS")
    .setID("PUBLIC")
        .setEmoji(`🌍`)
   

   let button5 = new disbut.MessageButton()
 .setStyle('blurple')
    .setLabel("MUSIC COMMANDS")
    .setID('PROTECTION')
    .setEmoji(`🎵`)
    let button6 = new disbut.MessageButton()
 .setStyle('red')
    .setLabel("DELETE MESSAGE")
    .setID('DELETE')
    .setEmoji(`❌`)
let nn = await msg.reply({embed :new Discord.MessageEmbed()
.setDescription(`> \`#*\` **\`Hey  : \` ** ${msg.author.username}

> \`*1\` **\`Please Click  Button to Show a Help\`** 

> \`*2\` **\`Thanks as Using Our Bot\`**

`)
.setThumbnail(msg.guild.iconURL({dynamic:true}))

.setAuthor(msg.guild.name,msg.guild.iconURL({dynamic:true}))

.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)

, buttons : [button,button2,button5,button3,button6]})

let collector = nn.createButtonCollector((button) => button.clicker.user.id === msg.author.id)

collector.on('collect', (b)=> {
  if (b.id === 'ADMIN') {
    nn.edit({embed: new Discord.MessageEmbed().setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)


.setTitle(`> **( __Admin  Commands__ )**`)

 .setDescription(`
 

> **${prefix}ban  : ( __ لتبنيد العضو __ )**


> **${prefix}unban  : ( __  لفك التبنيد عن عضو __ )**


> **${prefix}mute  : ( __ لعمل ميوت لي شخص __ )**


> **${prefix}unmute  : ( __ لفك الميوت __ )**


> **${prefix}lock  : ( __ لقفل الاتشنل__ )**


> **${prefix}unlock  : ( __ لفتح الاتشنل __ )**


> **${prefix}role  : ( __ لأعطاء شخص رول __ )**


> **${prefix}re-role  : ( __لأزاله الرول من شخص __ )**



> **${prefix}hide  : ( __ لاخفاء الاتشنل__ )**


> **${prefix}show  : ( __ لاظهار الاتشنل __ )**


> **${prefix}add-emoji : ( __ لاضافة ايموجي لي السرفر__ )**


> **${prefix}nick-name  : ( __ لتغير النيك نيم__ )**


> **${prefix}dm  : ( __ لبعت رساله لشخص ف البرايفت__ )**


> **${prefix}warn : ( __ لارسال ورن__ )**


> **${prefix}clear : ( __ لمسح الشات__ )**


> **${prefix}s-embed : ( __لعمل ساي في ايمبد__ )**


> **${prefix}say : ( __ لعمل ساي بدون ايمبد__ )**




 
 
 
 
 
 
 
 
 `),
 
 
 
  buttons : [button,button2,button5,button3,button6]})

  } else if (b.id === 'BOT') {
    nn.edit({embed :new Discord.MessageEmbed()
    .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
.setTitle(`> **( __Store  Commands__ )**`)
.setDescription(`
> **${prefix}come : (__لطلب شخص ال التيكت__)**




**==========Finshied===========**
 

`)    

     , buttons : [button,button2,button5,button3,button6]})
} else if (b.id === 'PUBLIC') {
    nn.edit({embed :new Discord.MessageEmbed()
        .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
    .setTitle(`> **( __Public  Commands__ )**`)
    .setDescription(`
> **${prefix}avatar  : ( __لاظهار الافتار الخاص بيك__ )**


> **${prefix}user  : ( __لاظهار معلومات عنك__ )**


> **${prefix}server  : ( __لاظهار معلومات عن السرفر__ )**



> **${prefix}sbanner  : ( __لاظهار بنر السرفر __ )**
 

> **${prefix}ping  : ( __ لاظهار بنج البوت __ )**





> **${prefix}allbans   : ( __لاظهار كام واحد متبند في السيرفر __ )**
    `)
    
    .setColor(color)
    
     , buttons : [button,button2,button5,button3,button6]})
  } else if (b.id === 'PROTECTION') {
    nn.edit({embed :new Discord.MessageEmbed()
    
    
    .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
    .setDescription(`
    
    
> **${prefix}play : ( __ Play a song or add it to the queue.__ )**


> **${prefix}stop : ( __ Pause the current song.__ )**


> **${prefix}pause : ( __ Pause the current song.__ )**


> **${prefix}resume : ( __ Resume music if it was paused.__ )**


> **${prefix}np : ( __ Display the currently played song.__ )**


> **${prefix}queue : ( __ Display each song title in queue.__ )**


    `)
    .setTitle(`> **( __Music  Commands__ )**`)
    
    ///لم يتم اضافه اوامر موسيقي !
    
    
    ,
      buttons : [button,button2,button5,button3,button6]}) 
} else if (b.id === 'DELETE') {
    nn.delete({timeout : 1000})
     s.react("❌");
}
})
  }
  })


//bans

client.on('message', message => {
  if (message.content.startsWith(prefix + "allbans")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`❎**Server Ban List :** ${bans.size} `))
      .catch(console.error);
  }
});

///الامر فارغ للتعديل عليه علي حسب الرغبه
///rules
      client.on('message', function(message) {
    if(message.content.startsWith(prefix + "rules")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            
            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL({dynamic: true}))  
            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.channel.send(
  new Discord.MessageEmbed()
  .setColor(color)
.setThumbnail(message.guild.iconURL({dynamic: true}))  
        .setImage(line)
 
.setDescription(`
  
 <a:Vv1:829937976888918016>قـوانـيـن سيـرفـر  Vix Clan <a:Vv1:829937976888918016>


1- الإحترام واجـب على كل عضو داخل السيرفر

2- عدم التطرق في نقاشات سياسية .

3- عدم التطرق في مشاكل شخصية داخل السيرفر .

4-عدم نشر روابط مجهولة المصدر او نشر اي عناصر مخلة للاخلاق داخل السيـرفر .

5- أرجو عدم التلفظ بكلمات وقحه ( وهذا يعرضك الحظر الفوري ) و كل شي  يدل علي تربيتك .
 
6-عند تعرضك لأي مضايقات داخل السيـرفر الرجاء التوجه الى احد المسؤولين و عدم احداث المشاكل . 

7- أرجو منكم احترام الغير مهما كان اختلاف : اللغة ، الديانة ، العمر .

ملاحظة :
عند مخالفتك لأحد القوانين المنصوصة في الاعلى سوف تتعرض لإنذار الاول ثم الثاني  وفي الثالث  يحتكم عليك  الحظر النهائي من السيرفر .
 
Laws, Server Vix Clan <a:Vv1:829937976888918016> :


1 - Respect for each member within the server

2. Non-addressing in political debates.

3. Do not address personal problems within the server.

4. Do not publish unknown ties or publish any elements of morality within the server.

5 - I hope not for the words of the crimp (this will expose you immediate ban) and everything shows your education.
 
6. When you expose any harassment within the server, please go to one administrator and not event problems.

7. I hope you respect others no matter how different: language, religion, age.

Note :
When you violate one of the highest laws in the top, the first warning and second and in the third will have the final ban from the server.

 
°`)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()

).then(r=>{
   r.react("✨")
 })
 }})

///role
require('discord-reply')
client.on('message', async(message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
if(command === 'role') {
      if(message.channel.type === 'dm') return;
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let member = message.guild.member(user)
        let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name.toLocaleLowerCase().includes(args[1]))|| message.guild.roles.cache.get(args[1])
        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **${prefix}role __(@user|user id)__ || __(role name |id)__**`))
        if(!role) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> \`\`\`Role Not Found!\`\`\` `))

         if(!member.roles.cache.has(role.id)) {
        member.roles.add(role.id)
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **The Role** **(${role.name})** **__Was Added To__** **(${member.user.tag})**`))
        
            
         }
    }
});

///re-role
require('discord-reply')
client.on('message', async(message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
if(command === 're-role') {
      if(message.channel.type === 'dm') return;
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let member = message.guild.member(user)
        let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name.toLocaleLowerCase().includes(args[1]))|| message.guild.roles.cache.get(args[1])
        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **${prefix}role __(@user|user id)__ || __(role name |id)__**`))
        if(!role) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> \`\`\`Role Not Found!\`\`\` `))
        if(member.roles.cache.has(role.id)) {
         member.roles.remove(role.id)
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **The Role** **(${role.name})** **__Was Removed From__** **(${member.user.tag})**`))
        

        
            
         }
    }
});







///warn

client.on("message", message => {
  if (message.content.startsWith(prefix + "warn")) {
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```You are not addicted```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      );
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("``` ❌ I Dont Have a Permissions```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )
    var user = message.mentions.users.first();
 
    if (!user)
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```برجاء المنشن علي الشخص مع ذكر السبب | Please tag the person with the reason``` => warn (Mention) : (Reason) ")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )
    var args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args) return message.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor(color)
      .setTitle("```Please write the reason```")
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    )
message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setDescription(`**From : ${user.username}**

**Reason : ${args}**`)
)
let embed = new Discord.MessageEmbed() 
 .setTitle(`>️ You have Warned
 ${args}`)  

 .setColor(color)  
 .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
 .setTimestamp()
 user.send(embed)    
 .then(m => {
  var owners = message.guild.owner
  let embed = new Discord.MessageEmbed() 
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setTitle('**__New warn __**')  
 .addField("`From`",`**The person who made the warning : ${message.author}**`)
 .addField("`To Me`",`**I took the warning : ${user}**`,true)
 .addField("`Message`",`**The message is : ${args}**`)
 .addField("`Time`",`**Time Message : ${message.createdAt.toLocaleString()}**`)
 
 .setColor(color)    
 .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
 .setTimestamp()


owners.send(embed);     
 }) 
  }
});
////remove warn
client.on("message" , message => {
  if(message.content.startsWith(prefix + "remove-warn")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let user = message.mentions.users.first()
    if(!user) return message.lineReply("❌ | **Mention a user**")
    if(user.bot) return message.lineReply("🙄 | **Bots don't have warns**")
    if(user.id == message.member.id) return message.lineReply("🙄 | **You can't remove from yourself**")
    if(!db.has(`warns_${user.id}`)) return message.lineReply("❌ | **This user doesn't have any warns**")
    db.subtract(`warns_${user.id}` , 1)
    message.lineReply(`> **Done removing 1 warn for ${user}**`)
  }
});


//////////tag


client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'tag') {
if(!message.member.hasPermission("MANAGE_NICKNAME")) {
return message.channel.send(`not enought perms`)
}

    let user = await message.mentions.members.first() || await message.guild.members.cache.get(args[0]);
    if(!user) return await message.lineReplyNoMention('__**User?**__');

    await user.setNickname(`tag ${user.user.username}`,'idk').then(async () => {
      await message.lineReplyNoMention('__**Done**__');
    }).catch(err => message.channel.send(`Erorr :${err}`));
  }
});

///suggestions
let sug = ['976867597100388382'];//channel sug

client.on('message', function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()     .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
.setColor(color)      .setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}  
message.channel.send(embed).then(msg => {
 msg.react('🔥').then(() => {
 msg.react('✨')
      })
    message.channel.send({files: [line]});
})
      }
});


///token

client.login(process.env.black)
///


