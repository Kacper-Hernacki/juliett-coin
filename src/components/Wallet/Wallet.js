import React, { useState } from 'react'
import './Wallet.css'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { IconButton } from '@material-ui/core'
import TransactionForm from './TransactionForm/TransactionForm'
import ShowAddress from './ShowAddress/ShowAddress'

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
      </div>
      <TransactionForm blockchain={blockchain} />
    </div>
  )
}

export default Wallet
