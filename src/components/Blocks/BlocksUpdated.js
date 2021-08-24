import React from 'react'
import Block from './components/Block'
import './Blocks.css'

function BlocksUpdated({ blockchain }) {
  console.table(blockchain)
  return (
    <div className="blocks">
      <h2>Mined Blocks</h2>
      <div className="blocks__container">
        {/* {blockchain.map((block, id) => {
          return <Block key={id} block={block} />
        })} */}
      </div>
    </div>
  )
}

export default BlocksUpdated
