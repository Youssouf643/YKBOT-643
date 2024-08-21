const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = wait yts(q)
const data = search.video[0];
const url = data.url

let desc = `
🦅 *YKBOT-643 SONG DOWNLOADER* 🦅

title: ${data.title}
description: ${data.description}
time: ${data.timetamp}
ago: ${data.ago}
views: ${data.views}

MADE BY YOUSSOUF YK🦅
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = wait fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await conn.sendMessage(fron,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek});
await conn.sendMessage(fron,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"MADE BY YOUSSOUF YK 🦅"},{quoted:mek})




}catch(e){
console.log(e)
reply(`${e}`)
}
})

//==========video-dl==========

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me url or title")
const search = wait yts(q)
const data = search.video[0];
const url = data.url

let desc = `
🦅 *YKBOT-643 VIDEO DOWNLOADER* 🦅

title: ${data.title}
description: ${data.description}
time: ${data.timetamp}
ago: ${data.ago}
views: ${data.views}

MADE BY YOUSSOUF YK🦅
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = wait fg.ytv(url)
let downloadUrl = down.dl_url

//send video + document message
await conn.sendMessage(fron,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(fron,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"MADE BY YOUSSOUF YK"},{quoted:mek})




}catch(e){
console.log(e)
reply(`${e}`)
}
})

