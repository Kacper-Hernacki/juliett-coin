import React from 'react'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: 'bold',
    color: '#3f51b5',
  },
}))

function Settings() {
  const [open, setOpen] = useState(false)
  const [difficulty, setDifficulty] = useState(2)
  const [minigReward, setMiningReward] = useState(100)
  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const save = () => {
    // logic to save blockchain data
  }

  return (
    <div>
      {' '}
      <Button
        className={classes.button}
        variant="contained"
        onClick={handleClickOpen}
      >
        Settings
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Blockchain settings</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Set the difficulty of mining a block and mining reward
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="difficulty"
            label="Mining Difficulty"
            type="number"
            fullWidth
            required
            onChange={(e) => setDifficulty(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="reward"
            label="Mining Reward"
            type="number"
            fullWidth
            required
            onChange={(e) => setMiningReward(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={save} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Settings
