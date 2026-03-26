import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Movimiento = () => {
    const {deleteMovimiento} = useContext(GlobalContext)
    const signo = Movimiento.importe < 0 ? '-': '+'
  return (
    <li className={Movimiento.importe < 0 ? 'minus' : 'plus'}>
        {movimiento.descripcion} <span>{signo}${Math.abs(movimiento.importe).toFixed(2)}</span>
        <button className='delete-btn' onClick={()=> deleteMovimiento(movimiento._id)}></li>X</button> 
    </li>
  )
}

export default Movimiento