let handler = async (m, { conn, command, usedPrefix, text, groupMetadata }) => {

    let em = ['๐','๐','๐','๐','๐คค','๐ฅต','๐','๐','๐','๐ป','๐ฉ','๐ฅด','๐ค','๐ค']

    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let am = em.getRandom()
    conn.sendButton(m.chat, `Pero no tanto como la mama de ${toM(a)}`, author, null, [['Callate bot', 'calla bot']], m,{mentions: [a]})
}

handler.customPrefix = /^(facil|es facil|fรกcil|es fรกcil|fasil|es fasil|la chupa bien|se le da bien chupar|chupa bn|chupa bien|la chupa bn)/i
handler.command = new RegExp
handler.tags = ['fun']

export default handler
 