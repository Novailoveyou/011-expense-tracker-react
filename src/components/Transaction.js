import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction: { id, text, amount } }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const amountIsNegative = amount < 0
  const sign = amountIsNegative ? '-' : '+'
  return (
    <li className={amountIsNegative ? 'minus' : 'plus'}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className='delete-btn' onClick={() => deleteTransaction(id)}>
        x
      </button>
    </li>
  )
}

export default Transaction
