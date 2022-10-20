import nodemailer from 'nodemailer'
import { templateEmail } from './templateEmail.js'

const createTransport = () => {
  const { GMAIL_PASS, GMAIL_USER, GMAIL_HOST, GMAIL_PORT } = process.env

  return nodemailer.createTransport({
    auth: {
      pass: GMAIL_PASS,
      user: GMAIL_USER
    },
    host: GMAIL_HOST,
    port: GMAIL_PORT,
    secure: true
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
