import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['971501230793', 'AHL-TECH MD BOT', true],
  ['971501230793', 'AHL-TECH MD BOT', true], 
  [''] 
] //Number of owners

global.mods = ['971501230793','966505459075'] 
global.prems = ['971501230793', '966505459075', '923342424026']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '💝AHL-TECH MD BOT💝'
global.premium = 'true'
global.packname = '💝 AHL-TECH MD BOT 💝 Created By 💝 FARHAN-SIAL💝' 
global.author = '💝 FARHAN-SIAL 💝' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/handsome_.killer\n' 
global.dygp = 'https://chat.whatsapp.com/Gki0iBj2jNK0aP9r5ITCXi'
global.fgsc = 'https://youtube.com/@ahltech' 
global.fgyt = 'https://chat.whatsapp.com/Gki0iBj2jNK0aP9r5ITCXi'
global.fgpyp = 'https://chat.whatsapp.com/Gki0iBj2jNK0aP9r5ITCXi'
global.fglog = 'https://i.ibb.co/T1DqdYz/thumbnail.jpg' 


global.wait = '*💝 _Waiting Bro Uploading by 💝 AHL-TECH MD BOT 💝..._*'
global.rwait = '🇱🇰'
global.dmoji = '🤣'
global.done = '👍'
global.error = '👎' 
global.xmoji = '🫶' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
