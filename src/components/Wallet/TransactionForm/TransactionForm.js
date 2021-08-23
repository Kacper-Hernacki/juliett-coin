import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

function TransactionForm() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
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
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Transfer coins
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TransactionForm
