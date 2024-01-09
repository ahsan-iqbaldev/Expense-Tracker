import  { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MdDeleteForever } from "react-icons/md";

export const Transaction = ({transaction}) => {


  const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <>
    <div className='card'>
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
    {transaction?.text} <span>{sign}{Math.abs(transaction?.amount)}</span>
    <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}><MdDeleteForever className='icon' /></button>
    </li>
    </div>
  </>
  )
}
