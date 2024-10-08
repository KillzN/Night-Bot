// adaptado por Diego : 𝐍𝐈𝐆𝐇𝐓 𝐁𝐎𝐓 - BOT

import axios from 'axios';

let previousCommitSHA = '';
let previousUpdatedAt = '';
let previousCommitUser = ''; 
const owner = 'Night';
const repo = '𝐍𝐈𝐆𝐇𝐓 𝐁𝐎𝐓 - BOT';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.owner_actualizacion

 conn.sendMessage(m.chat, {text: tradutor.texto1}, {quoted: m});  
try {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
      const {sha, commit: {message}, html_url, author: { login } } = response.data[0];

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha;
        previousUpdatedAt = message;
        previousCommitUser = login
        conn.sendMessage(m.chat, {text: `${tradutor.texto2[0]} ${html_url}\n${tradutor.texto2[1]} ${message}\n${tradutor.texto2[2]} ${login}`}, {quoted: m});
      }
    } catch (error) {
      console.error(error)
      m.reply(tradutor.texto3);
    }
  }
  setInterval(checkRepoUpdates, 6000);
} catch (e) {
m.reply(e)
}
};
handler.command = /^(actualizaawdacion|acdtualizaciones)/i;
handler.rowner = true;
export default handler;
