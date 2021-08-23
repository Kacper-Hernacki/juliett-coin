const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const key = ec.genKeyPair()
const publicKey = key.getPublic('hex')
const privateKey = key.getPrivate('hex')

// generating keys only once, for learning purposes
console.log('Private key: ', privateKey)
console.log('Public key ', publicKey)
