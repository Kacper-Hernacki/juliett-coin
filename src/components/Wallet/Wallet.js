import React from 'react'
import './Wallet.css'
import TransactionForm from './TransactionForm/TransactionForm'
import ShowAddress from './ShowAddress/ShowAddress'
import History from './History/History'

function Wallet({ myWalletAddress, balance, blockchain }) {
  return (
    <div className="wallet">
      <h2>Wallet Address</h2>
      <div className="wallet__addressContainer">
        <p className="wallet__address">{myWalletAddress}</p>
        <ShowAddress myWalletAddress={myWalletAddress} />
      </div>
      <div className="wallet__balance">
        <h3>Balance</h3>
        <div className="wallet__balanceContainer">{balance} JTC</div>
      </div>
      <div className="wallet__transactions">
        <h3>History</h3>
        <History myWalletAddress={myWalletAddress} blockchain={blockchain} />
      </div>
      <TransactionForm blockchain={blockchain} />
    </div>
  )
}

export default Wallet
