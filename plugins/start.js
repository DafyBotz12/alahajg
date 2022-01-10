let handler = async (m, { conn, text }) => {
try {
imeg = await conn.getProfilePicture(conn.user.jid)
} catch {
imeg = 'https://telegra.ph/file/06f39d57bd620ddcca93d.png'
}
 let buttons = [
  {buttonId: '/bantuan', buttonText: {displayText: '𝕷𝖎𝖘𝖙 𝕸𝖊𝖓𝖚'}, type: 1},
  {buttonId: '/info', buttonText: {displayText: '𝕾𝖙𝖆𝖚𝖘 𝕭𝖔𝖙'}, type: 1},
   {buttonId: '/owner', buttonText: {displayText: '𝕺𝖜𝖓𝖊𝖗 𝕭𝖔𝖙'}, type: 1}
]
const buttonsMessage = {
    contentText: `Hai ${conn.getName(m.sender)}

Call / VC Bot = Block
Spam Bot = Ban + Block

𝕾𝖔𝖈𝖎𝖆𝖑𝕲𝖗𝖔𝖚𝖕︎💬
https://chat.whatsapp.com/LAgFCZib3TxBgi2sPt9lJB

𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒 𝕺𝖜𝖓𝖊𝖗
https://instagram.com/raaihankhadafi8

𝕭𝖔𝖙 𝖂𝖆 𝕲𝖗𝖔𝖚𝖕
https://chat.whatsapp.com/G1UKOf248HZ7Zo4rBCMfx9

𝕸𝖆𝖐𝖆𝖘𝖎𝖍 𝖀𝖉𝖆𝖍 𝕲𝖚𝖓𝖆𝖎𝖓 𝕯𝖆𝖋𝖞 𝕭𝖔𝖙𝖟
𝕿𝖊𝖑𝖕𝖔𝖓 𝕭𝖔𝖙 = 𝕭𝖑𝖔𝖈𝖐
`.trim(),    footerText: '🔰𝕯𝖍𝖆𝖋𝖞 𝕭𝖔𝖙𝖟 𝕭𝖞 𝕽𝖆𝖎𝖍𝖆𝖓𝕶𝖍𝖆𝖉𝖆𝖋𝖞🔰',
    buttons: buttons,
  imageMessage: await conn.toMSG({ url: imeg }, 'imageMessage', { thumbnail: Buffer.alloc(0) }),
  headerType: 'IMAGE'
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ 
quoted: { 
  key: {
  fromMe: false,
  remoteJid: 'status@broadcast',
  participant: '0@s.whatsapp.net'
  },
  message: {
   conversation: 'Hello '+conn.getName(m.sender)+' 👋'
   }} })

conn.relayWAMessage(sendMsg)
}
handler.command = /^(help|menu)$/i

module.exports = handler


function waktu(seconds) { 
seconds = Number(seconds); 
var d = Math.floor(seconds / (3600 * 24)); 
var h = Math.floor(seconds % (3600 * 24) / 3600); var m = Math.floor(seconds % 3600 / 60); 
var s = Math.floor(seconds % 60); 
var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : ""; 
var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : ""; 
var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : ""; 
var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : ""; 
return dDisplay + hDisplay + mDisplay + sDisplay; 
}
