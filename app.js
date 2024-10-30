
try {
  const { default: makeWASocket, prepareWAMessageMedia, makeCacheableSignalKeyStore, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');
  const mimetype = require("mime-types")
  const ffmpeg = require('./node_modules/fluent-ffmpeg');
  const fs = require('fs');
  const P = require('pino');
  const ytts = require("yt-search");
  const ytttts = require("yt-search");
  const vCardsJS = require('vcards-js');
  const { writeFile } = require('fs/promises')
  const { downloadMediaMessage } = require('@whiskeysockets/baileys')
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
  let bancht = JSON.parse(fs.readFileSync('./functions/banchat.json'));
  const infoBot = JSON.parse(fs.readFileSync('./config.json'));
  const imagemdomenu = "https://telegra.ph/file/41e27ca006bb7488f155d.png"
  const { palavras } = require('./functions/conselhos.js');
  const { ytv } = require('./functions/y2mate.js')
  const { fromBuffer } = require("file-type");
  const bye_group2 = JSON.parse(fs.readFileSync('./functions/byegp.json'));
  const { insert, response } = require('./functions/simi.js');
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
  const { TextoDoBemvindo } = require("./info/TextoDoBemvindo.js")
  const { TextoDoSaiu } = require("./info/TextoDoBemvindo.js")
  const { Aki } = require('aki-api')
  const { Error } = JSON.parse(fs.readFileSync('./functions/Erro.json'))
  let fotomenu = fs.readFileSync("./loli/image/menu.jpg");

  ///////////////////////////////////////////////

  //====== defina ======\\ config.json

  var prefix = infoBot.prefix //prefixo 

  var nomeBot = infoBot.nomeBot// nome do bot 

  var NomeBot = infoBot.nomeBot// nome do bot 

  var nomeDono = infoBot.nomeDono// nome do dono 

  var SoDono = infoBot.numeroDono

  var link = infoBot.link

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

    // MENSAGEM ATUALIZAÇÃO 
    client.ev.on('messages.upsert', async connection => {
      const info = connection.messages[0];
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

        const pushname = info.pushName ? info.pushName : ''
        const username = info.username ? info.username : ''
        const isGroup = info.key.remoteJid.endsWith('@g.us')
        const sender = isGroup ? info.key.participant : info.key.remoteJid

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
        const isGif = type == 'gifMessage'
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
        const isQuotedGif = type === 'extendedTextMessage' && content.includes('videoMessage')
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

        switch (command) {

          //iai bro, aqui começa os comandos//

          case 'menu':

            var basemenu = {
              image: fotomenu,
              caption: `
👤 Olá ${pushname}

    𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 𝑫𝑶 𝑩𝑶𝑻
┏━━━━━━━━━━━━━━━━━━
┃${prefix}s *faz fig marcando imagem*
┃${prefix}up
┗━━━━━━━━━━━━━━━━━━━

bot Джон Оливер Селлент
`,
              contextInfo: {
                externalAdReply: {
                  title: `Джон Оливер Селлент`,
                  body: `${NomeBot}`,
                  renderLargerThumbnail: false,
                  showAdAttribution: true,
                  mediaUrl: `https://google.com`,
                  mediaType: 2,
                  thumbnail: fotomenu,
                }
              }
            }
            client.sendMessage(from, basemenu)
            break


          case 'up':
            client.sendMessage(from, { text: `eai mano Bot feito com intuito de criação para iniciantes!!!` }, { quoted: info })
            break

          case 's':
          case 'fig':
            reply('Irei criar a figurinha, aguarde um momento...');
            try {
              if (isQuotedVideo || isQuotedImage || isQuotedGif) {
                let quotedMessage = isQuotedVideo || isQuotedImage || isQuotedGif ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info;
                let mediaType = quotedMessage.message.videoMessage ? 'video' : 'image';
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
                  {},
                  {
                    reuploadRequest: client.updateMediaMessage
                  }
                );
                // to save file
                await writeFile(filePath, buffer);
                const  mediaData = fs.readFileSync(filePath); //iniciar fs antes de usar
                const sticker = await createSticker(mediaData);
                const stickerName = `sticker.webp`;
                fs.writeFileSync(stickerName, Buffer.from(sticker, 'base32'));
                console.log('figurinha criada!', stickerName)
                client.sendMessage(from, { sticker: fs.readFileSync(stickerName) }, { quoted: info });
              } else {
                reply('Por favor, responda a um vídeo ou GIF ou imagem, para a figurinha ser criada');
              }
            } catch (error) {
              console.error('Erro ao criar figurinha animada:', error);
              reply('Ocorreu um erro ao criar a figurinha animada. Por favor, tente novamente mais tarde.');
            };
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
