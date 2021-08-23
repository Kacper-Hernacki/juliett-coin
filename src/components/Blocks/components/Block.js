import { Button } from '@material-ui/core'
import React from 'react'
import './Block.css'

function Block({ block }) {
  return (
    <div className="block">
      <p>
        <span>Timestamp:</span>
        {block.timestamp}
      </p>
      <p>
        <span>Hash:</span>
        {block.hash}
      </p>
      <p>
        <span>Previous Hash:</span>
        {block.previousHash}
      </p>
      <Button variant="contained" color="primary" className="block__button">
        Transactions
      </Button>
    </div>
  )
}

export default Block
