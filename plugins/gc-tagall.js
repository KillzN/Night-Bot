let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*🛍️https://chat.whatsapp.com/CCDGO1lIuH3Ggr4nA44cbY ${pesan}`
  let teks = `*⬇️Venta de 🤖 ,regedits 🖥️📱 ,sensibilidades📱 ,+ 30 metodos ,cuentas ff y mass⬇️*
   ${oi}\n\n🛍️ *@Ale.izn_20:*\n`
  for (let mem of participants) {
  teks += `⭐ @${mem.id.split('@')[0]}\n`}
  teks += `𝐁𝐎𝐓𝐂𝐈𝐓𝐎 𝐂𝐀𝐆𝐀 𝐇𝐈𝐄𝐋𝐎`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler