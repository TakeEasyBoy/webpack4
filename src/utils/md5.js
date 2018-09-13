import crypto from 'crypto'

const salt = 'Ithinkthisguymustbecrasy!'

export const md5 = (data) => {
  const md5 = crypto.createHash('md5')
  md5.update(data + salt)
  const a = md5.digest('hex')
  return a
}
