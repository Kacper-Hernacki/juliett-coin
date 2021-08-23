import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'
import { Transaction } from '../../../blockchain/blockchain'
// keys
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

function TransactionForm({ blockchain }) {
  const user = useSelector(selectUser)
  const [open, setOpen] = useState(false)
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState(0)

  const myKey = ec.keyFromPrivate(
    '90791a587f874cc9bdee0350feb4bda73199c431f4b635b6e1b6f0dd4cfea290',
  )
  const myWalletAddress = myKey.getPublic('hex')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const makeTransaction = () => {
    const transaction = new Transaction(myWalletAddress, address, amount)
    transaction.signTransaction(myKey)
    blockchain.addTransaction(transaction)
    console.log('\n Starting the miner. Mining.....')
    blockchain.minePendingTransactions(myWalletAddress)

    console.log(
      '\nBalance of Kacper is',
      blockchain.getBalanceOfAddress(myWalletAddress),
    )
    console.log(JSON.stringify(blockchain, null, 4))
    setOpen(false)
  }

  return (
    <div>
      {' '}
      <Button
        className="wallet__button"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Make a Transaction
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Transaction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To make a transaction, please type address of a wallet which should
            obtain your coins.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Wallet Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label="Amount of Coins"
            type="number"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={makeTransaction} variant="contained" color="primary">
            Transfer coins
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TransactionForm
