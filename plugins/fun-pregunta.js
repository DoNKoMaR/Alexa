let handler = async (m, { command, text }) => m.reply(`
ð¤ ðððððððð¼ ð¤
  
 ð¤ ðððððððð¼: ${text}
 â ððððððððð¼: ${['Si','Tal vez sÃ­','Tal vez no','Posiblemente','Probablemente no','Probablemente no','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i
export default handler
