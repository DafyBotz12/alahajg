let handler = async (m, { conn, text }) => {
try {
imeg = await conn.getProfilePicture(conn.user.jid)
} catch {
imeg = 'https://telegra.ph/file/06f39d57bd620ddcca93d.png'
}
 let buttons = [
  {buttonId: '/bantuan', buttonText: {displayText: 'π·πππ πΈπππ'}, type: 1},
  {buttonId: '/info', buttonText: {displayText: 'πΎππππ π­ππ'}, type: 1},
   {buttonId: '/owner', buttonText: {displayText: 'πΊππππ π­ππ'}, type: 1}
]
const buttonsMessage = {
    contentText: `Hai ${conn.getName(m.sender)}

Call / VC Bot = Block
Spam Bot = Ban + Block

πΎππππππ²πππποΈπ¬
https://chat.whatsapp.com/LAgFCZib3TxBgi2sPt9lJB

π΄ππππππππ πΊππππ
https://instagram.com/raaihankhadafi8

π­ππ ππ π²ππππ
https://chat.whatsapp.com/G1UKOf248HZ7Zo4rBCMfx9

πΈππππππ ππππ π²πππππ π―πππ π­πππ
πΏπππππ π­ππ = π­ππππ
`.trim(),    footerText: 'π°π―ππππ π­πππ π­π π½ππππππΆπππππππ°',
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
   conversation: 'Hello '+conn.getName(m.sender)+' π'
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
