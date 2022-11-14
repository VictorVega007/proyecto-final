const twilio = require('twilio')
const dotenv = require('dotenv')
dotenv.config()

const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const PHONE_NUMBER_WHATSAPP = 'whatsapp:+14155238886'

const client = twilio(ACCOUNT_SID, AUTH_TOKEN)

const sendWhatsApp = async (user, admin) => {
    try {
        await client.messages.create({
            body: `Hola ${admin.nombre}! Tienes un nuevo pedido de ${user.nombre} ${user.apellido}. Puedes contactarlo al siguiente email: ${user.username}`,
            from: PHONE_NUMBER_WHATSAPP,
            to: `whatsapp:${admin.telefono}`
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendWhatsApp