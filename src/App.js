import './App.css'
// Components
import Nav from './components/Nav/Nav'
import Wallet from './components/Wallet/Wallet'
import Blocks from './components/Blocks/Blocks'
// blockchain structure
import { Blockchain, Transaction } from './blockchain/blockchain'
// keys
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

function App() {
  // getting the key for wallet address
  const myKey = ec.keyFromPrivate(
    '90791a587f874cc9bdee0350feb4bda73199c431f4b635b6e1b6f0dd4cfea290',
  )
  const myWalletAddress = myKey.getPublic('hex')

  // creating a Blockchain
  let JuliettCoin = new Blockchain()

  // wallet properties
  const Balance = JuliettCoin.getBalanceOfAddress(myWalletAddress)

  // checking the chain
  console.log(JSON.stringify(JuliettCoin, null, 4))

  return (
    <div className="app">
      <Nav />
      <div className="app__container">
        <Wallet balance={Balance} myWalletAddress={myWalletAddress} />
        <Blocks blockchain={JuliettCoin.chain} />
      </div>
    </div>
  )
}

export default App
