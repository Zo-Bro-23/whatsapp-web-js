const whatsapplib = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

const client = new whatsapplib.Client({
    authStrategy: new whatsapplib.LocalAuth({ clientId: 'business' })
})

client.on('qr', qr => {
    console.log('QR RECEIVED', qr)
    qrcode.generate(qr, { small: true })
})

client.on('message', msg => {
    msg.reply('This API is currently under construction - Sorry, we cannot take your message at the moment.')
})

client.initialize()