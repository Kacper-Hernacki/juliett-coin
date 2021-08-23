import React, { useEffect, useState } from 'react'

function History({ blockchain, myWalletAddress }) {
  const [result, setResult] = useState([])

  // logic to find an address in transactions
  useEffect(() => {
    // create an array of transactions
    let arr = []
    for (let i = 1; i <= blockchain.chain.length - 1; i++) {
      arr.push(blockchain.chain[i])
    }
    let transactions = []
    for (let i = 0; i <= arr.length - 1; i++) {
      for (let j = 0; j <= arr[i]?.transactions.length - 1; j++) {
        transactions.push(arr[i].transactions[j])
      }
    }

    let rows = []
    // finding rows with walllet address
    for (let i = 0; i <= transactions.length - 1; i++) {
      if (
        transactions[i].toAddress === myWalletAddress ||
        transactions[i].fromAddress === myWalletAddress
      ) {
        rows.push(transactions[i])
      }
    }

    let resultArray = []
    // setting for displaying
    for (let i = 0; i <= rows.length - 1; i++) {
      if (rows[i].toAddress === myWalletAddress) {
        let row = ['incoming', rows[i].amount, rows[i].fromAddress]
        resultArray.push(row)
      }
      if (rows[i].fromAddress === myWalletAddress) {
        let row = ['outcoming', rows[i].amount, rows[i].toAddress]
        resultArray.push(row)
      }
    }

    setResult(resultArray)
  }, [])

  console.log(result)

  return (
    <div className="history">
      {result.map((row, id) => {
        return <h6 key={id}>{row[0]}</h6>
      })}
    </div>
  )
}

export default History
