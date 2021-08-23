import { Button } from '@material-ui/core'
import React from 'react'
import DialogWindow from '../DialogWindow/DialogWindow'
import './Block.css'

function Block({ block }) {
  console.log(block.transactions[1].toAddress)
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
      {/* {block.transactions.map((transaction, id) => {
        return <h3 key={id}>{transaction.toAddress}</h3>
      })} */}
      <DialogWindow transactions={block.transactions} />
    </div>
  )
}

export default Block
