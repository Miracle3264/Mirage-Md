const { cmd, adelete, parsedJid, groupdb } = require('../lib/index')

cmd({
		pattern: 'delete ?(.*)',
		fromMe: true,
		desc: 'anti delete',
		filename: __filename,
		category: user,
		type: 'whatsapp',
	},
	async (message, match) => {
		const jid = parsedJid(match)[0]
		if (!match || (match != 'p' && match != 'g' && match != 'off' && !jid))
			return await message.send(
				"*Anti delete Message*\n*Example :* delete p | g | off\n p - Send deleted messages to your chat or sudo\n g - Send deleted Message on chat where it delete\njid - Send deleted Message to jid\n off - Don't do anything with delete (off)"
			)
		if (groupdb(jid)) {
			try {
				await message.groupMetadata(jid)
			} catch (error) {
				return await message.send(`_${jid} is invalid_`)
			}
		} else if (jid) {
			const exist = await message.onWhatsapp(jid)
			if (!exist) return await message.send(`_${jid} is invalid_`)
		}
		await adelete({ ANTI_DELETE: match })
		const msg = jid
			? `_Deleted Messages send to ${jid}_`
			: match == 'off'
			? '_Anti delete Disabled_'
			: match == 'p'
			? '_Deleted Messages send to your chat or sudo_'
			: '_Deleted Messages send to the chat itself_'
		await message.send(msg)
	}
)
