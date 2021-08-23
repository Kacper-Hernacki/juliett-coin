import React from 'react'
import DialogWindow from '../DialogWindow/DialogWindow'
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

      <DialogWindow transactions={block.transactions} />
    </div>
  )
}

export default Block
