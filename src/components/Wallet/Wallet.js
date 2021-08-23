import React from 'react'
import './Wallet.css'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { Button, IconButton } from '@material-ui/core'

function Wallet({ myWalletAddress, balance }) {
  return (
    <div className="wallet">
      <h2>Wallet Address</h2>
      <div className="wallet__addressContainer">
        <p className="wallet__address">{myWalletAddress}</p>
        <IconButton>
          <VisibilityIcon />
        </IconButton>
      </div>
      <div className="wallet__balance">
        <h3>Balance</h3>
        <div className="wallet__balanceContainer">{balance} JTC</div>
      </div>
      <div className="wallet__transactions">
        <h3>History</h3>
      </div>
      <Button className="wallet__button" variant="contained" color="primary">
        Make a Transaction
      </Button>
    </div>
  )
}

export default Wallet
