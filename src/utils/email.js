import nodemailer from 'nodemailer'
import { templateEmail } from './templateEmail.js'

const createTransport = () => {
  const { MAILTRAP_PASS, MAILTRAP_USER, MAILTRAP_HOST, MAILTRAP_PORT } =
    process.env

  return nodemailer.createTransport({
    auth: {
      pass: MAILTRAP_PASS,
      user: MAILTRAP_USER
    },
    host: MAILTRAP_HOST,
    port: MAILTRAP_PORT
  })
}

export const sendMail = async (email, userName) => {
  const transport = createTransport()
  const inf = await transport.sendMail({
    from: '"BLOG" <develop.localhost.test@gmail.com',
    html: templateEmail(userName),
    subject: `Welcome ${userName}, Please confirm account`,
    to: email
  })
  return inf.messageId
}
