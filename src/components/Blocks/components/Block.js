import React from 'react'
import DialogWindow from '../DialogWindow/DialogWindow'
import './Block.css'

function Block({ block }) {
  return (
    <div className="block">
      <div className="block__container">
        {' '}
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
      </div>
      {block.transactions === 'Genesis block' && <p className="block__genesis">Genesis Block</p>}
      {block.transactions !== 'Genesis block' && (
        <DialogWindow transactions={block.transactions} />
      )}
    </div>
  )
}

export default Block
