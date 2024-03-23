
try {
  
    // Seu código aqui
    const { default: makeWASocket,prepareWAMessageMedia, makeCacheableSignalKeyStore, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');
    ///////////////////////////////////////////////
    //PEDEM DE MUDELE
    ///////////////////////////////////////////////
    const mimetype = require("mime-types")
    const ffmpeg = require('./node_modules/fluent-ffmpeg');
    const fs = require('fs');
    const P = require('pino');
    //const { node-webpmux } = require("node-webpmux")
    const ytts = require("yt-search");
    const ytttts = require("yt-search");
    const vCardsJS = require('vcards-js');
    const { writeFile } = require('fs/promises')
    const { downloadMediaMessage }  = require('@whiskeysockets/baileys')
    const yttts = require("yt-search");
    const chalk = require('chalk')
    const moment = require('moment-timezone')
    const clc = require('cli-color')
    const hx = require("hxz-api")
    const NodeCache = require('node-cache');
    const uber = require('uberduck-api')
    const cheerio = require("cheerio");
    const readline = require("readline");
    const axios = require('axios');
    const thiccysapi = require('textmaker-thiccy');
    ///////////////////////////////////////////////
    let bancht = JSON.parse(fs.readFileSync('./functions/banchat.json'));
    const linkNeroV1 = JSON.parse(fs.readFileSync("./functions/fotos/logo.json"))
    const infoBot = JSON.parse(fs.readFileSync('./config.json'));
    ///////////////////////////////////////////////
    const imagemdomenu = "https://telegra.ph/file/41e27ca006bb7488f155d.png"
    //  "https://telegra.ph/file/899eeb68fbedb64c2d926.jpg"
  
    const { palavras } = require('./functions/conselhos.js');
    const { ytv } = require('./functions/y2mate.js')
    const { fromBuffer } = require("file-type");
    //const { ia } = require('./datab/js/ia')
    //const welcome_group = JSON.parse(fs.readFileSync('./functions/welcomegp.json'));
    //const writeExifImg = require("./functions/exif")
    const bye_group2 = JSON.parse(fs.readFileSync('./functions/byegp.json'));
    const { insert, response } = require('./functions/simi.js');
    ///////////////////////////////////////////////
    const premium = JSON.parse(fs.readFileSync('./functions/premium.json'));
    const { Youtube } = require('ytdownloader.js')
    const antidoc = JSON.parse(fs.readFileSync('./functions/antidoc.json'))
    const antiimg = JSON.parse(fs.readFileSync('./functions/antiimg.json'))
    const lista = JSON.parse(fs.readFileSync('./functions/lista.json'))
    const sotoy = JSON.parse(fs.readFileSync('./functions/sotoy.json'))
    const antiaudio = JSON.parse(fs.readFileSync('./functions/antiaudio.json'))
    const antisticker = JSON.parse(fs.readFileSync('./functions/antisticker.json'))
    const antivid = JSON.parse(fs.readFileSync('./functions/antivideo.json'))
    const autoreact = JSON.parse(fs.readFileSync('./functions/autoreact.json'))
  
    ///////////////////////////////////////////////
    const { runtime } = require("./functions/myfunc")
    const { convertSticker } = require("./functions/swm.js");
    const { isUrl } = require("./functions/lib/myfunc.js")
    const { EmojiAPI } = require("emoji-api")
    const autofigu = JSON.parse(fs.readFileSync('./functions/autofigu.json'))
    const usedCommandRecently = new Set()
    let autosticker = JSON.parse(fs.readFileSync('./functions/autosticker.json'));
    const { menuprem } = require("./functions/menuprem.js")
    const { palavrasANA, quizanime, quizanimais } = require('./functions/jogos.js');
    const { exec, spawn, execSync } = require("child_process")
    const speed = require("performance-now");
    const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) }
    const { getBuffer, getRandom, getExtension } = require('./functions/lib/functions.js');
    const { fetchJson } = require("./functions/lib/fetcher")
    const { validmove, setGame } = require('./functions/tictactoe');
    const { TextoDoBemvindo } = require("./info/TextoDoBemvindo.js")
    const { TextoDoSaiu } = require("./info/TextoDoBemvindo.js")
    const { Aki } = require('aki-api')
    const { Error } = JSON.parse(fs.readFileSync('./functions/Erro.json'))
    let fotomenu = fs.readFileSync("./loli/image/menu.jpg");
  
    ///////////////////////////////////////////////
  
    //====== defina ======\\
  
    var prefix = infoBot.prefix //prefixo 
  
    var nomeBot = infoBot.nomeBot// nome do bot 
  
    var NomeBot = infoBot.nomeBot// nome do bot 
  
    var nomeDono = infoBot.nomeDono// nome do dono 
  
    var SoDono = infoBot.numeroDono
  
    var link = infoBot.link
  
    logo = linkNeroV1.logo
  
    var numeroDono = infoBot.numeroDono
  
    ///////////////////////////////////////////////
    const groupIdWelcomed = []
    const welcome_group = JSON.parse(fs.readFileSync('./functions/welcomegp.json'));
    const antipv = JSON.parse(fs.readFileSync('./functions/antipv.json'))
    const antilinkgp = JSON.parse(fs.readFileSync('./functions/antilinkgp.json'))
    const welkom = JSON.parse(fs.readFileSync('./functions/welkom.json'));
    const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
  
    const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
  
    const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
  
    const welkom2 = JSON.parse(fs.readFileSync('./functions/welkom.json'));
    const welcome_group2 = JSON.parse(fs.readFileSync('./functions/welcomegp.json'));
    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text)
    }
    const cfonts = require('cfonts')
  
    const { 
     Random
      } = require("./loli/browser/get.js")
  
    const useStore = !process.argv.includes('--no-store')
    const doReplies = !process.argv.includes('--no-reply')
    const useMobile = process.argv.includes('--mobile')
    const usePairingCode = process.argv.includes('--use-pairing-code')
    const msgRetryCounterCache = new NodeCache();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    async function starts() {
      const { state, saveCreds } = await useMultiFileAuthState('./WhatsApp-Conexao')
      const { version } = await fetchLatestBaileysVersion();
      const question = (text) => new Promise((resolve) => rl.question(text, resolve));
      const store = makeInMemoryStore({
        logger: P().child({
          level: 'debug',
          stream: 'store'
        })
      })
  
      const client = makeWASocket({
          version,
          logger: P({ level: "silent" }),
          usePairingCode,
          mobile: false,
          browser: ["Chrome (linux)"],
          auth: state,
          msgRetryCounterCache,
          defaultQueryTimeoutMs: undefined,
          patchMessageBeforeSending: (message) => {
              const requiresPatch = !!(message.buttonsMessage || message.listMessage);
              if (requiresPatch) {
                  message = {
                      viewOnceMessage: {
                          message: {
                              messageContextInfo: {
                                  deviceListMetadataVersion: 2,
                                  deviceListMetadata: {},
                              }, ...message
                          }
                      }
                  }
              }
              return message;
          }
      });
  
      //console.log(banner.string)
      console.log('[ speN 6.0 online ]')
      
  function limparNumero(entrada) {
      const numeros = entrada.replace(/\D/g, '');
      const numeroLimpo = numeros.replace(/^(\d{2})(9)?(\d{8,9})$/, '$1$3');
      return numeroLimpo;
  }
  
      if (!client.authState.creds.registered) {
          const phoneNumber = await question(`\nDigite seu número do WhatsApp:\nEx: ${clc.bold("+55 75 9865-6060")}\n `);
  const numeroLimpo = limparNumero(phoneNumber);
          const code = await client.requestPairingCode(numeroLimpo);
          console.log(`Seu código de conexão é: \n\n ${clc.bold(code)}\n~>`);
          console.log(`Abra seu WhatsApp, vá em ${clc.bold("Aparelhos Conectados > Conectar um novo Aparelho > Conectar usando Número.")}`)
      }
  
      store.bind(client.ev)
  
      client.ev.on("creds.update", saveCreds)
      store.bind(client.ev)
      client.ev.on("chats.set", () => {
          console.log("Tem conversas", store.chats.all())
      })
      client.ev.on("contacts.set", () => {
          console.log("Tem contatos", Object.values(store.contacts))
      })
      // CONEXÃO ATUALIZAÇÃO 
      client.ev.on("connection.update", (update) => {
          const { connection, lastDisconnect } = update
          if (connection === "close") {
              const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
              console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
              if (shouldReconnect) {
                  starts()
              }
  
          } else if (connection === "open") {
              console.log(chalk.keyword("red")("Conectado com sucesso!"));
          }
      })
      // Evento de mensagem
  
  
  
      function DLT_FL(file) {
        try {
          fs.unlinkSync(file);
        } catch (error) {
          return;
        }
      }
  
      ///////////////////////////////////////////////
      //FUNÇÃO DO BEM VINDO//
      ///////////////////////////////////////////////
      const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
  
      const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
  
      const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
  
      client.ev.on('group-participants.update', async (anu) => {
        ale = anu
        conn = client
  
        const grpmdt = await client.groupMetadata(ale.id);
  
        const isGroup2 = grpmdt.id.endsWith('@g.us');
  
        const GroupMetadata_ = isGroup2 ? await client.groupMetadata(ale.id) : "";
        const mdata_ = isGroup2 ? await client.groupMetadata(ale.id) : "";
  
  
        if (welkom2.includes(ale.id)) {
          //if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
          try {
            let metadata = await client.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
  
              try {
                ppimg = await client.profilePictureUrl(anu.participants[0])
              } catch {
                ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
              }
  
              memb = metadata.participants.length
  
              if (anu.action == 'add') {
                num = anu.participants[0]
  
                client.sendMessage(anu.id, {
                  image: { url: imagemdomenu }, caption: `❤Bem♤vindo(a) 𝘢𝘰 𝘨𝘳𝘶𝘱𝘰:\n*${metadata.subject}*\nLEIA REGRAS E SEJA BEM VINDO(A)\n\n\n${NomeDoBot}`, headerType: 4
                })
              } else if (anu.action == 'remove') {
                client.sendMessage(anu.id, { image: { url: imagemdomenu }, caption: `OLA POVO DO GRUPO:\n*${metadata.subject}*\n\nO Membro: @${num.split('@')[0]}\n\nSaiu do Grp ou foi Banido.` })
              }
            }
          } catch (err) {
            console.log(err)
          }
  
        }
  
      })
  
  
      // MENSAGEM ATUALIZAÇÃO 
      client.ev.on('messages.upsert', async connection => {
        //console.log(connection)
        const info = connection.messages[0];
        //if (info.key.fromMe) return;
        if (connection.type != 'notify') return;
        if (info.key.remoteJid === 'status@broadcast') return;
        try {
          function getGroupAdmins(participants) {
            admins = []
            for (let i of participants) {
              if (i.admin == 'admin') admins.push(i.id)
              if (i.admin == 'superadmin') admins.push(i.id)
            }
            return admins
          }
          const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
          }
          const getExtension = async (type) => {
            return await mimetype.extension(type)
          }
          const getBuffer = (url, options) => new Promise(async (resolve, reject) => {
            options ? options : {}
            await axios({ method: "get", url, headers: { "DNT": 1, "Upgrade-Insecure-Request": 1 }, ...options, responseType: "arraybuffer" }).then((res) => {
              resolve(res.data)
            }).catch(reject)
          })
  
          ///////////////////////////////////////////////
          //**************[ functions ]**************//
          ///////////////////////////////////////////////
  
          const donoOficial = [`@s.whatsapp.net`]
          //const info = msg.messages[0]
          if (!info.message) return
          if (info.key && info.key.remoteJid == 'status@broadcast') return
          const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
          const content = JSON.stringify(info.message);
          const altpdf = Object.keys(info.message)
          global.prefix
          const from = info.key.remoteJid
          var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""
  
          const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
          const reply = (text) => {
            client.sendMessage(from, { text: text }, { quoted: info })
          }
  
          const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant
          var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
          const quoted = info.quoted ? info.quoted : info
          ///////////////////////////////////////////////
          //********IS DO ANTIPV***********\\
          ///////////////////////////////////////////////
          const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false
          ///////////////////////////////////////////////
          //*****functions DO ANAGRAMA E LEVEL*******
          ///////////////////////////////////////////////
  
          const pushname = info.pushName ? info.pushName : ''
          const username = info.username ? info.username : ''
          const _level = JSON.parse(fs.readFileSync('./functions/level.json'))
          const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
              if (_level[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              _level[position].xp += amount
              fs.writeFileSync('./functions/level.json', JSON.stringify(_level))
            }
          }
          const isGroup = info.key.remoteJid.endsWith('@g.us')
          const sender = isGroup ? info.key.participant : info.key.remoteJid
          if (isGroup && fs.existsSync(`./functions/anagrama-${from}.json`)) {
            let dataAnagrama = JSON.parse(fs.readFileSync(`./functions/anagrama-${from}.json`))
            if (budy.slice(0, 4).toUpperCase() == dataAnagrama.original.slice(0, 4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
            xp = Math.floor(Math.random() * 14) + 3000
            if (budy.toUpperCase() == dataAnagrama.original) {
  
              let ano = {
                image: { url: logo },
                caption: `
    parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos..
    `,
                lfooter: "",
                //buttons: buttons,
                headerType: 4
              }
  
              client.sendMessage(from, ano, { "mentionedJid": [sender] }), fs.unlinkSync(`./functions/anagrama-${from}.json`)
              addLevelingXp(sender, xp)
              recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
              reply(recompensa)
              setTimeout(async () => {
                fs.writeFileSync(`./functions/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
                let dataAnagrama2 = JSON.parse(fs.readFileSync(`./functions/anagrama-${from}.json`))
  
                let ani = {
                  image: { url: logo },
                  caption: `
    ╭─────≽「 👾 ANAGRAMA 👾 」
    │🍉➽ DESCUBRA A PALAVRA
    │🍉➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
    │🍉➽ DICA: ${dataAnagrama2.dica}
    ╰────────────────────────
    `,
                  lfooter: `${nomeBot}`,
                  //buttons: buttons,
                  headerType: 4
                }
  
                client.sendMessage(from, ani)
              }, 5000)
            }
          }
          ///////////////////////////////////////////////
          //DEFINIÇÕES DO LEVELING
          ///////////////////////////////////////////////
  
          const anuncio = (text) => {
            client.sendMessage(from, {
              text: text,
              contextInfo: {
                "externalAdReply": {
                  title: `${NomeDoBot}`,
                  mediaType: 1,
                  renderLargerThumbnail: false,
                  showAdAttribution: true,
                  body: `𝑩𝒚 ${nomeDono}`,
                  thumbnail: { url: `https://telegra.ph/file/899eeb68fbedb64c2d926.jpg` },
                  mediaUrl: `${q}`,
                  sourceUrl: `${q}`,
                  headerType: 4
                }
              }
            })
          }
  
          const _leveling = JSON.parse(fs.readFileSync('./functions/lib/leveling.json'))
          const levelingOn = JSON.parse(fs.readFileSync('./functions/lib/leveling.json'))
          const isLevelingOn = isGroup ? _leveling.includes(from) : true
          const { getUserRank, addCooldown, leveltab } = require('./functions/lib/leveling.js')
          const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
              if (_level[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              return _level[position].xp
            }
          }
          const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
              if (_level[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              return _level[position].level
            }
          }
          const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
              if (_level[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              return _level[position].jid
            }
          }
  
  
          const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
              if (_level[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              _level[position].level += amount
              fs.writeFileSync('./functions/level.json', JSON.stringify(_level))
            }
          }
          const addLevelingId = (userId) => {
            const obj = { jid: userId, xp: 1, level: 1 }
            _level.push(obj)
            fs.writeFileSync('./functions/level.json', JSON.stringify(_level))
          }
          /********** FUCTION LEVELING **********/
          var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
          const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
          const perl = peri - getLevelingXp(sender)
          const resl = Math.round(100 - ((perl / getLevelingXp(sender)) * 100))
          if (resl <= 10) {
            per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
          } else if (resl <= 20) {
            per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
          } else if (resl <= 30) {
            per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
          } else if (resl <= 40) {
            per = `*[████▒▒▒▒▒▒] ${resl}%*`
          } else if (resl <= 50) {
            per = `*[█████▒▒▒▒▒] ${resl}%*`
          } else if (resl <= 60) {
            per = `*[██████▒▒▒▒] ${resl}%*`
          } else if (resl <= 70) {
            per = `*[███████▒▒▒] ${resl}%*`
          } else if (resl <= 80) {
            per = `*[████████▒▒] ${resl}%*`
          } else if (resl <= 90) {
            per = `*[█████████▒] ${resl}%*`
          } else if (resl <= 100) {
            per = `*[██████████] ${resl}%*`
          }
          const levelRole = getLevelingLevel(sender)
          var role = 'Bronze I🥉'
          if (levelRole <= 3) {
            role = 'Bronze I 🥉'
          } else if (levelRole <= 5) {
            role = 'Bronze II 🥉'
          } else if (levelRole <= 10) {
            role = 'Bronze III 🥉'
          } else if (levelRole <= 15) {
            role = 'Bronze IV 🥉'
          } else if (levelRole <= 20) {
            role = 'Bronze V 🥉'
          } else if (levelRole <= 25) {
            role = 'Prata I 🥈'
          } else if (levelRole <= 30) {
            role = 'Prata II 🥈'
          } else if (levelRole <= 35) {
            role = 'Prata III 🥈'
          } else if (levelRole <= 40) {
            role = 'Prata IV 🥈'
          } else if (levelRole <= 45) {
            role = 'Prata V 🥈'
          } else if (levelRole <= 50) {
            role = 'Ouro I 🥇'
          } else if (levelRole <= 55) {
            role = 'Ouro II 🥇'
          } else if (levelRole <= 60) {
            role = 'Ouro III 🥇'
          } else if (levelRole <= 65) {
            role = 'Ouro IV 🥇'
          } else if (levelRole <= 70) {
            role = 'Ouro V 🥇'
          } else if (levelRole <= 75) {
            role = 'Campeão I 🏆'
          } else if (levelRole <= 80) {
            role = 'Campeão II 🏆'
          } else if (levelRole <= 85) {
            role = 'Campeão III 🏆'
          } else if (levelRole <= 90) {
            role = 'Campeão IV 🏆'
          } else if (levelRole <= 95) {
            role = 'Campeão V 🏆'
          } else if (levelRole <= 100) {
            role = 'Diamante I 💎'
          } else if (levelRole <= 110) {
            role = 'Diamante II 💎'
          } else if (levelRole <= 120) {
            role = 'Diamante III 💎'
          } else if (levelRole <= 130) {
            role = 'Diamante IV 💎'
          } else if (levelRole <= 140) {
            role = 'Diamante V 💎'
          } else if (levelRole <= 150) {
            role = 'Mestre I 🔥'
          } else if (levelRole <= 170) {
            role = 'Mestre II 🔥'
          } else if (levelRole <= 180) {
            role = 'Mestre III 🔥'
          } else if (levelRole <= 190) {
            role = 'Mestre IV 🔥'
          } else if (levelRole <= 200) {
            role = 'Mestre V 🔥'
          } else if (levelRole <= 250) {
            role = 'Mítico I 🔮'
          } else if (levelRole <= 300) {
            role = 'Mítico II 🔮'
          } else if (levelRole <= 350) {
            role = 'Mítico III 🔮'
          } else if (levelRole <= 400) {
            role = 'Mítico IV 🔮'
          } else if (levelRole <= 450) {
            role = 'Mítico V 🔮'
          } else if (levelRole <= 500) {
            role = 'Lenda I ⚡'
          } else if (levelRole <= 550) {
            role = 'Lenda II ⚡'
          } else if (levelRole <= 600) {
            role = 'Lenda III ⚡'
          } else if (levelRole <= 650) {
            role = 'Lenda IV ⚡'
          } else if (levelRole <= 700) {
            role = 'Lenda V ⚡'
          } else if (levelRole <= 750) {
            role = 'Lendário I 🎑'
          } else if (levelRole <= 800) {
            role = 'Lendário II 🎑'
          } else if (levelRole <= 850) {
            role = 'Lendário III 🎑'
          } else if (levelRole <= 900) {
            role = 'Lendário IV 🎑'
          } else if (levelRole <= 910) {
            role = 'Lendário V 🎑'
          } else if (levelRole <= 920) {
            role = 'EL MESTRE I 🏅'
          } else if (levelRole <= 930) {
            role = 'EL MESTRE II 🏅'
          } else if (levelRole <= 940) {
            role = 'EL MESTRE III 🏅'
          } else if (levelRole <= 950) {
            role = 'EL MESTRE IV 🏅'
          } else if (levelRole <= 10000) {
            role = '⚡️ BRIGADEIRO ⚡️'
          }
          if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
              if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
              const amountXp = Math.floor(Math.random() * 10) + 500
              const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
              const getLevel = getLevelingLevel(sender)
              addLevelingXp(sender, amountXp)
              if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)
                await client.sendMessage(sender, { text: `*「 LEVEL UP 」*\n\n➸ *Nome*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎉🎉` })
              }
            } catch (err) {
              console.error(err)
            }
          }
          const getLevel = getLevelingLevel(sender)
          const tictactoe = JSON.parse(fs.readFileSync('./functions/database/tictactoe.json'));
          const registros = JSON.parse(fs.readFileSync("./functions/registros.json"))
          const isRegistro = registros.includes(sender)
  
          const addTTTId = (userId) => {
            const obj = { jid: userId, wins: 0, defeats: 0, ties: 0, points: 0 }
            tictactoe.push(obj)
            fs.writeFileSync('./functions/database/tictactoe.json', JSON.stringify(tictactoe))
          }
  
          const addTTTwin = (userId, amount) => {
            let position = false
            Object.keys(tictactoe).forEach((i) => {
              if (tictactoe[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              tictactoe[position].wins += amount
              fs.writeFileSync('./functions/database/tictactoe.json', JSON.stringify(tictactoe))
            }
          }
  
          const addTTTdefeat = (userId, amount) => {
            let position = false
            Object.keys(tictactoe).forEach((i) => {
              if (tictactoe[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              tictactoe[position].defeats += amount
              fs.writeFileSync('./functions/database/tictactoe.json', JSON.stringify(tictactoe))
            }
          }
  
          const addTTTtie = (userId, amount) => {
            let position = false
            Object.keys(tictactoe).forEach((i) => {
              if (tictactoe[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              tictactoe[position].ties += amount
              fs.writeFileSync('./functions/database/tictactoe.json', JSON.stringify(tictactoe))
            }
          }
  
          const addTTTpoints = (userId, amount) => {
            let position = false
            Object.keys(tictactoe).forEach((i) => {
              if (tictactoe[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              tictactoe[position].points += amount
              fs.writeFileSync('./functions/database/tictactoe.json', JSON.stringify(tictactoe))
            }
          }
  
          const getTTTId = (userId) => {
            let position = false
            Object.keys(tictactoe).forEach((i) => {
              if (tictactoe[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              return tictactoe[position].jid
            }
          }
  
          const getTTTwins = (userId) => {
            let position = false
            Object.keys(tictactoe).forEach((i) => {
              if (tictactoe[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              return tictactoe[position].wins
            }
          }
  
          const getTTTdefeats = (userId) => {
            let position = false
            Object.keys(tictactoe).forEach((i) => {
              if (tictactoe[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              return tictactoe[position].defeats
            }
          }
  
          const getTTTties = (userId) => {
            let position = false
            Object.keys(tictactoe).forEach((i) => {
              if (tictactoe[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              return tictactoe[position].ties
            }
          }
  
          const getTTTpoints = (userId) => {
            let position = false
            Object.keys(tictactoe).forEach((i) => {
              if (tictactoe[i].jid === userId) {
                position = i
              }
            })
            if (position !== false) {
              return tictactoe[position].points
            }
          }
  
          ///////////////////////////////////////////////
          // IS DE functions PARA ADM
          ///////////////////////////////////////////////
  
          const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false
          const Antidoc = isGroup ? antidoc.includes(from) : false
          const isAntiAudio = isGroup ? antiaudio.includes(from) : false
          const isAntiVid = isGroup ? antivid.includes(from) : false
          const isAntiImg = isGroup ? antiimg.includes(from) : false
          const isAntiSticker = isGroup ? antisticker.includes(from) : false
          const isAutoReact = isGroup ? autoreact.includes(from) : false
          const isAutoSticker = isGroup ? autosticker.includes(from) : false
          const isBanchat = isGroup ? bancht.includes(from) : false
          const isWelkom = isGroup ? welkom.includes(from) : false
          const emoji = new EmojiAPI()
          const isPremium = premium.includes(sender)
  
          ///////////////////////////////////////////////
          //functions PARA COMANDO DE GRUPO
          ///////////////////////////////////////////////
  
          const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
          const groupName = isGroup ? groupMetadata.subject : ''
          selectedButton = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
          const groupDesc = isGroup ? groupMetadata.desc : ''
          const participants = isGroup ? await groupMetadata.participants : ''
          const groupMembers = isGroup ? groupMetadata.participants : ''
          const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
          const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
          const argss = body.split(/ +/g)
          const botNumber = client.user.id.split(':')[0] + '@s.whatsapp.net'
          const args = body.trim().split(/ +/).slice(1);
          const text = args.join(" ")
          const menc_jid = args.join(" ").replace("@", "") + "@s.whatsapp.net"
          const isCmd = body.startsWith(prefix);
          const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
          const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? client.sendMessage(from, { text: teks.trim(), mentions: memberr }) : client.sendMessage(from, { text: teks.trim(), mentions: memberr })
          }
  
          const addFilter = (sender) => {
            usedCommandRecently.add(sender)
            setTimeout(() => usedCommandRecently.delete(sender), 4000)
          }
  
  
          const groupIdWelcomed = []
          for (let obj of welcome_group) groupIdWelcomed.push(obj.id)
  
          const groupIdBye = []
          for (let obj of bye_group2) groupIdBye.push(obj.id)
  
          const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false
  
          const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false
          ///////////////////////////////////////////////
          //ISQUOTED
          ///////////////////////////////////////////////
          const isImage = type == 'imageMessage'
          const isVideo = type == 'videoMessage'
          const isAudio = type == 'audioMessage'
          const isSticker = type == 'stickerMessage'
          const isContact = type == 'contactMessage'
          const isLocation = type == 'locationMessage'
          const isProduct = type == 'productMessage'
          const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
          typeMessage = body.substr(0, 50).replace(/\n/g, '')
          if (isImage) typeMessage = "Image"
          else if (isVideo) typeMessage = "Video"
          else if (isAudio) typeMessage = "Audio"
          else if (isSticker) typeMessage = "Sticker"
          else if (isContact) typeMessage = "Contact"
          else if (isLocation) typeMessage = "Location"
          else if (isProduct) typeMessage = "Product"
          const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
          const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
          const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
          const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
          const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
          const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
          const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
          const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
          const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
          const getFileBuffer = async (mediakey, MediaType) => {
            const stream = await downloadContentFromMessage(mediakey, MediaType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
              buffer = Buffer.concat([buffer, chunk])
            }
            return buffer
          }
          const isGroupAdmins = groupAdmins.includes(sender) || false
          const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
  
          ///////////////////////////////////////////////
          //FUNÇÃO DE DONO 
          ///////////////////////////////////////////////
          const isOwner = sender.includes(`${infoBot.numeroDono}@s.whatsapp.net`)
          /////////////////////////////////////////////////
  
  
          q = args.join(" ")
  
          const sendBtext = async (id, text1, desc1, but = [], vr) => {
            buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
            client.sendMessage(id, buttonMessage, { quoted: vr })
          }
  
          const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
            buttonMessage = { image: { url: img1 }, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
            client.sendMessage(id, buttonMessage, { quoted: vr })
          }
  
          const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
            templateMessage = { image: { url: img1 }, caption: text1, footer: desc1, templateButtons: but, }
            client.sendMessage(id, templateMessage, { quoted: vr })
          }
  
          const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => {
            buttonMessage = { video: { url: gif1 }, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
            client.sendMessage(id, buttonMessage, { quoted: vr })
          }
          //*******************************************//
  
  
          // VERIFICADOS ⭐️
          const live = info
          const imgm = info
          const vid = info
          const contato = info
          const doc = info
  
  
          const argsButton = selectedButton.trim().split(/ +/)
          const dbids = []
          for (i = 0; i < lista.length; ++i) {
            dbids.push(lista[i].groupId)
          }
          const islista = (isGroup && dbids.indexOf(from) >= 0) ? true : false
  
  
  
          const enviarfigu = async (figu, tag) => {
            bla = fs.readFileSync(figu)
            client.sendMessage(from, { sticker: bla }, { quoted: info })
          }
  
          const enviarfiguUrl = async (link) => {
            ranp = getRandom('.gif')
            rano = getRandom('.webp')
            ini_buffer = `${link}`
            exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
              fs.unlinkSync(ranp)
              buff = fs.readFileSync(rano)
              client.sendMessage(from, { sticker: buff }, { quoted: info }).catch(e => {
              })
              fs.unlinkSync(rano)
            })
          }
  
          if (isAutoSticker && isGroup) {
            async function autofiguf() {
              await setTimeout(async () => {
                if (budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return
                if (type === "videoMessage") {
                  if ((isMedia && info.message.videoMessage.seconds < 40)) {
                    rane = getRandom('.' + await getExtension(info.message.videoMessage.mimetype))
                    buffimg = await getFileBuffer(info.message.videoMessage, 'video')
                    fs.writeFileSync(rane, buffimg)
                    const media = rane
                    rano = getRandom('.webp')
                    await ffmpeg(`./${media}`)
                      .inputFormat(media.split('.')[1])
                      .on('start', function (cmd) {
                        console.log(`Started : ${cmd}`)
                      })
                      .on('error', function (err) {
                        console.log(`Error : ${err}`)
                        exec(`webpmux -set exif ${addMetadata('bot', 'manu')} ${rano} -o ${rano}`, async (error) => {
                          fs.unlinkSync(media)
                          tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                          reply(`Falha na conversão de ${tipe} para sticker`)
                        })
                      })
                    exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                      fs.unlinkSync(media)
                      buffer = fs.readFileSync(rano)
                      client.sendMessage(from, { sticker: buffer }, { quoted: info })
                      fs.unlinkSync(rano)
                    })
                  }
                }
  
                if (type === "imageMessage") {
                  rane = getRandom('.' + await getExtension(info.message.imageMessage.mimetype))
                  buffimg = await getFileBuffer(info.message.imageMessage, 'image')
                  fs.writeFileSync(rane, buffimg)
                  const media = rane
                  rano = getRandom('.webp')
                  exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                    fs.unlinkSync(media)
                    buffer = fs.readFileSync(rano)
                    client.sendMessage(from, { sticker: buffer }, { quoted: info })
                    fs.unlinkSync(rano)
                  })
                }
              }, 1000)
            }
            autofiguf().catch(e => {
              console.log(e)
            })
          }
  
          var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  
          const isBot = info.key.fromMe ? true : false
  
          if (isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
            if (!isAntilinkgp) return
            if (!isUrl(body)) return
            if (body.includes("http")) {
              if (!budy2.includes("http")) return
              if (isBot) return
              linkgpp = await client.groupInviteCode(from)
              if (budy.match(`${linkgpp}`)) return reply('*Link do nosso grupo, não irei remover.. *')
              if (isGroupAdmins) return reply("*Link detectado, porém usuário é admin*")
              if (!JSON.stringify(groupMembers).includes(sender)) return
              client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
              client.groupParticipantsUpdate(from, [sender], 'remove')
            }
          }
  
          enviar = reply
  
          const cmde = budy.toLowerCase().split(" ")[0] || "";
          let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
          if (isAutoReact && isGroup && isCmd) {
            if (!isAutoReact) return
            emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
            reassao = emojis[Math.floor(Math.random() * emojis.length)]
            sendMsg = await client.sendMessage(from, { react: { text: reassao, key: info.key } })
          }
  
          if (isAutoReact && isGroup && !isCmd) {
            if (!isAutoReact) return
            emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
            reassao = emojis[Math.floor(Math.random() * emojis.length)]
            sendMsg = await client.sendMessage(from, { react: { text: reassao, key: info.key } })
          }
  
          const samih2 = JSON.parse(fs.readFileSync('./functions/simi.json'));
  
          const isSimi2 = isGroup ? samih2.includes(from) : false
  
  
          if (!isCmd && isSimi2 && isGroup) {
            if (isCmd || isUrl(budy2)) return
            if (budy.length >= 500) return
            if (budy.includes("@55")) return
            if (info.key.fromMe) return
            if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
            insert(type, info)
            const sami = await response(budy)
  
            if (sami) client.sendMessage(from, { text: sami, thumbnail: imagemdomenu }, { quoted: info });
          }
  
  
  
  
  
          async function upload(Path) {
            return new Promise(async (resolve, reject) => {
              if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
              try {
                const form = new BodyForm();
                form.append("file", fs.createReadStream(Path))
                const data = await axios({
                  url: "https://telegra.ph/upload",
                  method: "POST",
                  headers: {
                    ...form.getHeaders()
                  },
                  data: form
                })
                return resolve("https://telegra.ph" + data.data[0].src)
              } catch (err) {
                return reject(new Error(String(err)))
              }
            })
          }
  
          function writeExifImg(media, metadata) {
            let wMedia = imageToWebp(media)
            const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
            const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
            fs.writeFileSync(tmpFileIn, wMedia)
  
            if (metadata.packname || metadata.author) {
              const img = new webp.Image()
              const json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
              const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
              const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
              const exif = Buffer.concat([exifAttr, jsonBuff])
              exif.writeUIntLE(jsonBuff.length, 14, 4)
              img.load(tmpFileIn)
              fs.unlinkSync(tmpFileIn)
              img.exif = exif
              img.save(tmpFileOut)
              return tmpFileOut
            }
          }
  
          if (isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
            if (isGroupAdmins) return client.sendMessage(from, { text: '🍉MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI🍉' }, { quoted: info })
            await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
            setTimeout(async function () {
              client.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
          }
  
          if (isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
            if (isGroupAdmins) return client.sendMessage(from, { text: '🍉MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI🍉' }, { quoted: info })
            await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
            setTimeout(async function () {
              client.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
          }
  
          if (isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
            if (isGroupAdmins) return client.sendMessage(from, { text: '🍉MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI🍉' }, { quoted: info })
            await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
            setTimeout(async function () {
              client.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
          }
  
          if (Antidoc && isBotGroupAdmins && type == 'documentMessage') {
            if (isGroupAdmins) return client.sendMessage(from, { text: '🍉MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI🍉' }, { quoted: info })
            await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
            setTimeout(async function () {
              client.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
          }
  
          if (isAntiPv && !isGroup && !isOwner) {
            msgpvblock = `./func/call/msg_block-${sender}.json`
            fs.writeFileSync(msgpvblock, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR ENVIAR MENSAGEM PARA O BOT\n\n_- REALIZANDO AÇÃO _-", null, 2))
            msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock))
            reply(msgmsglbl)
            fs.unlinkSync(msgpvblock)
            setTimeout(async () => {
              client.updateBlockStatus(sender, 'block')
            }, 22)
            return
          }
  
          if (isBanchat && !isGroupAdmins && !isOwner) {
            if (!isGroupAdmins && !isOwner) return
            if (budy.toLowerCase().startsWith('unbangp')) {
              if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido!`)
              let lfd = bancht.indexOf(from)
              bancht.splice(lfd, 1)
              fs.writeFileSync('./functions/banchat.json', JSON.stringify(bancht))
              reply(`Grupo desbanido...`)
            }
          }
  
          if (isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
            if (isGroupAdmins) return client.sendMessage(from, { text: '🍉MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI🍉' }, { quoted: info })
            await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
            setTimeout(async function () {
              client.groupParticipantsUpdate(from, [sender], 'remove')
            }, 1000)
          }
  
  
          // RESPOSTAS DOS COMANDOS \\
          resposta = {
            espere: "[⚙️️]Aguarde...enviando ",
            aguarde: "[⚙️️]Aguarde...enviando ",
            dono: "[⚙️️]Esse comando so pode ser usado pelo meu dono!!! ",
            grupo: "[⚙️️]Esse comando só pode ser usado em grupo ",
            premium: "[⚙️️]comando so pra usuários premium",
            privado: "[⚙️️]Esse comando só pode ser usado no privado ",
            adm: "[⚙️️]Esse comando só pode ser usado por administradores de grupo",
            botadm: "[⚙️️]Este comando só pode ser usado quando o bot se torna administrador ",
            registro: `[⚙️️] Você não se registrou utilize ${prefix}login para se registrar `,
            norg: "[⚙️️] Você ja está registrado ",
            erro: "[⚙️️] Error, tente novamente mais tarde ",
            menu: "aaaaa"
          }
  
          comando = command
          
          if (isGroup) {
            if (isCmd && !isBot) {
              console.log(
                color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘦𝘮 𝘨𝘳𝘶𝘱𝘰 ”`, 'blue'),
                color(`\n➱ 🍉𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${comando}`, 'red'),
                color(`\n➱ 🍉𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
                color(`\n➱ 🍉𝙶𝚁𝚄𝙿𝙾: ${groupName}`, 'red'),
                color(`\n➱ 🍉𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
                color(`\n➱ 🍉𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
            } else if (!isBot) {
              console.log(
                color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘦𝘮 𝘨𝘳𝘶𝘱𝘰 ”`, 'blue'),
                color(`\n➱ 🍉𝙽𝚄́𝙼𝙴𝚁𝙾: ${color('Não', 'red')}`, 'orange'),
                color(`\n➱ 🍉𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
                color(`\n➱ 🍉𝙶𝚁𝚄𝙿𝙾: ${groupName}`, 'red'),
                color(`\n➱ 🍉𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
                color(`\n➱ 🍉𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
            }
          } else {
            if (isCmd && !isBot) {
              console.log(
                color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘯𝘰 𝘱𝘳𝘪𝘷𝘢𝘥𝘰”`, 'blue'),
                color(`\n➱ 🍉𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${comando}`, 'red'),
                color(`\n➱ 🍉𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
                color(`\n➱ 🍉𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
                color(`\n➱ 🍉𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
            } else if (!isBot) {
              console.log(
                color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘯𝘰 𝘱𝘳𝘪𝘷𝘢𝘥𝘰”`, 'blue'),
                color(`\n➱ 🍉𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${color('Não', 'red')}`, 'orange'),
                color(`\n➱ 🍉𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
                color(`\n➱ 🍉𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
                color(`\n➱ 🍉𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
            }
          }
  
          /*
          if(!isGroup && !isOwner && !m.key.fromMe && !isPremium){ 
          reply(`[🚫] 𝗔𝗡𝗧𝗜𝗣𝗩 𝗤𝗨𝗘 𝗕𝗟𝗢𝗤𝗨𝗘𝗜𝗔! [🚫]\nUsuários que enviarem mensagem no privado, será bloqueado pois antipv está ativo, fale com meu dono para solicitar o desbloqueio: wa.me/${numerodn}`)
          setTimeout(async () => {
          //pl.updateBlockStatus(sender, 'block')
          }, 1000)
          return
          }
          */
  
          const { pix } = require('@klawdyo/pix.js');
          switch (command) {

            //iai bro, aqui começa os comandos//

            case 'menu':

var  basemenu = { 
image: fotomenu,
caption: `
👤 Olá ${pushname}

    𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 𝑫𝑶 𝑩𝑶𝑻
┏━━━━━━━━━━━━━━━━━━
┃${prefix}s *faz fig marcando imagem*
┃${prefix}up 
┃${prefix}telegra.ph *link de imagem*
┗━━━━━━━━━━━━━━━━━━━

bot Джон Оливер Селлент
`,
contextInfo: {externalAdReply : {
title : `Джон Оливер Селлент`,
body : `${NomeBot}`,
renderLargerThumbnail:false,
showAdAttribution: true, 
mediaUrl: `https://google.com`, 
mediaType: 2, 
thumbnail: fotomenu,
}}}
client.sendMessage(from, basemenu)
break


            case 'up':
                client.sendMessage(from, {text: `eai mano Bot feito com intuito de criação para iniciantes!!!`}, {quoted: info})
                break

                case 'gerarlink':
                    case 'imgpralink':
                    case "telegra.ph":
                      try {
                        if (isQuotedImage) {
                          boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
                          const fetch = require('node-fetch');
                          const FormData = require('form-data');
                          const fs = require('fs');
                          async function uploadImageToTelegraph(imageBuffer) {
                            const form = new FormData();
                            form.append('file', imageBuffer, { filename: 'image.jpg' });
          
                            const response = await fetch('https://telegra.ph/upload', {
                              method: 'POST',
                              body: form,
                            });
                            const data = await response.json();
                            if (data && data[0] && data[0].src) {
                              return 'https://telegra.ph' + data[0].src;
                            } else {
                              throw new Error('Failed to retrieve the image URL from the response.');
                            }
                          }
                          const owgi = await getFileBuffer(boij, "image");
                          const imageUrl = await uploadImageToTelegraph(owgi);
                          reply(imageUrl);
                        } else {
                          reply('marque a ft')
                        }
                      } catch (e) {
                        console.log(e)
                        reply('error...')
                      }
                      break
                     
                      case 's':
  reply("Vou criar a figurinha, aguarde um momento...");
  try {
    if (isQuotedVideo || isQuotedImage  || isQuotedGif) {
      const quotedMessage = isQuotedVideo || isQuotedImage  || isQuotedGif ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : info;
      const mediaType = quotedMessage.message.videoMessage ? "video" : "image";
      const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
      const ffmpeg = require('fluent-ffmpeg');
      ffmpeg.setFfmpegPath(ffmpegPath);
      const fetch = require('node-fetch');
      const { createSticker } = require('wa-sticker-formatter');
      const FormData = require('form-data');
      const fs = require('fs');
      const filePath = `media.${mediaType}`;
      const buffer = await downloadMediaMessage(
        quotedMessage,
        'buffer',
        { },
        { 
          reuploadRequest: client.updateMediaMessage
        }
      );
      // save to file
      await writeFile(filePath, buffer);
      const mediaData = fs.readFileSync(filePath); // Agora fs está inicializado antes de ser usado
      const sticker = await createSticker(mediaData);
      const stickerName = `sticker.webp`;
      fs.writeFileSync(stickerName, Buffer.from(sticker, 'base64'));
      console.log('Figurinha animada criada:', stickerName);
      client.sendMessage(from, { sticker: fs.readFileSync(stickerName) }, { quoted: info });
    } else {
      reply('Por favor, responda a um vídeo ou GIF para criar uma figurinha animada.');
    }
  } catch (error) {
    console.error('Erro ao criar figurinha animada:', error);
    reply('Ocorreu um erro ao criar a figurinha animada. Por favor, tente novamente mais tarde.');
  }
  break;


                      




            //====================//


          default:
            if (isCmd && command) {
              const buttonMessage = { text: `comando inexistente...` }
              client.sendMessage(from, buttonMessage)
            }

        }

      } catch (e) {
        console.log(e)
      }
    });

  }
  // Conectar à rede do WhatsApp
  starts();

} catch (error) {
  console.error("Ocorreu um erro:", error);
}

//O limite do conhecimento é a preguiça de aprender mais//
  //bot feito por João Pedro, Turma de DS Proz//
