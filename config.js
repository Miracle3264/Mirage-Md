const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' });

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ||  2347013159244,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://miracle32669:Iyanu1234@mirage.0zogh.mongodb.net/?retryWrites=true&w=majority&appName=Mirage"
global.port= process.env.PORT || 5000
global.email = 'miracle32669@outlook.com'
global.github = 'https://github.com/M3264/Mirage-Md'
global.location = 'Nigeria'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2347013159244'
global.devs = '2347013159244';
global.website = 'https://github.com/M3264/Mirage-Md' //wa.me/+23400000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/f5945740d07991c7ae698.jpg'
global.botname = process.env.BOT_NAME || 'ᴹᶦʳᵃᵍᵉ',
global.ownername = process.env.OWNER_NAME || 'M3264',
global.sessionName = process.env.SESSION_ID || "Mirage;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJGcTdyQ1RkV1p1am9QSnlwNURkRFplR3VSMUFsV0svVFBlRzJxMEZFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWpJV2p3ZXdGMVZ4d2NtekRZZ3FCMUhDSk5MaUxuTHd1K29QWkp2QkZnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRjRKTWhzNElacmlLaGl5eUg2YnViSkJRd1MrTmVzTUZTRFpJUDVpNjNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBK1pmMTlFYitOVWxsd1dObkJLQ01XOVBPeTFIcXdEK0YwcnJWMjFVeUZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldDdDRlSjBJcHR1WC9HK2kwWHk1QU05OEc5ajNRczV0ZC8rNFZaRWZkVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFSbFdXRE42SzVtemhIUzlUbVVUZmhMUXFHT1U5dm5KZ1VmRklOQkRHajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNaSVpRbDZFWHVFVFRCMXh1T0M2THRLWGQvQUlOWnE3V0g2Q1lQYnpIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnhQeHFubmFvWEpWZm91Z2JEc1o3emRXbnp3ejBIT2NIRXEzVFdqeHhBUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp1aWZTMUFBSmNibmM5dldpMThRVUtrTEtWTFI3eWpmbFBMcTk4WHM4M2pxOWNTYWQ4cDNJUTVwdGk1ckpvMEpGWjhCb2JTQldENGRyVWNjSWlLNkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJVSVg3QWNRVktZbmdWNG5IbzdudWpQbElabTkxUFhPdFZLVGViVkZ4SC93PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPa2dBZDhjUVF5Mmo5WEdiOGhGSG13IiwicGhvbmVJZCI6IjQ0MDdkN2E1LTZiMzUtNGYzMC04YmU0LTZlMGExMmZlYzY0NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2RmlvdVZqY1ZPenVzbUQzWjZJRDBJSk1HakU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2tWODBDaUo4UUo5UzFtVnRqUFMzSjY5K0lvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldRM0JZQjU0IiwibWUiOnsiaWQiOiIyMzQ3MDEzMTU5MjQ0OjMyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuGVmeKBoCjigaDCoOKBoMKg4oGg4oCi4oGgwqDigaDigL/igaDCoOKBoOKAouKBoMKg4oGgwqDigaAp4oGg4ZWXIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOKzVtSllHRUkvQjNMVUdHQ0VnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2U2Z6eUhRV21xZm1lZ0hkb3V6WEV4QWwzNjBlK3dpSlV2RnE4bzZaekc0PSIsImFjY291bnRTaWduYXR1cmUiOiJkUFhNT2JNZXZwVkRhN2Q1U05Fd0xnMytmZGRVdzBqcnB6bmEzZlBzSWlKVFdXdHBwdFJtakNib1BXWENaVXlOTUhZenkrOFlLY3VXZFYzd21LTmtDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZTNSaFBHNFZGditueW1zdXM5UER6elhudGwxU3AwM0Fmb2Jyc0k4cjZZYjlISkc1OTBYNGhUZnEwb3F1UVhvMCtqTmMyZi9kdGFpcG9zK3BkVzJVQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDEzMTU5MjQ0OjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmIwbjg4aDBGcHFuNW5vQjNhTHMxeE1RSmQrdEh2c0lpVkx4YXZLT21jeHUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMyNzc0NjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTjJWIn0=",
global.author = process.env.PACK_INFO || 'M3264',
global.auto_read_status = process.env.AUTO_READ_STATUS || true,
global.packname = process.env.PACK_INFO || 'Mirage-Md',
global.autoreaction = process.env.AUTO_REACTION  || false,
global.antibadword = process.env.ANTI_BAD_WORD ||  'true',
global.alwaysonline = process.env.ALWAYS_ONLINE || 'true',
global.antifake = process.env.FAKE_COUNTRY_CODE || '971',
global.readmessage = process.env.READ_MESSAGE || 'false',
global.caption = process.env.CAPTION || 'Generated with 🖤',
global.auto_status_saver = process.env.AUTO_STATUS_SAVER || 'true',
global.HANDLERS = process.env.PREFIX || '.',
global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || 'false',
global.levelupmessage = process.env.LEVEL_UP_MESSAGE || 'false',
global.antilink = process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
global.antilinkaction = process.env.ANTILINK_ACTION || 'remove',
global.BRANCH = 'main',
global.ANTI_DELETE = '2349017321997@s.whatsapp.net',
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || '`Hallo👋 Mirage-Md is Alive $ Active`',
global.autobio = process.env.AUTO_BIO || 'false',
global.OPENAI_API_KEY = process.env.OPENAI_API_KEY || 'false',
global.heroku = process.env.heroku || 'false',
global.HEROKU = process.env.HEROKU || 'false',
global.API_KEY = process.env.HEROKU_API_KEY || '',
global.APP_NAME = process.env.HEROKU_APP_NAME || '',
global.VERSION = process.env.VERSION || 'v.0.0.1',
global.LANG = process.env.THEME || 'MIRAGE',
global.WORKTYPE = process.env.WORKTYPE || 'public'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
