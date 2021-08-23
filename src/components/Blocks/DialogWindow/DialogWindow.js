import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

function DialogWindow({ transactions }) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className="block__button"
        onClick={handleClickOpen}
      >
        Transactions
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Transactions</DialogTitle>
        <DialogContent>
          {Array.from(transactions).map((transaction, id) => {
            return (
              <h3 className="dialog__header" key={id}>
                <p>
                  <span>from</span>
                  {transaction.fromAddress !== null && (
                    <p>{transaction.fromAddress}</p>
                  )}
                  {transaction.fromAddress === null && <p>Mining Reward</p>}
                </p>
                <p>
                  <span>to</span>
                  <p> {transaction.toAddress}</p>
                </p>
                <p>
                  <span>Amount</span>
                  <p> {transaction.amount} JTC</p>
                </p>
              </h3>
            )
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogWindow
